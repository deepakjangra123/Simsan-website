import React from "react";
import { MDBInput, MDBBtn,MDBTable ,MDBTableBody,MDBTableHead} from "mdb-react-ui-kit";
import { useState } from "react";
import { Form } from "react-router-dom";

function Addcategory() {
  const [cat, setCat] = useState("hello G");
  const [summit, setSummit] = useState([]);
  // function F(){
  //   alert("heloo");
  // }

  const F = (event) => {
    console.log(event.target); //return  // <input type="text" class="form-control active" id="form1" value=""></input>
    console.log(event.target.name);
    console.log(event.target.value);
    setCat(event.target.value);
  };
  const A = () => {
    // setSummit(summit.concat(cat));
    // ororororoor use push and spread operator
    setSummit([...summit, cat]);
  };
  console.log(summit[0])
  return (
    <div>
      <h1>Add Category : {cat}</h1>
      <h1>category : {summit}</h1>
      <Form onSubmit={A}>  
        {" "}
        <MDBInput label="Category name" id="form1" type="text" onChange={F} /> 
        {/*  or directly call onchange={(e)=>setCat(e.target.value)}*/}
        <MDBBtn>Add</MDBBtn>
      </Form>
      <MDBTable striped>
      <MDBTableHead>
      <tr>
          <th scope='row'>id</th>
          <td>category</td>
        </tr>
      </MDBTableHead>
      <MDBTableBody>

        {summit.map((a, i) => {
          return (<><tr>
            <td>{i}</td>
            <td>{a}</td>
          </tr></>);          
        })}
      </MDBTableBody>
    </MDBTable>
        
    </div>
  );
}

export default Addcategory;
