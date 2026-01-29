import { useState } from 'react';
import './style.css';

function LoginForm({ isOpen, onLogin, setModalOpen, onClose }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        setError("");
        e.preventDefault();
        try {
            const succes = onLogin(email, password);

            if (succes) {
                onClose();
            } else {
                alert("Неверный логин или пароль");
            }
        } catch (error) {
            console.error("Ошибка при входе:", error);
            alert("Произошла ошибка при попытке входа. Пожалуйста, попробуйте еще раз.");

        };
    }
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
            {error && <p className="form-error">{error}</p>}

        </form>
    );
}

export default LoginForm;