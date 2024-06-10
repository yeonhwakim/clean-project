import { NavLink, Outlet } from "react-router-dom";
import { pathKeys } from "../../shared/lib/react-router";

export function GenericLayout() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}

export function NakedLayout() {
  return <Outlet />;
}

function Navigation() {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <NavLink className="navbar-brand" to={pathKeys.home()}>
          CLEAN PROJECT
        </NavLink>

        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <NavLink className="nav-link" to={pathKeys.home()}>
              Home
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container">
        <NavLink className="logo-font" to={pathKeys.home()}>
          conduit
        </NavLink>
        <span className="attribution">
          An interactive learning project from{" "}
          <a href="https://thinkster.io" target="_blank" rel="noreferrer">
            Thinkster
          </a>
          . Code &amp; design licensed under MIT.
        </span>
      </div>
    </footer>
  );
}
