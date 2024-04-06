import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Navigate } from "react-router-dom";
function Signup(props) {
  const navigate = useNavigate();
  // getting from index
  const crtpas = props.crtpas;
  const setcrtpas = props.setcrtpas;

  // for input box
  const [userename, setuserename] = useState();
  const [userepas, setuserepas] = useState();

  function handlename(evt) {
    setuserename(evt.target.value);
  }
  function handlepass(evt) {
    setuserepas(evt.target.value);
  }
  // for button

  function addUser() {
    setcrtpas([...crtpas, { ussername: userename, password: userepas }]);
    navigate("/");
  }
  return (
    <div className="bg-black p-16">
      <div className="bg-white p-12 border rounded-md">
        <h1 className="text-3xl font-bold">Hi Buddy ✌️</h1>
        <p>You Can Signup here :-)</p>
        <div className="flex flex-col gap-2 my-2">
          <input
            placeholder="username"
            onChange={handlename}
            className="  border-black bg-transparent border rounded-md w-52 p-1 "
          />
          <input
            placeholder="password"
            onChange={handlepass}
            className=" border-black bg-transparent border rounded-md w-52 p-1 "
          />
          <input
            placeholder="confirm password"
            className="  border-black bg-transparent border rounded-md w-52 p-1 "
          />
          <button onClick={addUser} className="bg-sky-300 rounded-md w-24 p-1">
            Sign Up
          </button>
          <p>
            Already have an account?{" "}
            <Link to="/" className="underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Signup;
