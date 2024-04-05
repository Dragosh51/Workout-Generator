import './login.css'
import { useState } from "react";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

import { loginFacebook, login } from "../../store/actions/authActions";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginF = (e) => {
    dispatch(loginFacebook());
    console.log(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, pass));
  };

  return (
    <div className="auth-form-container Login">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@email.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="**"
          id="password"
          name="password"
        />
        <button type="submit">Log In</button>
        <div onClick={loginF} style={{ cursor: "pointer" }}>
          Login with Facebook
        </div>
        {/* <a href="/login/facebook" className="button">Log In With Facebook</a> */}
      </form>
      {/* <button className="link-btn" onClick={() => navigate("/Register")}>
        Don't have an account? Register here.
      </button> */}
    </div>
  );
};

export default Login;