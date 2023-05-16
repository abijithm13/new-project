import Banner from "./components/Home/Banner";
import Services from "./components/Home/Services";
import Header from "./components/Layouts/header";
import { Outlet, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import { AuthContextProvider } from "./context/context";
import Login from "./components/Login/Signin";
import SignUp from "./components/Login/SignUp";
import Dashboardview from "./components/Dashboard/Dashboardview";
import PieComponent from "./components/Dashboard/PieComponent";
import Sidebar from "./components/Dashboard/Sidebar";
import Charts from "./components/Dashboard/Charts";
import Main from "./components/Dashboard/Main";
// import contact from "./components/contact";
// import Contact from "./components/contact/Contact";
import Contact from "./components/contact/Contact";

// import {BrowserRouter,Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header /> <Outlet />
              </>
            }
          >
            <Route index element={<Banner />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/service" element={<Services />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route
              path="/dashboard"
              element={
                <>
                  <Dashboardview />
                  <Main />
                </>
              }
            ></Route>
          </Route>
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
