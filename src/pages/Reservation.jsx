import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Reservation() {
  const navigate = useNavigate();
  const [ville, setVille] = useState([]);

  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    villeDepart: "",
    villeArrive: "",
    datVoyage: "",
    heureVoyage: "",
  });
  const {
    nom,
    prenom,
    email,
    telephone,
    villeArrive,
    datVoyage,
    heureVoyage,
    villeDepart,
  } = form;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const nowValue = new Date().getDate();
  console.log(nowValue);
  function fetchData() {
    fetch("http://localhost:3000/Reservation/ville")
      .then((resp) => resp.json())
      .then((response) => {
        console.log(response);
        setVille(response[0]);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/Reservation/",
        {
          ...form,
        },
        { withCredentials: true }
      );
      const { success, message } = data;

      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setForm({
      ...form,
      nom: "",
      prenom: "",
      email: "",
      telephone: "",
      villeDepart: "",
      villeArrive: "",
      datVoyage: "",
      heureVoyage: "",
    });
  }
  return (
    <>
      <div
        className="reservation"
        style={{ width: "400px", margin: "10% auto" }}
      >
        <form onSubmit={handleSubmit}>
          <div className="row mb-4">
            <div className="col">
              <label className="form-label" htmlFor="nom">
                Nom
              </label>
              <div className="form-outline">
                <input
                  type="text"
                  id={nom}
                  name="nom"
                  value={nom}
                  className="form-control"
                  onChange={handleOnChange}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-outline">
                <label className="form-label" htmlFor="prenom">
                  Prenom
                </label>
                <input
                  type="text"
                  id={prenom}
                  name="prenom"
                  value={prenom}
                  className="form-control"
                  onChange={handleOnChange}
                />
              </div>
            </div>
          </div>

          {/* <!-- Email input --> */}
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              className="form-control"
              onChange={handleOnChange}
            />
          </div>

          {/* <!-- Number input --> */}
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="telephone">
              Numero de telephone
            </label>
            <input
              type="number"
              id="telephone"
              name="telephone"
              value={telephone}
              className="form-control"
              onChange={handleOnChange}
            />
          </div>

          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="villeDepart">
              Ville Depart
            </label>
            <select
              name="villeDepart"
              onChange={handleOnChange}
              value={villeDepart}
              className="form-select"
            >
              {/* <option value="Abidjan">Abidjan</option>
              <option value="BOuake">Bouake</option>
              <option value="Odienne">Odienne</option> */}
              {ville.map((cityArray) => {
                return (
                  <option key={cityArray} value={cityArray}>
                    {cityArray}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="villeArrive">
              Ville Arrivé
            </label>
            <select
              name="villeArrive"
              onChange={handleOnChange}
              value={villeArrive}
              className="form-select"
            >
              {ville.map((cityArray) => {
                return (
                  <option key={cityArray} value={cityArray}>
                    {cityArray}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="row mb-4">
            <div className="col">
              <label className="form-label" htmlFor="datVoyage">
                Date de Voyage
              </label>
              <div className="form-outline">
                <input
                  type="date"
                  id="datVoyage"
                  max="2023-10-12"
                  min="2023-06-21"
                  name="datVoyage"
                  value={datVoyage}
                  className="form-control"
                  onChange={handleOnChange}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-outline">
                <label className="form-label" htmlFor="heureVoyage">
                  Heure de Voyage
                </label>
                <input
                  type="time"
                  min="01:00"
                  max="02:00"
                  id="heureVoyage"
                  name="heureVoyage"
                  value={heureVoyage}
                  className="form-control"
                  onChange={handleOnChange}
                />
              </div>
            </div>
          </div>
          {/* <!-- Submit button --> */}
          <button type="submit" className="btn btn-primary btn-block mb-4">
            Enregister
          </button>
          <ToastContainer />
        </form>
      </div>
    </>
  );
}

export default Reservation;
