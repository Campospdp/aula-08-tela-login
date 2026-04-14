import { useState } from 'react';
import DefaultInput from './components/DefaultInput';
import DefaultButton from './components/DefaultButton';

// 1. Importe as imagens (ajuste o caminho se necessário)
import imgGoogle from './assets/google.png';
import imgFacebook from './assets/facebook.png';
import imgApple from './assets/apple.png';

function App() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    console.log("Nome do usuário digitado:", usuario);
    alert(`Sucesso! O nome enviado foi: ${usuario}`);
  };

  // Criamos um array com as imagens para facilitar o mapeamento
  const socialLogos = [imgGoogle, imgFacebook, imgApple];

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f0f2f5',
      fontFamily: "'Segoe UI', Roboto, sans-serif"
    }}>
      <div style={{
        width: '100%',
        maxWidth: '380px',
        padding: '40px 30px',
        backgroundColor: '#fff',
        borderRadius: '24px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
        textAlign: 'center'
      }}>
        {/* Cabeçalho */}
        <div style={{ textAlign: 'left', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: '800', margin: '0', color: '#1a1a1a' }}>
            Bem-vindo <br/> <span style={{ color: '#e94d5d' }}>de volta!</span>
          </h1>
          <p style={{ color: '#888', marginTop: '10px', fontSize: '14px' }}>
            Por favor, faça login na sua conta
          </p>
        </div>
        
        {/* Campos de Entrada */}
        <DefaultInput 
          placeholder="Usuário ou E-mail" 
          value={usuario} 
          onChange={setUsuario} 
        />
        
        <DefaultInput 
          placeholder="Senha" 
          type="password" 
          value={senha} 
          onChange={setSenha} 
        />

        <p style={{ 
          textAlign: 'right', 
          fontSize: '13px', 
          color: '#e94d5d', 
          fontWeight: '600',
          cursor: 'pointer',
          marginBottom: '25px' 
        }}>
          Esqueceu a senha?
        </p>

        {/* Botão de Ação */}
        <DefaultButton 
          title="Entrar" 
          onClick={handleLogin} 
        />

        {/* Rodapé Social */}
        <div style={{ marginTop: '30px' }}>
          <p style={{ fontSize: '13px', color: '#aaa', marginBottom: '20px' }}>ou continue com</p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
            {socialLogos.map((logo, index) => (
              <div key={index} style={{
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                border: '1px solid #eee',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                overflow: 'hidden'
              }}>
                <img 
                  src={logo} 
                  alt={`Social login ${index}`} 
                  style={{ width: '24px', height: '24px', objectFit: 'contain' }} 
                />
              </div>
            ))}
          </div>

          <p style={{ fontSize: '14px', marginTop: '30px', color: '#444' }}>
            Não tem uma conta? <span style={{ color: '#e94d5d', fontWeight: 'bold', cursor: 'pointer' }}>Cadastre-se</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;