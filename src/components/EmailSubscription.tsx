'use client';
import { useState } from 'react';
import { Button } from './ui/button'; // Ajustez selon votre structure

export default function EmailSubscription() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setMessage({ text: 'Veuillez entrer votre email', type: 'error' });
      return;
    }

    // Validation email basique
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage({ text: 'Veuillez entrer un email valide', type: 'error' });
      return;
    }

    setIsLoading(true);
    setMessage({ text: '', type: '' });

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage({ text: 'Merci ! Votre inscription a été enregistrée.', type: 'success' });
        setEmail('');
      } else {
        setMessage({ text: data.error || 'Une erreur est survenue', type: 'error' });
      }
    } catch (error) {
      setMessage({ text: 'Erreur de connexion. Veuillez réessayer.', type: 'error' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row gap-5 items-center mt-5 w-full justify-center">
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-1 px-3 border-2 rounded-md focus:shadow-lg flex-1 min-w-0" 
            placeholder="Entrez votre Email"
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Envoi...' : 'Envoyer'}
          </Button>
        </div>
      </form>
      
      {message.text && (
        <div className={`mt-3 text-center text-sm p-2 rounded transition-all duration-300 ${
          message.type === 'success' 
            ? 'text-green-600 bg-green-50 border border-green-200' 
            : 'text-red-600 bg-red-50 border border-red-200'
        }`}>
          {message.text}
        </div>
      )}
    </div>
  );
}
