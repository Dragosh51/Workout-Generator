import './modal.css';
import React, { useRef, useEffect, useState, } from "react";
import { useSelector } from 'react-redux';
import Login from "../../pages/Log-in/login";
import Register from "../../pages/register/register";

const Modal = ({ handleClose, show }) => {
    const [showLogin, setShowLogin] = useState(true);
    const modalRef = useRef(null);
    const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated);

    useEffect(() => {
      if (isAuthenticated === true) {
        handleClose()
      }
    }, [isAuthenticated]);
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
          handleClose();
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [handleClose]);
  
    const handleToggleForm = () => {
      setShowLogin(!showLogin);
    };
  
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <div className="modal-content" ref={modalRef}>
          <button className="close-btn" onClick={handleClose}>Close</button>
          <div className="modal-inner">
            {showLogin ? <Login /> : <Register />}
            <button className="toggle-btn" onClick={handleToggleForm}>
              {showLogin ? "Don't have an account? Register here." : "Already have an account? Login here."}
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Modal