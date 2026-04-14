import React from 'react';

interface ButtonProps {
  title: string;
  onClick: () => void;
}

const DefaultButton = ({ title, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#d43d4d')}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#e94d5d')}
      style={{
        width: '100%',
        padding: '14px',
        backgroundColor: '#e94d5d',
        color: 'white',
        border: 'none',
        borderRadius: '12px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: '600',
        marginTop: '10px',
        transition: 'background-color 0.3s ease',
        boxShadow: '0 4px 12px rgba(233, 77, 93, 0.2)',
      }}
    >
      {title}
    </button>
  );
};

export default DefaultButton;