import {useState} from 'react';

export default function useAuth(){
    // State
    const [user, setUser] = useState(() => {
        let savedUser = localStorage.getItem('user') || null;
        return savedUser;
    });

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('user');
    }

    return {
        user,
        setUser,
        handleLogout
    }
}