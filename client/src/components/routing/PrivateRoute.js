import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const PrivateRoute = ({ redirect, element }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;
  return !isAuthenticated && !loading ? <Navigate to='/login' /> : element;
};

export default PrivateRoute;
