interface InputProps {
  placeholder: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
}

const DefaultInput = ({ placeholder, type = "text", value, onChange }: InputProps) => {
  return (
    <div style={{ marginBottom: '15px' }}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: '100%',
          padding: '14px 16px',
          borderRadius: '12px',
          border: '1px solid #eee',
          backgroundColor: '#f8f9fa',
          fontSize: '14px',
          outline: 'none',
          transition: 'all 0.3s ease',
          boxSizing: 'border-box',
        }}
        onFocus={(e) => (e.target.style.border = '1px solid #e94d5d')}
        onBlur={(e) => (e.target.style.border = '1px solid #eee')}
      />
    </div>
  );
};

export default DefaultInput;