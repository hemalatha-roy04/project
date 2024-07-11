import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="App">
      <h1>{isLogin ? 'Login' : 'Register'}</h1>
      {isLogin ? <LoginForm /> : <RegistrationForm />}
      <button onClick={toggleForm}>
        {isLogin ? 'Go to Registration' : 'Go to Login'}
      </button>
    </div>
  );
}

export default App;
