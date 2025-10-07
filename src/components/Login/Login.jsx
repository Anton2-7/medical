import LoginForm from '../LoginForm/LoginForm';
import './style.css';
import { useEffect } from 'react';

function Login({ isOpen, onClose, onLogin }) {

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
        <div className={`login-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>

            <div className="login-window" onClick={(e) => e.stopPropagation()}></div>
            <LoginForm onLogin={onLogin} isOpen={isOpen} onClose={onClose} />
        </div >
    )
}

export default Login;