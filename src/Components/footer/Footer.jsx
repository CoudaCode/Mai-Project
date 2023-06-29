import "./../footer/Footer.css";
function Footer() {
  return (
    <>
      <div className="Footer">
        {/* <!-- Footer --> */}
        <div className="d-flex flex-column h-100">
          <footer className="w-100 py-4 flex-shrink-0">
            <div className="container py-4">
              <div className="row gy-4 gx-5">
                <div className="col-lg-4 col-md-6">
                  <h5 className="h5 text-white">AMT_TRANSPORT</h5>
                  <p className="small text-muted">
                    Les couleurs vives et les formes dynamiques évoquent
                    l'énergie et l'excitation de voyager. L'icône centrale
                    symbolise un globe terrestre, représentant notre engagement
                    à vous faire explorer les merveilles du monde. Avec notre
                    logo, nous vous invitons à embarquer pour des expériences
                    inoubliables et à créer des souvenirs qui dureront toute une
                    vie.
                  </p>
                  <p className="small text-muted mb-0">
                    &copy;2023 Copyrights. AMT
                  </p>
                </div>
                <div className="col-lg-4 col-md-6">
                  <h5 className="text-white mb-3">Liens</h5>
                  <ul className="list-unstyled text-muted">
                    <li>
                      <a href="#">Acceuil</a>
                    </li>
                    <li>
                      <a href="#">Apropos</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">Reservation</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4 col-md-6">
                  <h5 className="text-white mb-3">Nos Contcatcs</h5>
                  <ul className="list-unstyled text-muted">
                    <li>
                      <i className="fas fa-print me-3"></i>
                      <a href="#">+225 01 01 01 01 01</a>
                    </li>
                    <li>
                      <i className="fas fa-phone me-3"></i>
                      <a href="#">+225 01 01 01 01 01</a>
                    </li>
                    <li>
                      <i className="fas fa-home me-3"></i>
                      <a href="#">Abdijan , Adjame Renauld</a>
                    </li>
                    <li>
                      <i className="fas fa-envelope me-3"></i>
                      <a href="#">amt_transport@gmail.com</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
        {/* <!-- Footer --> */}
      </div>
    </>
  );
}
export default Footer;
