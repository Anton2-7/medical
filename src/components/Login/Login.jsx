import LoginForm from '../LoginForm/LoginForm';
import './style.css';
import { useEffect } from 'react';

function Login({ isOpen, closeModal, login }) {

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className={`login-overlay ${isOpen ? 'open' : ''}`} onClick={closeModal}>

            <div className="login-window" onClick={(e) => e.stopPropagation()}></div>
            <LoginForm login={login} isOpen={isOpen} closaModal={closeModal} />
        </div >
    )
}

export default Login;