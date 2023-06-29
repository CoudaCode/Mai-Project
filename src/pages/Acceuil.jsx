import Navbar from "./../Components/header/Navbar";
import Footer from "./../Components/footer/Footer";
import {Link} from "react-router-dom"


function Acceuil() {
  return (
    <>
      <div className="Acceuil">
        <Navbar />
        <header>
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div
                className="carousel-item active"
                style={{
                  backgroundImage: `url('https://images.pexels.com/photos/4099808/pexels-photo-4099808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
                }}
              >
                <div className="carousel-caption">
                  <h2>
                    Ayez une avance sur la disponibilité de nos cars afin de
                    mieux faire vos reservation pour vos tickets de voyage
                  </h2>
                  <p>
                    Découvrez le monde avec facilité et réservez vos billets en
                    toute simplicité!
                  </p>
                </div>
              </div>
              <div
                className="carousel-item"
                style={{
                  backgroundImage: `url('https://images.pexels.com/photos/2533090/pexels-photo-2533090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
                }}
              >
                <div className="carousel-caption">
                  <h2>Voyager en groupe</h2>
                  <p>
                    Explorez le monde et réservez votre prochaine aventure !
                  </p>
                </div>
              </div>
              <div
                className="carousel-item"
                style={{
                  backgroundImage: `url('https://images.pexels.com/photos/2046787/pexels-photo-2046787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
                }}
              >
                <div className="carousel-caption">
                  <h2>
                    Réservez vos billets pour des destinations extraordinaires !
                  </h2>
                  <p>
                    Découvrez le monde et réservez votre aventure inoubliable
                    aujourd'hui !
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </header>

        <div className="container my-5">
          <h2 className="text-center"></h2>
          <div className="card shadow-2-strong text-center my-5">
            <div className="card-body">
              <p className="card-text">
                Bienvenue sur notre site de réservation de billets, votre
                portail vers des voyages passionnants et des aventures sans fin.{" "}
                <br />
                Les services de voyages en groupe d'AMT-TRANSPORT vous
                facilitent la tâche. AMT-TRANSPORT s’occupe des formalités de
                vos voyages en groupe et individuel
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="card">
                <img
                  src={
                    "https://avatars.mds.yandex.net/i?id=efb0151e97285db08285f72b0db9d1d8b40e2a07-5244939-images-thumbs&n=13"
                  }
                  className="card-img-top"
                  alt="Sunset Over the Sea"
                />
                <div className="card-body">
                  <p className="card-text">
                    nous vous voudrons à embarquer pour des expériences
                    inoubliables et à créer des souvenirs qui dureront toute une
                    vie.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <img
                  src={
                    "https://avatars.mds.yandex.net/i?id=33a0ba014b81cbdb859c820d1f600da262f9f5da-5219488-images-thumbs&n=13"
                  }
                  className="card-img-top"
                  alt="Sunset Over the Sea"
                />
                <div className="card-body">
                  <p className="card-text">
                    Découvrez le monde et réservez vos aventures inoubliables
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <img
                  src={
                    "https://avatars.mds.yandex.net/i?id=d7b54e8145d834b9fe73e86b61c3e57da8dbf965-7594176-images-thumbs&n=13"
                  }
                  className="card-img-top"
                  alt="Sunset Over the Sea"
                />
                <div className="card-body">
                  <p className="card-text">
                    Explorez le monde et réservez votre prochaine aventure !
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container my-5 mx-5">
          <h2 className="text-center my-5">
            Planifiez votre voyage en toute confiance
          </h2>

          <div className="row">
            <div className="col-sm-6">
              <div className="card">
                <div
                  className="bg-image hover-overlay ripple"
                  data-mdb-ripple-color="light"
                >
                  <a href="#!">
                    <div className="mask"></div>
                  </a>
                </div>
                <div className="card-body">
                  <div className="card-text text-center">
                    <h1>CONFORTABLE</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div
                  className="bg-image hover-overlay ripple"
                  data-mdb-ripple-color="light"
                >
                  <a href="#!">
                    <div className="mask"></div>
                  </a>
                </div>
                <div className="card-body">
                  <div className="card-text text-center">
                    <h1>SECRUITE GARANTIE</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container my-5 mx-5">
          <button className="btn btn-dark">
            <Link to={"/Statut"}>Cliquez ici pour faire un reservation</Link>
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Acceuil;
