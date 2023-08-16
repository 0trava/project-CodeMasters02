import { FeedbackForm } from "components/FeedbackForm/FeedbackForm";
import { Modal } from "components/Modal/Modal";


export const FeedbackModal = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
          <FeedbackForm onClose={onClose} />
    </Modal>
  );
};
