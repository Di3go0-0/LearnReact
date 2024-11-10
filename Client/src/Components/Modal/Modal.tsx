import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useModalContext } from "./context/ModalContext";
import "./Modal.css";

interface Props {
  children: ReactNode;
}

const eventListener = "keydown";

export const Modal = ({ children }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { state, setState } = useModalContext();

  const closeModal = () => {
    setState(false);
  };

  const modalRoot = document.getElementById("modal");

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setState(false);
      }
    };
    if (state) {
      document.addEventListener(eventListener, handleEscape);
    }

    return () => {
      document.removeEventListener(eventListener, handleEscape);
    };
  }, [setState, state]);

  if (!state || !modalRoot) {
    return null;
  }
  return createPortal(
    <div className="overlay" onClick={closeModal}>
      <div className="modal" onClick={handleContentClick} ref={modalRef}>
        {children}
        <button className="close-button" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>,
    modalRoot,
  );
};
