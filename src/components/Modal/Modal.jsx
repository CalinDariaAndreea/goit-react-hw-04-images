import { useEffect } from 'react';
import '../styles.css';

export const Modal = ({ imageUrl, onClose }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.keyCode === 27) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleCloseModal = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div class="overlay" onClick={handleCloseModal}>
      <div class="modal">
        <img src={imageUrl} alt="" />
      </div>
    </div>
  );
};