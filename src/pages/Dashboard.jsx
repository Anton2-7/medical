import { useAuth } from "../hooks/authHook";
import './Dashboard.css';
import './media/Home.css'

function Dashboard() {
    const { user, loading } = useAuth();

    if (loading) {
        return <div>Загрузка...</div>;
    }
    if (!user) {
        return <div>Пожалуйста, войдите в систему, чтобы получить доступ к панели управления.</div>;
    }

    return <h1 className="username">Привет, {user.name} </h1>;
}

export default Dashboard;