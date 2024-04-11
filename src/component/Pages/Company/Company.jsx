import React, { useState } from "react";
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";

export default function Company() {
  // or you can use Formik coustum hook instead
  const [obj, setObj] = useState({
    fname: "",
    lname: "",
    address: "",
    email: "",
    contact: "",
  });

  const [objarr, setObjarr] = useState([]);

  const F = (e) => {
    const { name, value } = e.target;
    // ororororoorro
    // const name = e.target.name;    /// add name="fname" ,name="lname" 
    // const value = e.target.value;  /// now dont need to add value={name.fname}
    setObj({ ...obj, [name]: value });
  };

  const A = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setObjarr([...objarr, obj]); // Push the current obj into objarr
    setObj({ // Clear the form fields after submission
      fname: "",
      lname: "",
      address: "",
      email: "",
      contact: "",
    });
  };

  return (
    <>
      <form onSubmit={A}>
        <MDBRow className="mb-4">
          <MDBCol>
            
            <MDBInput onChange={F} id="form6Example1" label="First name" name="fname" value={obj.fname} />
          </MDBCol>
          <MDBCol>
            <MDBInput onChange={F} id="form6Example2" label="Last name" name="lname" value={obj.lname} />
          </MDBCol>
        </MDBRow>

        <MDBInput
          onChange={F}
          wrapperClass="mb-4"
          id="form6Example4"
          label="Address"
          name="address"
          value={obj.address}
        />
        <MDBInput
          onChange={F}
          wrapperClass="mb-4"
          type="email"
          id="form6Example5"
          label="Email"
          name="email"
          value={obj.email}
        />
        <MDBInput
          onChange={F}
          wrapperClass="mb-4"
          type="tel"
          id="form6Example6"
          label="Phone"
          name="contact"
          value={obj.contact}
        />
        <MDBBtn className="mb-4" type="submit" block>
          Place order
        </MDBBtn>
      </form>
      
      <MDBTable striped>
        <MDBTableHead>
          <tr>
            <th scope='row'>id</th>
            <td>First name</td>
            <td>Last name</td>
            <td>Address</td>
            <td>Email</td>
            <td>Phone</td>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {objarr.map((a, i) => (
            <tr key={i}>
              <td>{i}</td>
              <td>{a.fname}</td>
              <td>{a.lname}</td>
              <td>{a.address}</td>
              <td>{a.contact}</td>
              <td>{a.email}</td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
    </>
  );
}
