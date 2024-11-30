import '../styles.css';

export const Button = ({ onClick, children }) => {
    return (
      <div className="button-container">
        <button onClick={onClick} className="button">
          {children}
        </button>
      </div>
    );
  };
  