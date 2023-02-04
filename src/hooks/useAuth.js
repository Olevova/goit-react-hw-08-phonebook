import { selectUser, selectisLoggedIn, selectisRefreshing } from '../redux/selectors'
import { useSelector } from 'react-redux';

export const useAuth = () => {
    return {
        isLoggedIn: useSelector(selectisLoggedIn),
        isRefreshing: useSelector(selectisRefreshing),
        isUser: useSelector(selectUser)
    };
};