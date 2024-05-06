import React from "react";

import './Login.css'
import { useState } from "react";

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import {useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate(); 
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const F = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "http://localhost:5500/login",
          {
            email: email,
            password: password,
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then((res) => {
          alert(res.data.message);
          navigate("/out");
        })
        .catch((err)=>{
          alert("Login failed")
          console.log(err)
        })
    } catch (e) {
      console.log(e.response.data);

    }
  };
  return (

    <div >
      <MDBContainer
        fluid
        className="d-flex align-items-center justify-content-center bg-image hover-shadow"
        style={{
          height: "100vh",
          backgroundImage:
            "url(https://4kwallpapers.com/images/walls/thumbs_3t/10767.jpg)",
        }}
      >    
        <div className="mask hover-shadow "></div>
        <MDBCard
          className="m-5 "
          style={{ width: 700, backgroundColor: "rgba(256, 256, 256, 0.9)" }}
        >
          <MDBCardBody className="px-5 hover-shadow">
            <Link to="/">
              <MDBBtn
                type="submit"
                className="mb-4 mx-auto w-50  hover-shadow "
                size="lg"
                color="clean"
                rippleColor="dark"
              >
                login
              </MDBBtn>
            </Link>
            <Link to="/signup">
              <MDBBtn
                type="submit"
                className="mb-4 mx-auto w-50 gradient-custom-4  hover-shadow"
                to="/signup"
                size="lg"
              >
                Sign-up
              </MDBBtn>
            </Link>

            <MDBInput
              wrapperClass="mb-4"
              className=" hover-shadow"
              label="Your Email"
              size="lg"
              id="form2"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <MDBInput
              wrapperClass="mb-4"
              className=" hover-shadow"
              label="Password"
              size="lg"
              id="form3"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <MDBBtn
              className="mb-4 w-100 gradient-custom-4 hover-shadow"
              size="lg"
              onClick={F}
            >
              Login
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>

  );
};

export default Login;



