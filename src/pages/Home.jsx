import './Home.css';
import Heart from '../assets/images/heartbeat.svg';
import Stethoscope from '../assets/images/stat.svg';
import Medcard from '../assets/images/medcard.svg';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/authHook';


function Home() {
    const { user } = useAuth();

    const handleClick = () => {
        window.location.href = '/contacts';
    }

    const { isAuthenticated, openLoginModal, logout } = useAuth();

    return (
        <div className="content-container"><section>
            {isAuthenticated ? <h2 className='username'>Привет, {user.name}</h2> : (<h2 className="section-title">Место для получения медицинской помощи</h2>)}
        </section>
            <div className="btn-wrapper">{isAuthenticated ? (<button onClick={logout} className="btn-login">Выйти из аккаунта</button>) : <button onClick={openLoginModal} className="btn-login">Войти</button>}

                {isAuthenticated ? (<button className='btn-contacts' onClick={handleClick}>Перейти в контакты</button>) : (<button onClick={handleClick} className='btn-contacts'>Контакты</button>)}</div>

            {isAuthenticated ? (<div className="cards-items">
                <Link to="./contacts" className="card-item">
                    <img src={Heart} alt="Онлайн-прием" />
                    <p className="card-title">Онлайн-прием</p>
                    <div className="row"></div>
                    <div className="card-descr">Рыба текст</div>
                </Link>


                <Link to="./contacts" className="card-item">
                    <img src={Stethoscope} alt="Экстренный случай" />
                    <p className="card-title">Экстренный случай</p>
                    <div className="row"></div>
                    <div className="card-descr">Рыба текст</div>
                </Link>

                <Link to="./contacts" className="card-item">
                    <img src={Medcard} alt="Экстренный случай" />
                    <p className="card-title">Лечение рака</p>
                    <div className="row"></div>
                    <div className="card-descr">Рыба текст</div>
                </Link>

            </div>) : (<div className='center logout-attention'>Пожалуйста, войдите в систему, чтобы получить доступ к панели управления.</div>)}

        </div >
    )
}

export default Home;    