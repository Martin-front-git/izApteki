import React from "react";
import Modal from "react-modal";
import { useState ,useRef, useEffect} from "react";
import style from "@/app/Styles/Header/Register.module.scss";

const Registration = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  let modalIsOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  const modalRef = useRef<HTMLDivElement | null>(null);
  
  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsModalOpen(false);
    }
  };
  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);
  return (
    <>
      <button className={style.registerButton} onClick={modalIsOpen}>
        <p className={style.registerText}>Регистрация</p>
      </button>
      <Modal isOpen={isModalOpen} overlayClassName={style.overlay}>
        {isModalOpen && (
          <div ref={modalRef}>
            <form>
            <input type="text" value="Name" />
            <input type="email" value="Email" />
            <button>Go</button>
          </form>
          </div>
        )}
      </Modal>
    </>
  );
};

export default Registration;
