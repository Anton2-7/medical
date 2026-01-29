import { useState } from 'react';
import './style.css';

function LoginForm({ isOpen, onLogin, onClose }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const success = await onLogin(email, password);

            if (success) {
                onClose();
            } else {
                setError("Неверный логин или пароль ❌");
            }
        } catch {
            setError("Ошибка сервера ⚠️");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-login" onClick={(e) => e.stopPropagation()}>
            <h2 className="login-form__title">Авторизация</h2>
            {error && <div className="form-error">{error}</div>}

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
