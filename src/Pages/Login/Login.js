import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../actions/userAction";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, statusCode } = useSelector((state) => state.user);
  const [userDetails, setUser] = useState({ username: "test", password: "test" });

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setUser((userDetails) => ({
      ...userDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = userDetails;
    if (!username || !password) {
      alert("ALL FIELDS ARE REQUIRED");
    }
    dispatch(userLogin(userDetails)).then((data) => console.log("data", data));
    navigate('/home');
  };

  return (
    <div className="container-fluid">
      <div className="row h-100vh  d-flex justify-content-center align-items-center">
        <div className="col-md-4">
          <div class="card">
            <div class="card-body">
              <form onSubmit={handleSubmit} action="#">
                <label className="form-label" htmlFor="form2Example1">
                  Email address
                </label>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    name="username"
                    id="form2Example1"
                    className="form-control"
                    value={userDetails.username}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form2Example2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="form2Example2"
                    name="password"
                    value={userDetails.password}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4"
                  onClick={handleSubmit}
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
