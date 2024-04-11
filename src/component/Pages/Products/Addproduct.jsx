import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
  } from 'mdb-react-ui-kit';
  

function Addproduct() {

const {handleChange,handleSubmit,errors,submitCount,values} = useFormik({initialValues: {
          fname: '',
          price: '',
          desc: '',
          qty: '' },

        // now you dont need to write the onChange={formik.handleChange} , value={formik.values.fname}
        //just write onChange={handleChange} ,onSubmit={handleSubmit}},  value={values.fname}
    // const formik = useFormik({
    //     initialValues: {
    //       fname: '',
    //       price: '',
    //       desc: '',
    //       qty: '' 
    //     },
         validationSchema:Yup.object({
            fname:Yup.string("must be string").required("product name is required").min(3,"short name"),
          price: Yup.number("must be number").required("price is required").min(3,"price should be higher"),
          desc:Yup.string("must be string").required("Description is required"),
          qty:Yup.number("must be number").required('quantity is required' ).min(1,"Minimum 1 value is required")
         }),
        onSubmit: values => {
          alert(JSON.stringify(values, null,2)+ " \nproduct added succesfully!");
        }
      });
  return <div>
 <form onSubmit={handleSubmit}>
    <MDBRow className='mb-4'>
      <MDBCol>
        <MDBInput id='form3Example1' label='Product name 'name="fname"  onChange={handleChange}
         value={values.fname} />
       <span style={{color:"red"}}>{errors.fname && <p>{errors.fname}</p>}</span>
      </MDBCol>
      <MDBCol>
        <MDBInput id='form3Example2' label='Price'name="price"  onChange={handleChange}
         value={values.price}/>
         <span style={{color:"red"}}>{errors.price && <p>{errors.price}</p>}</span>
      </MDBCol>
      <MDBCol>
        <MDBInput id='form3Example2' label='Desc' name="desc"  onChange={handleChange}
         value={values.desc}/>
         <span style={{color:"red"}}>{errors.desc && <p>{errors.desc}</p>}</span>
      </MDBCol>
    </MDBRow>
    <MDBInput className='mb-4' type='text' id='form3Example3' label='Qty'name="qty"  onChange={handleChange}
         value={values.qty} />
         <span style={{color:"red"}}>{errors.qty && <p>{errors.qty}</p>}</span>

  

    <MDBBtn type='submit' className='mb-4' block>
      Add product
    </MDBBtn>

  </form></div>;
}

export default Addproduct;

