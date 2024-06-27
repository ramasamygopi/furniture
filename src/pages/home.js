import React from 'react';
import main from './assets/main.png'; 
import footer from './assets/footer.jpg';
 
import './style.css';


const Home = () => {
  return (
    <>
      <section id="home" className="home" style={{ backgroundImage: `url(${main})` }}> 
        <div className='home-text'>
          <h1> <span>Make </span> your Comfort <br />Is Our<span> Happiness</span></h1>
          <p><b> "Discover timeless pieces that bring comfort and style to every room"</b></p>
          <button className='btn'>Shop Now</button>
        </div>
      </section>






  

    <div className="pick">
      <h2><b>Top Picks For You</b></h2>
      <p>Impressive Collection For Your Dream Home</p>
    </div>
    <div className="container fluid">
      <div className="row">
        <div className="col-md-4 col-sm-6">
          <div class="image-top">
        <img src="./img/icon1.jpg" alt="icon1yhhghgh" />
         <h2 class="imgtext"> Sofa Sets</h2> </div>
      </div>
      <div className="col-md-4 col-sm-6">
          <div class="image-top">
        <img src="./img/icon2.jpg" alt="icon1yhhghgh" />
         <h2 class="imgtext">Beds</h2> </div>
      </div>
      <div className="col-md-4 col-sm-6">
          <div class="image-top">
        <img src="./img/icon3.jpg" alt="icon1yhhghgh" />
         <h2 class="imgtext">Dining Table sets</h2> </div>
      </div>
      

      
      
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-6">
          <div class="image-top">
        <img src="./img/icon4.jpg" alt="icon1yhhghgh" />
         <h2 class="imgtext"> Sofa Cafe Beds</h2> </div>
      </div>
      <div className="col-md-4 col-sm-6">
          <div class="image-top">
        <img src="./img/icon7.jpg" alt="icon1yhhghgh" />
         <h2 class="imgtext">Book Shelves</h2> </div>
      </div>
      <div className="col-md-4 col-sm-6">
          <div class="image-top">
        <img src="./img/icon8.jpg" alt="icon1yhhghgh" />
         <h2 class="imgtext">Coffee Tables</h2> </div>
      </div>
      
      </div>
      </div>
      <br></br>
     


      <div className="Newarrival">
<h2>New Arrivals</h2>
<br></br>
<br></br>
      </div>



      <div className="container fluid">
      <div className="row">
        <div className="col-md-4 col-sm-6">
          <div class="nn">
    <img src="./img/n1.jpg" alt="icon1yhhghgh" />
    <br></br>
    <br></br>
    <div className="Details">  

    <h3>Lisa Side Crockery Unit  </h3> 
<p><span id="price">RS 18,850</span> <span id="oldprice">RS 25,000</span></p>
<button type="button" className="Addcart" >
      <i class="fas fa-shopping-cart"></i> Add to Cart
   </button>
    <br></br>
 <h4>  <b> you save 33% </b></h4>

</div>
         </div>
      </div>
      <div className="col-md-4 col-sm-6">
          <div class="nn">
        <img src="./img/n5.jpg" alt="icon1yhhghgh" />
        <br></br>
        <br></br>
        <div>  
<h3>
Tyson Side Crockery Unit </h3>
<p><span id="price">RS 32,750</span><span id="oldprice">RS 40,000</span></p> 
<button type="button" className="Addcart" >
      <i class="fas fa-shopping-cart"></i> Add to Cart
    </button>
    <br></br>
   <h4> <b> you save 25%</b></h4>

</div>
          </div>
      </div>
      <div className="col-md-4 col-sm-6">
          <div class="nn">
        <img src="./img/n3.jpg" alt="icon1yhhghgh" />
        <br></br>
        <br></br>
        <div>  
<h3>
Sitt in' Shoe Cabinet Large </h3>
 <p><span id="price">RS 22,330</span> <span id="oldprice">RS 30,000</span></p>
<button type="button" className="Addcart" >
      <i class="fas fa-shopping-cart"></i> Add to Cart
    </button>
    <br></br>
    <h4> <b>you save 40%</b>  </h4>

</div>
   </div>
   
      </div>      
      </div>


      <br></br>
      <br></br>
      <div className="row">
      <div className="col-md-4 col-sm-6">
      
      <div class="nn">
        <img src="./img/n6.jpg" alt="icon1yhhghgh" />
        <br></br>
        <br></br>
        <div>  
<h3>
 Multi-Storage Cabinet </h3>  
 <p> <span id="price">RS 30,100</span> <span id="oldprice">RS 36,000</span></p>
<button type="button" className="Addcart">
      <i class="fas fa-shopping-cart"></i> Add to Cart
    </button>
    <br></br>
    <h4>  <b>you save 40%</b> </h4>

</div>
   </div>
   </div>
   <div className="col-md-4 col-sm-6">
      
      <div class="nn">
        <img src="./img/n7.jpg" alt="icon1yhhghgh" />
        <br></br>
        <br></br>
        <div>  
<h3>
Nova Home office table  </h3> 
 <p><span id="price">RS 8,900</span> <span id="oldprice">RS 10,000</span></p> 
<button type="button" className="Addcart">
      <i class="fas fa-shopping-cart"></i> Add to Cart
    </button>
    <br></br>
   <h4> <b>you save 40%</b></h4>

</div>
   </div>
   </div>
   

   <div className="col-md-4 col-sm-6">
      
      <div class="nn">
        <img src="./img/n8.jpg" alt="icon1yhhghgh" />
        <br></br>
        <br></br>
     
        <div>  
<h3>
Zolt Computer Desk </h3>
 <p><span id="price">RS 13,800</span><span id="oldprice">RS 18,000</span></p> 
<button type="button" className="Addcart">
      <i class="fas fa-shopping-cart"></i> Add to Cart
    </button>
  
   <h4><b>you save 40%</b> </h4>

</div>
   </div>
   </div>
   </div>
 
   </div>
   <div className="wrapper">
<div className="store">
 
<img src="./img/store1.jpg" alt="store"/>

    <h4>Experience Our Stores</h4>
    <p>
Experience Our Stores

Experience our products 
explore more stores near you</p>
<button className='wrap-btn'>Locate Our Store</button>

</div>
<div className="callback">
  <img src="./img/call-back1.jpg" alt="call-back"/> 
  <h4> Request A Callback</h4>
  <p>
  Have a query regarding a service we offer.
  Our representatives will help you with it.
  </p>
  <button className="wrap-btn">Request Your Call Back</button>

</div>
    </div>

<footer>

<div className='footer' style={{ backgroundImage: `url(${footer})` }}> 
  <div className='about'>
   <h3> About Us</h3>
  < p>At< b> Furniture</b> <span>Shop</span>, we specialize in stylish, <br></br> high-quality furniture to enhance your home.  <br></br>Discover our unique collections and enjoy exceptional service. <br></br> Your dream space starts here. </p>
  <ul>
    <li><i class="fa-brands fa-facebook"></i></li>
    <li><i class="fa-brands fa-twitter"></i></li>
    <li> <i class="fa-brands fa-instagram"></i> </li>
    <li> <i class="fa-brands fa-youtube"></i> </li>
    </ul>
  </div>
  <div className="support">
    <h3>Support</h3>
    <ul>
      <li>FAQ</li>
      <li>Privacy policy</li>
      <li>Help</li>
      <li>Contact</li>
    </ul>
  </div>
  <div className='Product'>  
    <h3>Product</h3>
    <ul>
      <li>Sofa</li>
      <li>Beds</li>
      <li>Tables</li>
      <li>Dining table sets</li>
      <li>Book Shelves</li>
      <li> <button> More Product</button></li>
      </ul>
    </div>
<div className="contact">
  <h3>Contact</h3>
  <ul>
  <li>   <i class="fa-solid fa-phone"></i> +0141 455 790</li>
  <li><i class="fa-solid fa-envelope"></i>infofurnituremore@gmail.com </li>
 
  <li> <input placehoder="comment......"/> <button>Send</button></li>

  </ul>
  <h3>Payment Secured By</h3>
  <ul id="icon">
  <i class="fa-brands fa-amazon-pay"id="icon"></i>
  <i class="fa-brands fa-apple-pay" id="icon"></i>
  <i class="fa-brands fa-cc-paypal" id="icon"></i>
  <i class="fa-brands fa-google-pay"id="icon"></i>
  </ul>
</div>
</div>
</footer>







  

    </>
  );
};
export default Home;
