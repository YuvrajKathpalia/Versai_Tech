const InputGroup = ({ 
  label, 
  type = 'text', 
  name, 
  value, 
  onChange, 
  placeholder = '', 
  required = false,
  error = '' 
}) => {
  return (
    <div className="input-group">
      <label htmlFor={name} className="input-label">
        {label} {required && <span className="text-error-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="input-field"
      />
      {error && <p className="mt-1 text-sm text-error-600">{error}</p>}
    </div>
  );
};

export default InputGroup;
