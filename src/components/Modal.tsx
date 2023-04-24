import classes from "../assets/styles/Modal.module.css";

function Modal({ children, onClose }: any) {
  return (
    <>
      <div className={classes.backdrop} onClick={onClose} />
      <dialog open className={classes.modal} onClick={onClose}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
