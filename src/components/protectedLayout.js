import { Route, Redirect } from 'react-router-dom';

export const ProtectedLayout = (props) => {
  const isLogin = localStorage.getItem('isLogin');
  debugger
  return isLogin ? <Route {...props} /> : <Redirect to='/login'/>
}

export default ProtectedLayout;