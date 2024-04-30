import { Input, Button } from "antd";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"

const Login = () => {
  return (
    <>
    <Navbar />
      <div className="mt-5 d-flex flex-column justify-content-center align-items-center mx-auto border rounded shadow p-3" style={{ width: "60%" }}>
        <h3 className="fw-bold">Sign in</h3>
        <div className="mt-1" style={{ width: "80%" }}>
          <form className="d-flex flex-column justify-content-center align-items-center">
            <label htmlFor="email" className="w-100 mt-2 d-block">Email</label>
            <Input style={{ height: "2.5rem" }} className="half-black" placeholder="Email" name="email" id="email" required />
            <label htmlFor="password" className="w-100 mt-2">Password</label>
            <Input.Password style={{ height: "2.5rem" }} className="half-black" placeholder="Password" name="password" id="password" required minLength="8" />
            <Button type="text" className="mt-3">Forgot your password?</Button>
            <Button className="rounded-button mt-2 text-white" style={{ width: "45%", height: "2.5rem", background: "tomato" }}>Sign in</Button>
          </form>
        </div>
        <hr className="w-50 mx-auto" />
        <small className="mt-2">Don't have an <a className="text-blue text-decoration-none" href="/#">Al-Arab university</a> account?</small>
        <Link to="/signup" style={{ width: "35%" }}>
          <Button className="rounded-button mt-3 text-wrap" style={{ width: "100%", minHeight: "2.5rem", height: "auto" }}>Create New Account</Button>
        </Link>
      </div>
      <Footer mt="7rem" />
    </>
  );
};

export default Login;
