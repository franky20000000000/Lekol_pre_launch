import * as React from 'react';

interface EmailTemplateProps {
  email: string;
  date?: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,
  date
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
    <h2 style={{ color: '#333' }}>Nouvelle inscription à la newsletter</h2>
    <div style={{ 
      background: '#f5f5f5', 
      padding: '20px', 
      borderRadius: '8px', 
      margin: '20px 0' 
    }}>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Date:</strong> {date || new Date().toLocaleString('fr-FR')}</p>
      <p><strong>Source:</strong> Lékol </p>
    </div>
    <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '20px 0' }} />
    <p style={{ color: '#666', fontSize: '14px' }}>
      Cette inscription provient de votre site web.
    </p>
  </div>
);

// Template pour l'email de confirmation à l'utilisateur
export const ConfirmationTemplate: React.FC<Readonly<{ email: string }>> = ({
  email
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
    <h2 style={{ color: '#333' }}>Merci pour votre inscription !</h2>
    <p>Bonjour,</p>
    <p>Nous vous confirmons votre inscription à notre newsletter avec ladresse : <strong>{email}</strong></p>
    <p>Vous recevrez bientôt nos dernières actualités et offres exclusives.</p>
    <div style={{ 
      background: '#f8f9fa', 
      padding: '15px', 
      borderRadius: '8px', 
      marginTop: '20px' 
    }}>
      <p style={{ margin: 0, color: '#666' }}>
        Si vous navez pas demandé cette inscription, vous pouvez ignorer cet email.
      </p>
    </div>
    <p>À bientôt !</p>
  </div>
);