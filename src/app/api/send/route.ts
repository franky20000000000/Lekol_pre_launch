import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { EmailTemplate, ConfirmationTemplate } from '@/components/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email }: { email: string } = await request.json();

    // Validation côté serveur
    if (!email) {
      return NextResponse.json(
        { success: false, error: 'Email requis' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Email invalide' },
        { status: 400 }
      );
    }

    const currentDate = new Date().toLocaleString('fr-FR');

    // 1. Envoyer la notification à vous (admin)
    const { data: adminData, error: adminError } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [process.env.ADMIN_EMAIL!],
      subject: 'Nouvelle inscription newsletter',
      react: EmailTemplate({ email, date: currentDate }) as React.ReactElement,
    });

    if (adminError) {
      console.error('Erreur envoi admin:', adminError);
      return NextResponse.json(
        { success: false, error: 'Erreur lors de l\'envoi' },
        { status: 500 }
      );
    }

    // 2. Envoyer l'email de confirmation à l'utilisateur (optionnel)
    try {
      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: [email],
        subject: 'Confirmation d\'inscription',
        react: ConfirmationTemplate({ email }) as React.ReactElement,
      });
    } catch (userError) {
      console.error('Erreur envoi utilisateur:', userError);
      // On continue même si l'email de confirmation échoue
    }

    return NextResponse.json({ 
      success: true, 
      data: adminData,
      message: 'Inscription enregistrée avec succès' 
    });

  } catch (error) {
    console.error('Erreur API:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}