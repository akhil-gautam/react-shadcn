const set = ({authData}) => {
  localStorage.setItem('auth', JSON.stringify(authData));
}

const get = () => {
  const auth = localStorage.getItem('auth');
  return auth ? JSON.parse(auth) : null;
}

const remove = () => {
  localStorage.removeItem('auth');
}

const Auth = {
  set,
  get,
  remove
}

export default Auth;
