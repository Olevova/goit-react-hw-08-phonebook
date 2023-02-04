import { Route, Routes } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation ';
import { Register } from '../pages/Register';
import { Login } from 'pages/Login';
import { Contact } from '../pages/Contact';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { reFreshUser } from 'servise/fetch';
import { useAuth } from '../hooks/useAuth';
import { RestricteRoute } from './RestrictetRout';
import { PrivateRoute } from './PrivateRoute';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(reFreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    'try.....'
  ) : (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route
          path="register"
          element={
            <RestricteRoute component={Register} redirectTo="/contacts" />
          }
        />
        <Route
          path="login"
          element={<RestricteRoute component={Login} redirectTo="/contacts" />}
        />
        <Route
          path="contacts"
          element={<PrivateRoute component={Contact} redirectTo="/login" />}
        />
      </Route>
    </Routes>
  );
};
