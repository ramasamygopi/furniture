import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'Swift Computer Table', price: 'RS 3,090', originalPrice: 'RS 5,550', imgSrc: './img/s1.jpg' },
    { id: 2, name: 'Namen Visitor Chair - Blue', price: 'RS 3,500', originalPrice: 'RS 5,000', imgSrc: './img/s2.jpg' },
    { id: 3, name: 'Tampa Writing Table', price: 'RS 4,090', originalPrice: 'RS 4,500', imgSrc: './img/s3.jpg' },
   {id: 4,name:'Raffle Audio and Video Rack', price:'RS 2,999' ,originalPrice:'RS 2,000 ' ,imgSrc:'./img/e1.jpg'},
   {id: 5,name:'Thrive Audio and Video Rack', price:'RS 6,900' ,originalPrice:'RS 9,000' ,imgSrc:'./img/e2.jpg'},
   {id:6,name:'TQuaint Audio and Video Rack', price:'RS 8,270 ' ,originalPrice:'RS 9,500' ,imgSrc:'./img/e3.jpg'},
   {id:7,name:'Pivot Center Table', price:'RS  5,500 ' ,originalPrice:'RS 6,999' ,imgSrc:'./img/l1.jpg'},
   {id:8,name:'Noah Center Table', price:'RS  5,025 ' ,originalPrice:'RS 7,000' ,imgSrc:'./img/l2.jpg'},
   {id:9,name:'Leco Sofa 2 Seater', price:'RS  11,000 ' ,originalPrice:'RS 13,450' ,imgSrc:'./img/l3.jpg'},
   {id:10,name:'Aislin 4 Seater Dining Table', price:'RS  13,000 ' ,originalPrice:'RS 15,999' ,imgSrc:'./img/d1.jpg'},
   {id:11,name:'  Jalen 4 Seater Dining Table', price:'RS  25,000' ,originalPrice:'RS 29,000' ,imgSrc:'./img/d2.jpg'},
   {id:12,name:'Atlanta 6 Seater Dining Set  ', price:'RS  23,000' ,originalPrice:'RS 26,150' ,imgSrc:'./img/d3.jpg'},
   
   {id:13,name:'Leco Sofa 3+2 Seater  ', price:'RS  22,000' ,originalPrice:'RS 29,550' ,imgSrc:'./img/so1.jpg'},
   {id:14,name:'Baywoodwooden Sofa 3 Seater ', price:'RS   20,000' ,originalPrice:'RS 25,000' ,imgSrc:'./img/so2.jpg'},
   {id:15,name:'Larry Wooden Sofa 3 Seatet ', price:'RS    19,000' ,originalPrice:'RS 23,100' ,imgSrc:'./img/so3.jpg'},
   {id:16,name:'Leena Single Seater Recliner', price:'RS   23,900' ,originalPrice:'RS 23,900' ,imgSrc:'./img/r1.jpg'},
   {id:17,name:' Haily Single Seater Recliner', price:'RS   21,900' ,originalPrice:'RS 24,999' ,imgSrc:'./img/r2.jpg'},
   {id:18,name:' Blake Single Seater Recliner', price:'RS   23,900' ,originalPrice:'RS 26,000' ,imgSrc:'./img/r3.jpg'},
  
  ];


  return (
    <>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./img/c3.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src=" ./img/c1.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./img/c2.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <br />
      <br />



      <div className="producttitle">
          <h2>Products</h2>
        </div>
      <div className="container fluid">
       

        <div className="row g-4">
          {products.map(product => (
            <div className="col-md-4 col-sm-6" key={product.id}>
              <div className="lay">
                <div className="imgs">
                  <img src={product.imgSrc} alt="" />
                </div>
                <div className="product-Details">
                  <p>{product.name}</p>
                  <p>{product.price} <span>{product.originalPrice}</span></p>
                  <button type="button" onClick={() =>addToCart(product)} >Add Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    <br></br> 
    <br></br> 
    <br></br> 
     

      <div className="container fluid">
        <Link to="/cart">
          <button type="button" id="delete">Go to Cart</button>
        </Link>
      </div>
    </>
  );
};

export default Product;
