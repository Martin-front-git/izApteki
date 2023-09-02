// 'use client';
// import React, { useState, useRef, useEffect } from "react";
// import Modal from "react-modal";
// import styles from "@/app/Styles/Header/Register.module.scss";

// const Registration = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isRegistered, setIsRegistered] = useState(false);
//   const [userName, setUserName] = useState("");
//   const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

//   const modalIsOpen = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   const modalRef = useRef<HTMLDivElement | null>(null);

//   const handleClickOutside = (event: MouseEvent) => {
//     if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
//       setIsModalOpen(false);
//     }
//   };

//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();

//     const form = event.currentTarget as HTMLFormElement;
//     const nameInput = form.elements.namedItem("name") as HTMLInputElement;
//     const enteredName = nameInput.value;

//     setUserName(enteredName);
//     setIsRegistered(true);

//     // Open the success modal
//     setIsSuccessModalOpen(true);
//   };

//   const handleOkButtonClick = () => {
//     // Close the success modal
//     setIsSuccessModalOpen(false);

//     // Close the registration modal
//     setIsModalOpen(false);
//   };

//   useEffect(() => {
//     if (isModalOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isModalOpen]);

//   return (
//     <>
//       <button className={styles.registerButton} onClick={modalIsOpen}>
//         <p className={styles.registerText}>
//           {isRegistered ? userName : "Регистрация"}
//         </p>
//       </button>
//       <Modal isOpen={isModalOpen} overlayClassName={styles.overlay}>
//         {isModalOpen && (
//           <div ref={modalRef}>
//             {isRegistered ? (
//               <div className={styles.successMessage}>
//                 <h1>Регистрация прошла успешно</h1>
//                 <button onClick={handleOkButtonClick}>Ok</button>
//               </div>
//             ) : (
//               <div className={styles.container}>
//                 <div className={styles.formContainer}>
//                   <form
//                     className={styles.form}
//                     action="#"
//                     method="POST"
//                     onSubmit={handleSubmit}
//                   >
//                     {/* имя */}
//                     <div>
//                       <label htmlFor="name" className={styles.label}>
//                         Ваше имя*
//                       </label>
//                       <div className={styles.inputContainer}>
//                         <input
//                           id="name"
//                           name="name"
//                           type="text"
//                           autoComplete="name"
//                           required
//                           className={styles.input}
//                         />
//                       </div>
//                     </div>
//                     {/* Номер телефона */}
//                     <div>
//                       <label htmlFor="telephone" className={styles.label}>
//                       Номер телефона
//                       </label>
//                       <div className={styles.inputContainer}>
//                         <input
//                           id="telephone"
//                           name="telephone"
//                           type="tel"
//                           autoComplete="telephone"
//                           required
//                           className={styles.input}
//                         />
//                       </div>
//                    </div>
//                    {/* Пароль */}
//                    <div>
//                     <div className={styles.passwordLabelContainer}>
//                       <label htmlFor="password" className={styles.label}>
//                       Пароль
//                       </label>
//                     </div>
//                     <div className={styles.inputContainer}>
//                       <input
//                         id="password"
//                         name="password"
//                         type="password"
//                         autoComplete="current-password"
//                         required
//                         className={styles.input}
//                       />
//                     </div>
//                   </div>
//                   {/* Подтвердить пароль */}
//                   <div>
//                     <div className={styles.passwordLabelContainer}>
//                       <label htmlFor="confirmPassword" className={styles.label}>
//                       Подтвердите пароль
//                       </label>
//                     </div>
//                     <div className={styles.inputContainer}>
//                       <input
//                         id="confirmPassword"
//                         name="confirmPassword"
//                         type="password"
//                         autoComplete="confirmPassword"
//                         required
//                         className={styles.input}
//                       />
//                     </div>
//                   </div>
//                     {/* ... (rest of the form) */}
//                     <div>
//                       <button type="submit" className={styles.submitButton}>
//                         Регистрация
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             )}
//           </div>
//         )}
//       </Modal>
//       {/* Success Modal */}
//       <Modal isOpen={isSuccessModalOpen} overlayClassName={styles.overlay}>
//         {isSuccessModalOpen && (
//           <div className={styles.successMessage}>
//             <h1>Регистрация прошла успешно</h1>
//             <button onClick={handleOkButtonClick}>Ok</button>
//           </div>
//         )}
//       </Modal>
//     </>
//   );
// };

