import React, { useState } from 'react';

interface QrData {
  qr_code_image_base64: string;
  qr_code_copy_paste: string;
}

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [qrData, setQrData] = useState<QrData | null>(null);
  const [error, setError] = useState<string>('');

  const handlePixPayment = async (): Promise<void> => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/payments/pix`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
              body: JSON.stringify({
        amount: 150,
        customerName: 'Heric Dev',
        city: 'São Paulo',
        }),
      });

      if (!response.ok) {
        throw new Error('Erro na resposta do servidor');
      }

      const data: QrData = await response.json();
      setQrData(data);
    } catch (err) {
      console.error(err);
      setError('Erro ao gerar pagamento PIX');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #dbeafe, #f8fafc)',
        fontFamily: 'Segoe UI, Roboto, sans-serif',
        padding: '20px',
      }}
    >
      <h1 style={{ marginBottom: '20px', color: '#1e293b' }}>Pagamento com PIX</h1>

      <button
        onClick={handlePixPayment}
        disabled={loading}
        style={{
          padding: '12px 24px',
          backgroundColor: '#0ea5e9',
          color: 'white',
          fontSize: '16px',
          fontWeight: 'bold',
          border: 'none',
          borderRadius: '8px',
          cursor: loading ? 'not-allowed' : 'pointer',
          marginBottom: '30px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          transition: 'background 0.3s ease',
        }}
      >
        {loading ? 'Gerando...' : 'Pagar com PIX'}
      </button>

      {qrData && (
        <div
          style={{
            backgroundColor: '#ffffff',
            padding: '24px',
            borderRadius: '16px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            maxWidth: '360px',
            width: '100%',
          }}
        >
          <h2 style={{ marginBottom: '16px', color: '#0f172a' }}>
            Escaneie com seu app bancário
          </h2>

          <img
            src={qrData.qr_code_image_base64}
            alt="QR Code PIX"
            style={{
              width: '200px',
              height: '200px',
              borderRadius: '8px',
              marginBottom: '16px',
            }}
          />

          <p
            style={{
              fontFamily: 'monospace',
              fontSize: '14px',
              color: '#475569',
              wordBreak: 'break-word',
              backgroundColor: '#f1f5f9',
              padding: '8px',
              borderRadius: '8px',
            }}
          >
            {qrData.qr_code_copy_paste}
          </p>
        </div>
      )}

      {error && <p style={{ color: 'red', marginTop: '20px' }}>{error}</p>}
    </div>
  );
};

export default App;
