import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header className="header_section">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <a className="navbar-brand" href="index.html">
            <span>Pinocchia</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  ">
              <li className="nav-item ">
              {/* <li className="nav-item active">÷ */}
                <Link className="nav-link" to={"/"}>
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/shop"}>
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/why"}>
                  Why Us
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">
                  Contact Us
                </a>
              </li>
            </ul>
            {/* <div className="user_option">
              <a href="">
                <i className="fa fa-user" aria-hidden="true" />
                <span>Login</span>
              </a>
              <a href="">
                <i className="fa fa-shopping-bag" aria-hidden="true" />
              </a>
              <form className="form-inline ">
                <button className="btn nav_search-btn" type="submit">
                  <i className="fa fa-search" aria-hidden="true" />
                </button>
              </form>
            </div> */}
          </div>
        </nav>
      </header>
    )
}