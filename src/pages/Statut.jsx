import Navbar from "./../Components/header/Navbar";
import Footer from "./../Components/footer/Footer";

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
        </div>

        <div className="container my-5 mx-5">
       
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="card">
                  <div className="card header">
                      <h4 className="fw-bold text-center">ABIDJAN</h4>
                  </div>
                <img
                  src={
                    "https://avatars.mds.yandex.net/i?id=efb0151e97285db08285f72b0db9d1d8b40e2a07-5244939-images-thumbs&n=13"
                  }
                  className="card-img-top"
                  alt="Sunset Over the Sea"
                />
                
                <div className="card-body">
                  <p className="card-text">
                     Disponible Pour Voyager : 30 
                  </p>
                </div>
                <div className="card-footer">
                  <button className="btn btn-dark">
                    Rerserver mon ticket
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="card">
                  <div className="card header">
                      <h4 className="fw-bold text-center">Odienné</h4>
                  </div>
                <img
                  src={
                    "https://gti-transport-odienne3.e-monsite.com/medias/images/telechargement-2--1.jpg"
                  }
                  className="card-img-top"
                  alt="Sunset Over the Sea"
                />
                
                <div className="card-body">
                  <p className="card-text">
                     Disponible Pour Voyager : 30 
                  </p>
                </div>
                <div className="card-footer">
                  <button className="btn btn-dark">
                    Rerserver mon ticket
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="card">
                  <div className="card header">
                      <h4 className="fw-bold text-center">Yakro</h4>
                  </div>
                <img
                  src={
                    "https://lesaventuresdekonanhome.files.wordpress.com/2018/12/basilique_large1485630045.jpg?w=1000"
                  }
                  className="card-img-top"
                  alt="Sunset Over the Sea"
                />
                
                <div className="card-body">
                  <p className="card-text">
                     Disponible Pour Voyager : 30 
                  </p>
                </div>
                <div className="card-footer">
                  <button className="btn btn-dark">
                    Rerserver mon ticket
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="card">
                  <div className="card header">
                      <h4 className="fw-bold text-center">Bouaké</h4>
                  </div>
                <img
                  src={
                    "data:image/jpeg;base64,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"
                  }
                  className="card-img-top"
                  alt="Sunset Over the Sea"
                />
                
                <div className="card-body">
                  <p className="card-text">
                     Disponible Pour Voyager : 30 
                  </p>
                </div>
                <div className="card-footer">
                  <button className="btn btn-dark">
                    Rerserver mon ticket
                  </button>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Acceuil;
