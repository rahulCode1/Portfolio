const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top shadow-sm">
      <div className="container">
        {/* BRAND */}
        <span
          className="navbar-brand fw-bold cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          Rahul
        </span>

        {/* TOGGLER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* NAV LINKS */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-3">
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => scrollToSection("home")}
              >
                Home
              </button>
            </li>

            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </button>
            </li>

            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => scrollToSection("skills")}
              >
                Skills
              </button>
            </li>

            <li className="nav-item">
              <button
                className="btn "
                onClick={() => scrollToSection("connect")}
              >
                Connect
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
