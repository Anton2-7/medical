import './style.css';
import Logo from '../../assets/images/logo.svg';
import Login from '../Login/Login';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/authHook';

function Header({ children }) {
    const {
        isAuthenticated,
        logout,
        isLoginModalOpen,
        openLoginModal,
        closeLoginModal,
        login
    } = useAuth();

    return (
        <>
            <header>
                <nav className="nav container">
                    <Link className="logo" to="/">  <img src={Logo} alt="Логотип" /></Link>
                    <div className="nav-wrapper">
                        <Link className="contacts-link" to="/contacts">Контакты</Link >
                        {isAuthenticated ? (
                            <button onClick={logout} className="nav-btn">
                                Выйти
                            </button>
                        ) : (
                            <button onClick={openLoginModal} className="nav-btn">
                                Войти
                            </button>
                        )}
                    </div>
                </nav>
            </header >

            <Login
                isOpen={isLoginModalOpen}
                onClose={closeLoginModal}
                onLogin={login}
            />

            {children}
        </>
    );
}

export default Header;