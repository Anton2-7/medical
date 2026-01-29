import { useRef, useState, useEffect } from 'react';
import './style.css';

function LoginForm({ isOpen, login, closeModal }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const formRef = useRef(null);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const success = await login(email, password);

            if (success) {
                closeModal();
            } else {
                setError("Неверный логин или пароль ❌");
            }
        } catch {
            setError("Ошибка сервера ⚠️");
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (formRef.current?.contains(event.target)) return;
            closeModal(false);
        };

        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, [closeModal]);
    if (!isOpen) return null;

    return (
        <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="form-login"
        >
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

            <button className="form-btn" type="submit">
                Войти
            </button>
        </form>
    );
}

export default LoginForm;
