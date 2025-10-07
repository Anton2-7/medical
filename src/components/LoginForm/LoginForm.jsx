import { useState } from 'react';
import './style.css';
import '../../pages/media/Home.css';

function LoginForm({ isOpen, onLogin, setModalOpen, onClose }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onLogin(email, password)) {
            onClose();
            console.log("Успешный вход");
        } else {
            alert("Неверные данные");
        }
    };

    if (!isOpen) return null;

    return (

        <form onSubmit={handleSubmit} className="form-login" onClick={(e) => e.stopPropagation()}>
            <h2 className="login-form__title">Авторизация</h2>
            <p className="form-descr">Введите ваш e-mail</p>
            <input
                className="form-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <p className="form-descr">Введите ваш пароль</p>
            <input
                className="form-input"
                type="password"
                minLength="8"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button className="form-btn" type="submit">Войти</button>
        </form>
    );
}

export default LoginForm;