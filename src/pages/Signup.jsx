import { Input, Button, Select } from "antd";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useState } from "react";

const Signup = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    role: "student",
    department: "",
  });

  const [status, setStatus] = useState({
    inputs: {
      name: "",
      email: "",
      password: "",
      cpassword: "",
      role: "",
      department: "",
    },
  });

  const departments = [
    { name: "Department 1", value: "dept1" },
    { name: "Department 2", value: "dept2" },
  ];

  const roles = [
    { name: "Student", value: "student" },
    { name: "Teacher", value: "teacher" },
  ];

  const handleChange = (e) => {
    setStatus({ ...status, inputs: {} });
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend validation here
    console.log("Submitted:", input);
  };

  return (
    <>
      <div
        className="mt-5 d-flex flex-column justify-content-center align-items-center inherit-br-right mx-auto border rounded p-3"
        style={{ width: "60%" }}
      >
        <h3 className="fw-bold">Create Account</h3>
        <div className="mt-2" style={{ width: "80%" }}>
          <form
            className="d-flex justify-content-center align-items-center flex-column"
            onSubmit={handleSubmit}
          >
            <label htmlFor="name" className="w-100">
              Name
            </label>
            <Input
              style={{ height: "2.5rem" }}
              className="half-black"
              placeholder="Name"
              name="name"
              id="name"
              value={input.name}
              onChange={handleChange}
              status={status.inputs.name}
              required
            />
            <label htmlFor="email" className="w-100 mt-2 d-block">
              Email
            </label>
            <Input
              style={{ height: "2.5rem" }}
              className="half-black"
              placeholder="Email"
              name="email"
              id="email"
              value={input.email}
              onChange={handleChange}
              status={status.inputs.email}
              required
            />
            <label htmlFor="role" className="w-100 mt-2 d-block">
              Role
            </label>
            <Select
              id="role"
              name="role"
              value={input.role}
              className="w-100"
              onChange={(value) => setInput({ ...input, role: value })}
            >
              {roles.map((opt, index) => (
                <Select.Option key={index} value={opt.value}>
                  {opt.name}
                </Select.Option>
              ))}
            </Select>
            <label htmlFor="department" className="w-100 mt-2 d-block">
              Department
            </label>
            <Select
              id="department"
              name="department"
              value={input.department}
              className="w-100"
              onChange={(value) => setInput({ ...input, department: value })}
            >
              {departments.map((opt, index) => (
                <Select.Option key={index} value={opt.value}>
                  {opt.name}
                </Select.Option>
              ))}
            </Select>
            <label htmlFor="password" className="w-100 mt-2">
              Password
            </label>
            <Input.Password
              style={{ height: "2.5rem" }}
              className="half-black"
              placeholder="Password"
              name="password"
              id="password"
              value={input.password}
              onChange={handleChange}
              status={status.inputs.password}
              required
              minLength="8"
            />
            <label htmlFor="cpassword" className="w-100 mt-2">
              Confirm Password
            </label>
            <Input.Password
              style={{ height: "2.5rem" }}
              className="half-black"
              placeholder="Confirm Password"
              name="cpassword"
              id="cpassword"
              value={input.cpassword}
              onChange={handleChange}
              status={status.inputs.cpassword}
              required
              minLength="8"
            />
            <Button
              className="rounded-button mt-3 text-white"
              style={{
                width: "45%",
                height: "2.5rem",
                background: "darkslategray",
              }}
              htmlType="submit"
            >
              Sign Up
            </Button>
          </form>
        </div>
        <small className="mt-2">
          Already have an{" "}
          <a className="text-blue text-decoration-none" href="/login">
          account?
          </a>{" "}
        </small>
        
      </div>
      <Footer mt="6rem" />
    </>
  );
};

export default Signup;
