import { Link } from "react-router-dom";
import Header from "../../Header/Header";
import { useContext } from "react";
import { AuthContext } from "../../Shared/AuthProvider/AuthProvider";

const LogIn = () => {
  const { authData } = useContext(AuthContext);

  const handleOnSubmitLogIn = (e) => {
    e.preventDefault();
    console.log(authData);
    console.log("Submit Form", e.target.email.value);
    console.log("Submit Form", e.target.password.value);
  };

  return (
    <div>
      <Header></Header>
      <h1 className="text-center text-3xl font-bold mb-5">Login</h1>
      <div className="container mx-auto">
        <div
          className="w-2/5
         mx-auto mt-10"
        >
          <form onSubmit={handleOnSubmitLogIn}>
            <div className="mb-5">
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="text"
                  name="email"
                  className="grow"
                  placeholder="Email"
                />
              </label>
            </div>

            <div className="mb-5">
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  className="grow"
                  placeholder="Password"
                  name="password"
                />
              </label>
            </div>
            <button className="btn btn-primary w-full text-white font-semibold text-xl">
              Log In
            </button>
          </form>
          <div className="divider my-5">No Account ?</div>
          <p className="text-center">
            Go to{" "}
            <Link className="underline" to={"/signin"}>
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
