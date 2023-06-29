import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./../Register.css";
import "react-toastify/dist/ReactToastify.css";
function Register() {
  const navigate = useNavigate();

  // State pour recevoir la valeur de notre inputs
  const [inputValue, setInputValue] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    telephone: "",
  });
  const { name, lastname, email, password, telephone } = inputValue;

  // Event Pour remplire les inputs
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    // Fonction de mise ajour des valeur a chaque saisir
    setInputValue({ ...inputValue, [name]: value });
  };

  // Cretation des sesssion de message
  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  // Creation du bouton submit
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/user",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );

      const { success, message } = data;

      if(success){
        handleSuccess(message);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      name: "",
      lastname: "",
      email: "",
      password: "",
      telephone: "",
    });
  };
  return (
    <>
      <div
        className="form_container"
        style={{ width: "18rem", margin: "10% auto" }}
      >
        <h2>S'enregister</h2>
        <form className="form" onSubmit={handleOnSubmit}>
          <div>
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input
              className="form-control"
              type="text"
              name="name"
              value={name}
              placeholder="Entrer Votre Nom"
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label className="form-label" htmlFor="lastname">
              Lastname
            </label>
            <input
              className="form-control"
              type="text"
              name="lastname"
              value={lastname}
              placeholder="Entrer Votre Prenom"
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              className="form-control"
              type="email"
              name="email"
              value={email}
              placeholder="Entrer Votre Email"
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              className="form-control"
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label className="form-label" htmlFor="telephone">
              Telephone
            </label>
            <input
              className="form-control"
              type="number"
              name="telephone"
              value={telephone}
              placeholder="ENtrer Votre Numero de telephone"
              onChange={handleOnChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <span>
            Vous Avez deja un compte? <Link to={"/login"}>Se Connecter</Link>
          </span>
        </form>
        <ToastContainer />
      </div>
    </>
  );
}

export default Register;
