import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
function Login(props) {
  const navigate = useNavigate();
  // getting from index
  const crtpas = props.crtpas;
  const setcrtpas = props.setcrtpas;
  // for input box
  const [userename, setuserename] = useState();
  const [userepas, setuserepas] = useState();
  // its for line no 37

  const [reguser, setreguser] = useState(true);

  function handlename(evt) {
    setuserename(evt.target.value);
  }
  function handlepass(evt) {
    setuserepas(evt.target.value);
  }

  //function for button

  function checkUser() {
    var userfound = false;
    crtpas.forEach(function (item) {
      if (item.ussername === userename && item.password === userepas) {
        console.log("login sucess");
        userfound = true;
        navigate("/landing", { state: { user: userename } });
      }
    });
    if (userfound === false) {
      console.log("Login failed");
      setreguser(false);
    }
  }

  return (
    <div className="bg-black p-16">
      <div className="bg-white p-12 border rounded-md">
        <h1 className="text-3xl font-bold">Hi Buddy ✌️</h1>
        {reguser ? (
          <p>I help you manage your activities after you login (¬‿¬)</p>
        ) : (
          <p className="text-red-700">"Please Sign Up Before you Login"</p>
        )}

        <div className="flex flex-col gap-2 my-2">
          <input
            placeholder="username"
            value={userename}
            onChange={handlename}
            className="  border-black bg-transparent border rounded-md w-52 p-1 "
          />
          <input
            placeholder="password"
            value={userepas}
            onChange={handlepass}
            className="  border-black bg-transparent border rounded-md w-52 p-1 "
          />

          <button
            onClick={checkUser}
            className="bg-pink-400 rounded-md w-24 p-1"
          >
            Login
          </button>
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Login;
