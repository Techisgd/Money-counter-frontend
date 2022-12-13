import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Money-Count-Logo.png";
import SignupForm from "../components/landing-page/SignupForm";
import { signIn } from "../reducks/users/operations";
import { getUser } from "../reducks/users/selectors";

export default function SignIn() {
  const dispatch = useDispatch();
  let history = useHistory();
  const selector = useSelector((state) => state);
  const errors = getUser(selector).errors;

  const initialValues = {
    email: "",
    password: "",
  };

  const [values, setValues] = useState(initialValues);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const onSubmit = async () => {
    setIsLoading(true);
    await dispatch(signIn(values, () => history.push("/")));
    setIsLoading(false);
    // history.push("/");
  };

  return (
    <>
      <div className="sign-in">
        <div className="blue-bg">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
          </div>
        </div>
        <div className="gray-bg">
          <div className="form">
            <form className="form-container">
              {errors.error ? (
                <span className="error-text">{errors.error}</span>
              ) : null}
              <div className="title">Welcome Back!</div>
              <div className="description">Please login using your account</div>
              <label htmlFor="email">USERNAME</label>
              <input
                placeholder="Type your email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleInputChange}
              />
              {errors.email ? (
                <span className="error-text">{errors.email[0]}</span>
              ) : null}
              <label htmlFor="password">PASSWORD</label>
              <input
                placeholder="Type your password"
                name="password"
                type="password"
                value={values.password}
                onChange={handleInputChange}
              />
              {errors.password ? (
                <span className="error-text">{errors.password[0]}</span>
              ) : null}
              <button type="button" onClick={onSubmit}>{`${
                isLoading ? "Logging In" : "Login"
              }`}</button>
              <button type="button">
                <Link to="/sign-up">Sign Up</Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
