import React from "react";
import Category from "./Category";
import Addproduct from "./Addproduct";
const Products = () => {


 const Data=[
    {
      name:"iphone",
      price:999 , 
      srce : "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(4).webp",
      rating: 602,
      discount:100
    },
    {
      name:"Motorola",
      price:562 , 
      srce : "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(4).webp",
      rating:552,
      discount:60
    },
    {
      name:"Kacheda",
      price:400 , 
      srce : "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(4).webp",
      rating: 1000,
      discount:199
    },
    {
      name:"samsung M-32",
      price:476 , 
      srce : "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(4).webp",
      rating: 3663,
      discount:50
    }
  ];
  return <div>

    <Category data={Data}/>
    <Addproduct/>
  </div>;
};

export default Products;
