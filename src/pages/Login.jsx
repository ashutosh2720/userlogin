import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  function loginFormChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({ ...prev, [name]: value }));
  }

  function loginHandler(e) {
    e.preventDefault();
    if (loginFormData.username && loginFormData.password) {
      localStorage.setItem("userDetails", JSON.stringify(loginFormData));
      navigate("/home");
    } else {
      alert("please enter the both fields");
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("userDetails");
    if (token) {
      navigate("/home");
    }
  }, []);

  return (
    <div className="flex justify-center items-center ">
      <div
        className={
          "login-main rounded-md bg-gray-600 max-w-md text-white pt-16 min-h-[80vh] flex justify-center items-center text-sociogram"
        }
      >
        <div className="login-form-card w-[90vw] xs:w-[400px] bg-secondary p-6 rounded-lg">
          <h1 className={"text-center text-3xl pb-4"}>Login</h1>
          <form onSubmit={loginHandler} className={"flex flex-col gap-3"}>
            <label htmlFor="email" className={"flex flex-col"}>
              Username
              <input
                required
                type="text"
                name={"username"}
                id={"username"}
                placeholder={"@johndoe"}
                onChange={loginFormChange}
                value={loginFormData.username}
                className={
                  "rounded-lg py-2 px-3 text-black bg-sociogram dark:bg-white"
                }
              />
            </label>
            <label htmlFor="password" className={"flex flex-col"}>
              Password
              <input
                required
                type="password"
                name={"password"}
                id={"password"}
                placeholder={"*******"}
                onChange={loginFormChange}
                value={loginFormData.password}
                className={
                  "rounded-lg py-2 px-3 text-black bg-sociogram dark:bg-white"
                }
              />
            </label>

            <button
              type={"submit"}
              className={"bg-button p-3 rounded-lg text-white bg-blue-400"}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
