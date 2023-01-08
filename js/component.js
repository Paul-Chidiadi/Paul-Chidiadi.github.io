function App() {
  return (
    <div className="contact">
      <h1 className="page--name">CONTACT ME</h1>
      <section className="divider">
        <div className="col">
          <i className="bx bx-current-location big"></i>
          <div>
            <h4>Address</h4>
            <p> Abuja Federal Capital Territory, Nigeria</p>
          </div>
        </div>
        <div className="col">
          <i className="bx bxs-share-alt big"></i>
          <div>
            <h4>Social Media</h4>
            <ul className="socials">
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Paul-chidiadi"
                >
                  <i class="bx bxl-github"></i>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/paulchidiadi"
                >
                  <i className="bx bxl-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/paul.chidiadi"
                >
                  <i className="bx bxl-facebook-circle"></i>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/paul-chidiadi-5a2631231"
                >
                  <i className="bx bxl-linkedin-square"></i>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/paulchidiadi"
                >
                  <i className="bx bxl-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="mailto:paulchidiadi@gmail.com"
                >
                  <i className="bx bx-envelope big"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col">
          <i className="bx bx-envelope big"></i>
          <div>
            <h4>Email</h4>
            <p>paulchidiadi@gmail.com</p>
          </div>
        </div>
        <div className="col">
          <i className="bx bxs-phone big"></i>
          <div>
            <h4>Phone</h4>
            <p> +234 909 191 0918 || +234 906 434 3120</p>
          </div>
        </div>
      </section>
    </div>
  );
}
ReactDOM.render(<App />, document.querySelector("#contact"));
