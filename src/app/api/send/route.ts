import { Resend } from 'resend';
import { NextResponse } from 'next/server';

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
      from: 'Lékol <onboarding@resend.dev>', // Nom + email expéditeur
      to: [process.env.ADMIN_EMAIL!],
      subject: '🎯 Nouvelle inscription pré-lancement Lékol',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f9fa; padding: 20px;">
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #2B80F6; margin-bottom: 20px;">🚀 Nouvelle inscription Lékol</h2>
            <div style="background: #f1f8ff; padding: 20px; border-radius: 8px; border-left: 4px solid #2B80F6;">
              <p style="margin: 5px 0;"><strong>📧 Email:</strong> ${email}</p>
              <p style="margin: 5px 0;"><strong>📅 Date:</strong> ${currentDate}</p>
              <p style="margin: 5px 0;"><strong>🌐 Source:</strong> Page de pré-lancement</p>
            </div>
            <p style="margin-top: 20px; color: #666;">
              Un nouvel utilisateur s'est inscrit et attend le lancement de Lékol !
            </p>
          </div>
        </div>
      `,
    });

    if (adminError) {
      console.error('Erreur envoi admin:', adminError);
      return NextResponse.json(
        { success: false, error: 'Erreur lors de l\'envoi de notification' },
        { status: 500 }
      );
    }

    // 2. Envoyer l'email de confirmation à l'utilisateur
    const { data: userData, error: userError } = await resend.emails.send({
      from: 'Équipe Lékol <onboarding@resend.dev>', // Nom personnalisé
      to: [email],
      subject: '🎉 Merci ! Vous êtes sur la liste de Lékol',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); padding: 20px;">
          <div style="background: white; padding: 40px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
            
            <!-- Header avec logo/titre -->
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #2B80F6; font-size: 28px; margin: 0;">
                <span style="font-size: 32px;">🎓</span> Lékol
              </h1>
              <p style="color: #666; margin: 5px 0 0 0;">Le soutien scolaire repensé</p>
            </div>

            <!-- Message principal -->
            <div style="text-align: center; margin-bottom: 30px;">
              <h2 style="color: #333; font-size: 24px; margin-bottom: 15px;">
                🎉 Bienvenue parmi nos early adopters !
              </h2>
              <p style="font-size: 16px; line-height: 1.6; color: #555;">
                Bonjour,<br><br>
                Merci de votre intérêt pour <strong>Lékol</strong> ! Nous avons bien enregistré votre adresse email : 
                <span style="color: #2B80F6; font-weight: bold;">${email}</span>
              </p>
            </div>

            <!-- Promesse de valeur -->
            <div style="background: #f8f9ff; padding: 25px; border-radius: 10px; border-left: 4px solid #2B80F6; margin: 25px 0;">
              <h3 style="color: #2B80F6; margin: 0 0 15px 0; font-size: 18px;">
                🚀 Ce qui vous attend :
              </h3>
              <ul style="color: #555; margin: 0; padding-left: 20px; line-height: 1.8;">
                <li>📚 Soutien scolaire personnalisé et accessible</li>
                <li>🎯 Méthodes d'apprentissage innovantes</li>
                <li>💡 Interface simple et intuitive</li>
                <li>🔥 Accès prioritaire dès le lancement</li>
              </ul>
            </div>

            <!-- Call to action -->
            <div style="text-align: center; margin: 30px 0;">
              <p style="color: #555; margin-bottom: 20px;">
                Vous serez parmi les <strong>premiers</strong> à découvrir Lékol dès son lancement !
              </p>
              <div style="background: linear-gradient(45deg, #2B80F6, #1e6bd6); color: white; padding: 15px 30px; border-radius: 25px; display: inline-block; font-weight: bold;">
                🎊 Vous êtes sur la liste VIP !
              </div>
            </div>

            <!-- Footer -->
            <div style="border-top: 1px solid #eee; padding-top: 20px; margin-top: 30px; text-align: center;">
              <p style="color: #999; font-size: 14px; margin: 0;">
                Suivez-nous pour ne rien rater du développement de Lékol<br>
                <span style="color: #666;">Si vous n'avez pas demandé cette inscription, vous pouvez ignorer cet email.</span>
              </p>
            </div>

          </div>
        </div>
      `,
    });

    // Log l'erreur mais ne fait pas échouer la requête
    if (userError) {
      console.error('Erreur envoi utilisateur:', userError);
    }

    return NextResponse.json({ 
      success: true, 
      data: { adminData, userData },
      message: 'Inscription enregistrée avec succès',
      userEmailSent: !userError
    });

  } catch (error) {
    console.error('Erreur API:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur serveur interne' },
      { status: 500 }
    );
  }
}