import LoginForm from '../LoginForm/LoginForm';
import './style.css';
import { useEffect } from 'react';

function Login({ isOpen, closeLoginModal, closeModal, login }) {

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
            <LoginForm closeModal={closeLoginModal}
                login={login} isOpen={isOpen} />
        </div >
    )
}

export default Login;