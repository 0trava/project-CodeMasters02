import { useEffect } from 'react';
import css from './Modal.module.css';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, children }) => {
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
    <div className={css.overlay} onClick={handleOverlayClick}>
      <div className={css.modal_container}>{children}</div>
    </div>,
    modalRoot
  );
};

// !!!В місцях встановлення модалки в компоненті створюємо локальний useState і передаємо потрібний вміст children:

// const [showModal, setShowModal] = useState(false);
//   const toggleModal = () => setShowModal(prevShowModal => !prevShowModal);
//   return (
//     <>
//       {showModal && (
//         <Modal onClose={toggleModal}>
//           <ChildrenComponents />
//         </Modal>
//       )}
//     </>