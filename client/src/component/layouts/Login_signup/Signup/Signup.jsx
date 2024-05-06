import React from "react";
import './Signup.css'

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import { useState } from "react";
import {useNavigate, Link } from "react-router-dom";
import axios from "axios";
const Signup = () => {
  const navigate = useNavigate(); 
  const [fisrtName, setfName] = useState("");
  const [lastName, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const F = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "http://localhost:5500/signup",
          {
            fisrtName: fisrtName,
            lastName: lastName,
            email: email,
            mobile: mobile,
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
          navigate("/login");
        })
        .catch((err)=>{
          alert(" failed")
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
        className="d-flex align-items-center justify-content-center bg-image "
        style={{
          height: "100vh",
          backgroundImage:
            "url(https://4kwallpapers.com/images/walls/thumbs_3t/10767.jpg)",
        }}
      >
        <div className="mask gradient-custom-3 hover-shadow"></div>
        <MDBCard
          className="m-5 "
          style={{ width: 700, backgroundColor: "rgba(256, 256, 256, 0.9)" }}
        >
          <MDBCardBody className="px-5 hover-shadow">
            <Link to="/">
              <MDBBtn
                type="submit"
                className="mb-4 mx-auto w-50 gradient-custom-4 hover-shadow"
                size="lg"
              >
                login
              </MDBBtn>
            </Link>
            <Link to="/signup">
              <MDBBtn
                type="submit"
                className="mb-4 mx-auto w-50 hover-shadow"
                color="clean"
                to="/signup"
                rippleColor="dark"
                size="lg"
              >
                Sign-up
              </MDBBtn>
            </Link>
            <MDBRow>
              <MDBCol md="6">
                <MDBInput
                  wrapperClass="mb-4"
                  label="First Name"
                  size="lg"
                  id="form1"
                  type="text"
                  onChange={(e) => setfName(e.target.value)}
                  className=" hover-shadow"
                />
              </MDBCol>

              <MDBCol md="6">
                <MDBInput
                  wrapperClass="mb-4"
                  label="Last Name"
                  size="lg"
                  id="form2"
                  type="text"
                  onChange={(e) => setlName(e.target.value)}
                  className=" hover-shadow"
                />
              </MDBCol>
            </MDBRow>
            <MDBInput
              wrapperClass="mb-4"
              label="Your Email"
              size="lg"
              id="form2"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className=" hover-shadow"
            />
            <MDBRow>
              <MDBCol md="3">
                <MDBInput
                  wrapperClass="mb-4 "
                  labelClass="text"
                  label="Code +"
                  size="lg"
                  id="form9"
                  type="text"
                  className=" hover-shadow"
                />
              </MDBCol>

              <MDBCol md="9">
                <MDBInput
                  wrapperClass="mb-4"
                  labelClass="text"
                  label="Phone Number"
                  size="lg"
                  id="form10"
                  type="phone"
                  onChange={(e) => setMobile(e.target.value)}
                  className=" hover-shadow"
                />
              </MDBCol>
            </MDBRow>

            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              size="lg"
              id="form3"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className=" hover-shadow"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Repeat your password"
              size="lg"
              id="form4"
              type="password"
              className=" hover-shadow"
            />
            <MDBBtn
              className="mb-4 w-100 gradient-custom-4 hover-shadow"
              size="lg"
              onClick={F}
            >
              Register
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>

  );
};

export default Signup;
