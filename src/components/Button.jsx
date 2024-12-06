export default function Button({ children, onClick, className = "", type = "button" }) {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`px-3 py-1 rounded-md text-sm transition duration-300 ${className}`}
      >
        {children}
      </button>
    );
  }
  