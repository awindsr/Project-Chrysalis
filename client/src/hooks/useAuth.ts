import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { login, signup } from '../redux/slices/authSlice';

export const useAuth = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state: RootState) => state.auth);

    const handleLogin = (credentials: { email: string; password: string }) => {
        dispatch(login(credentials));
    };

    const handleSignup = (userData: { email: string; password: string; role: 'admin' | 'member' }) => {
        dispatch(signup(userData));
    };

    return { auth, handleLogin, handleSignup };
};
