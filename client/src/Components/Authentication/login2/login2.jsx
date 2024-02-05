import { useAuth0 } from '@auth0/auth0-react';

const SignUpForm = () => {
  const { loginWithRedirect, loginWithPopup } = useAuth0();

  const handleSignUp = () => {
    loginWithRedirect({
      screen_hint: 'signup',
    });
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <button onClick={loginWithPopup}>Sign Up with Auth0</button>
    </div>
  );
};

export default SignUpForm;
