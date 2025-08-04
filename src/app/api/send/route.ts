import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email }: { email: string } = await request.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Email invalide' },
        { status: 400 }
      );
    }

    // 1. Email à vous (admin) - fonctionne toujours
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [process.env.ADMIN_EMAIL!],
      subject: 'Nouvelle inscription Lékol',
      html: `
        <h2>Nouvelle inscription</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString('fr-FR')}</p>
      `,
    });

    // 2. Email à l'utilisateur
    await resend.emails.send({
      from: 'delivered@resend.dev', // ← CHANGEMENT ICI
      to: [email],
      subject: 'Bienvenue sur Lékol !',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #2B80F6;">🎓 Lékol</h1>
          <h2>🎉 Merci pour votre inscription !</h2>
          
          <p>Bonjour,</p>
          <p>Votre inscription a bien été prise en compte avec l'adresse : <strong>${email}</strong></p>
          
          <div style="background: #f0f8ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #2B80F6;">🚀 Vous serez averti du lancement de Lékol</h3>
            <p>Le soutien scolaire repensé, simple et accessible pour tous.</p>
          </div>
          
          <p>À très bientôt ! 🚀</p>
          
          <hr style="margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">
            Si vous n'avez pas demandé cette inscription, ignorez cet email.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Erreur:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur lors de l\'envoi' },
      { status: 500 }
    );
  }
}