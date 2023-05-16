
              
import { AiOutlineClose } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { BsGoogle } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
import { useState } from "react";
import { UserAuth } from "../../context/context";
import { useNavigate } from "react-router-dom";
// import Validation from "./validation";
// import {useFormik} from "formik";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setError] = useState("");

  const { login } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      Swal.fire("welcome!", "You logged in!", "success");
      navigate("/dashboard");
    } catch (e) {
      setError(e.message);
      Swal.fire(
        "Good job!",
        "But Invalid Email and Password",
        "You clicked the button!",
        "error"
      );
      console.log(e.message);
    }
  };

  //   const [values, setValues] = useState({
  //     email: "",
  //     password: "",
  //   });

  // const [errors,setError] =useState({ })

  //   function handleChange(e) {
  //     setValues({ ...values, [e.target.value]: [e.target.name] });
  //   }

  //   function handleSubmit(e) {
  //     e.preventDefault();
  //     setError(Validation(values));
  //   }

  return (
    <div className="w-full h-screen shadow-md flex items-center justify-center bg-black">
      <div className="w-80 bg-black rounded-lg">
        <div className="flex items-center justify-between p-2">
          <span className="text-lg text-red-600 font-bold">Login with</span>
          <p className="cursor-default hover:shadow:md">
            <AiOutlineClose />
          </p>
        </div>
        <div className="p-2">
          <ul className="flex justify-center items-center gap-[2rem] rounded-full ">
            <li className="p-2 text-5xl bg-grey-800 text-white rounded-full">
              <a href="Github">
                <AiFillGithub />
              </a>
            </li>
            <li className=" p-3 text-3xl bg-red-600 text-white rounded-full">
              <a href="Google">
                <BsGoogle />
              </a>
            </li>
            <li className="p-3 text-3xl bg-blue-800 text-white rounded-full">
              <a href="Facebook">
                <FaFacebookF />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex w-100 flex-row items-center p-2 text-red-600 font-bold">
          <hr className="w-3/6" />
          <p className="text-xl p-4">or</p>
          <hr className="w-3/6" />
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <label
              className="p-2 block text-red-600 font-bold text-lg"
              htmlFor="name"
            >
              Email
            </label>
            <div className="p-2 flex items-center justify-center">
              <input
                type="text"
                name="email"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 px-2 py-2  border-2 border-neutral-800 rounded-sm"
              />
              <br />
              {/* {errors.email && <p style={{color:"red"}}>{errors.email}</p>} */}
            </div>
            <label
              className="p-2 block text-red-600 font-bold text-lg"
              htmlFor="name"
            >
              Password
            </label>
            <div className="p-2 flex items-center justify-center">
              <input
                type="Password"
                placeholder="Enter Password"
                // value={values.password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 px-2 py-2  border-2 border-neutral-800 rounded-sm"
              />
              {/* {errors.password && <p style={{color:"red"}}>{errors.password}</p>} */}
            </div>
            <div className="p-2 flex items-center justify-center pt-5 ">
              <button
                type="submit"
                className="w-full p-3 text-red font-bold bg-red-600 hover:bg-red-700 rounded-sm"
              >
                LOGIN
              </button>
            </div>
            <div className="flex border-inherit p-5 m-3 px-2 border-sm">
              <input type="checkbox" className="w-12 border-red-600" />
              <p className="flex px-2 text-white">I'am not a robot</p>
            </div>
            <div className="flex items-center justify-center flex-col p-2">
              <p className="pb-5">
                <span className="opacity-40 text-white">Looking to </span>
                <Link to={"/signup"} className="text-white">
                  create an account ?
                </Link>
              </p>
              <p>
                <a href="1" className="text-red-600">
                  Forget Password ?
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
<BsGoogle />;
<AiFillGithub />;

export default Login;