// export default Registration;

import React, { useState, useRef, useEffect } from "react";
import Modal from "react-modal";
import styles from "@/app/Styles/Header/Register.module.scss";

const Registration = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [userName, setUserName] = useState("");
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [passwordInputError, setPasswordInputError] = useState(false); // Добавляем состояние для ошибки ввода пароля

  const modalIsOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsModalOpen(false);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const form = event.currentTarget as HTMLFormElement;
    const nameInput = form.elements.namedItem("name") as HTMLInputElement;
    const enteredName = nameInput.value;

    const passwordInput = form.elements.namedItem("password") as HTMLInputElement;
    const confirmPasswordInput = form.elements.namedItem("confirmPassword") as HTMLInputElement;
    const enteredPassword = passwordInput.value;
    const enteredConfirmPassword = confirmPasswordInput.value;

    // Проверка на совпадение паролей
    if (enteredPassword !== enteredConfirmPassword) {
      setPasswordMatchError(true);
      setPasswordInputError(true); // Устанавливаем ошибку ввода пароля
      return;
    }

    // Если пароли совпадают, снимаем ошибки
    setPasswordMatchError(false);
    setPasswordInputError(false);

    setUserName(enteredName);
    setIsRegistered(true);

    // Открываем модальное окно успеха
    setIsSuccessModalOpen(true);
  };

  const handleOkButtonClick = () => {
    // Закрываем модальное окно успеха
    setIsSuccessModalOpen(false);

    // Закрываем модальное окно регистрации
    setIsModalOpen(false);
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
      <button className={styles.registerButton} onClick={modalIsOpen}>
        <p className={styles.registerText}>
          {isRegistered ? userName : "Регистрация"}
        </p>
      </button>
      <Modal isOpen={isModalOpen} overlayClassName={styles.overlay}>
        {isModalOpen && (
          <div ref={modalRef}>
            {isRegistered ? (
              <div className={styles.successMessage}>
                <h1>Регистрация прошла успешно</h1>
                <button onClick={handleOkButtonClick}>Ok</button>
              </div>
            ) : (
              <div className={styles.container}>
                <div className={styles.formContainer}>
                  <form
                    className={styles.form}
                    action="#"
                    method="POST"
                    onSubmit={handleSubmit}
                  >
                    {/* имя */}
                    <div>
                      <label htmlFor="name" className={styles.label}>
                        Ваше имя*
                      </label>
                      <div className={styles.inputContainer}>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          required
                          className={styles.input}
                        />
                      </div>
                    </div>
                    {/* Номер телефона */}
                    <div>
                      <label htmlFor="telephone" className={styles.label}>
                      Номер телефона
                      </label>
                      <div className={styles.inputContainer}>
                        <input
                          id="telephone"
                          name="telephone"
                          type="tel"
                          autoComplete="telephone"
                          required
                          className={styles.input}
                        />
                      </div>
                   </div>
                   {/* Пароль */}
                   <div>
                    <div className={styles.passwordLabelContainer}>
                      <label htmlFor="password" className={styles.label}>
                      Пароль
                      </label>
                    </div>
                    <div className={styles.inputContainer}>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className={passwordInputError ? `${styles.input} ${styles.error}` : styles.input} // Добавляем класс error при ошибке
                      />
                    </div>
                  </div>
                  {/* Подтвердить пароль */}
                  <div>
                    <div className={styles.passwordLabelContainer}>
                      <label htmlFor="confirmPassword" className={styles.label}>
                      Подтвердите пароль
                      </label>
                    </div>
                    <div className={styles.inputContainer}>
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        autoComplete="confirmPassword"
                        required
                        className={passwordInputError ? `${styles.input} ${styles.error}` : styles.input}
                      />
                    </div>
                    {passwordMatchError && (
                      <p className={styles.errorText}>Пароли не совпадают</p>
                    )}
                  </div>
                    <div>
                      <button type="submit" className={styles.submitButton}>
                        Регистрация
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}
      </Modal>
      {/* Модальное окно успеха */}
      <Modal isOpen={isSuccessModalOpen} overlayClassName={styles.overlay}>
        {isSuccessModalOpen && (
          <div className={styles.successMessage}>
            <h1>Регистрация прошла успешно</h1>
            <button onClick={handleOkButtonClick}>Ok</button>
          </div>
        )}
      </Modal>
    </>
  );
};

export default Registration;
