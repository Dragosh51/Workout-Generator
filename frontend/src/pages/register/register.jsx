import './register.css';
import { useState } from "react";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

import { register } from "../../store/actions/authActions";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    // dispatch(register(name, email, pass));
    const registrationResult = await dispatch(register(name, email, pass));
    console.log("REGISTER", registrationResult);

    if (registrationResult && registrationResult.success) {
      // Redirecționează către pagina de autentificare doar dacă înregistrarea s-a realizat cu succes
      navigate("/Login");
    } else {
      console.error(
        "Eroare la înregistrare:",
        registrationResult
          ? registrationResult.error
          : "Răspunsul înregistrării lipsește."
      );
      // Tratează erorile de înregistrare în alt mod, dacă este necesar
    }
  };

  return (
    <div className="auth-form-container Register">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="full name"
          id="name"
          name="name"
        />
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
          placeholder="********"
          id="password"
          name="password"
        />
        <button type="submit">Register</button>
      </form>
      {/* <button className="link-btn" onClick={() => navigate("/Login")}>
        Already have an account? Login here.
      </button> */}
    </div>
  );
};

export default Register;