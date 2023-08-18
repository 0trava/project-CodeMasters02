import { useEffect } from 'react';
import './UniqueModalSideBar.css';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export const UniqueModalSideBar = ({ onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  return createPortal(
    <div className="overlay" onClick={handleOverlayClick}>
      <div className="sideBar">{children}</div>
    </div>,
    modalRoot
  );
};
