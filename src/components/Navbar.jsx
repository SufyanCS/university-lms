import { Button, Input } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";


const Navbar = ({ mt }) => {
  return (
<nav
        className="navbar navbar-expand-md navbar-light d-md-flex justify-content-md-between align-items-md-center mx-auto"
        style={{ width: "95%" }}
      >
        <a className="navbar-brand d-flex align-items-center" href="/#">
          <p className="m-0 ms-2">Al Arab University</p>
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
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse d-md-flex flex-md-row flex-column justify-content-md-between justify-content-center align-items-center mx-auto mx-md-0 p-2 p-md-0"
          id="navbarSupportedContent"
          style={{ maxWidth: "80%" }}
        >
          <ul
            className="navbar-nav mr-auto d-flex justify-content-md-between justify-content-center align-items-center align-items-md-left"
            style={{ width: "40%" }}
          >
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Courses
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                About Us
              </a>
            </li>
          </ul>
          <div style={{ width: "30%" }}>
            <Input.Search
              placeholder="Search"
              style={{ width: "100%" }}
              size="large"
            />
          </div>
          <Link to="/login" style={{ width: "25%" }} className="h-auto">
            <Button
              style={{ width: "100%", minHeight: "2.5rem" }}
              type="primary"
              icon={<UserOutlined />}
              className="mt-2 mt-md-0 text-wrap h-auto"
            >
              Login / Sign Up
            </Button>
          </Link>
        </div>
      </nav>
  )
};

export default Navbar;
