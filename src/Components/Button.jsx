function Button({ children, onClick, className }) {
  return (
    <button 
      onClick={onClick}
      className={`bg-blue-100 px-3 py-1 rounded  ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;