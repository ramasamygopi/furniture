import {Outlet,Link} from 'react-router-dom'

const Layout=()=>{
    return(
      <>
       <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
  <div class="container-fluid">
  <a class="navbar-brand" href="#">Furniture  <span>Shop</span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          
          <Link to="/" class="nav-link active" aria-current="page">Home</Link>
        </li>
        <li class="nav-item">
          
          <Link to="/About" class="nav-link">About</Link>

        </li>
        <li class="nav-item">
          
          <Link to="/Product" class="nav-link">Product</Link>
        </li>
        <li class="nav-item">
          
          <Link to="/Login" class="nav-link">Login</Link>
        </li>
        <li class="nav-item">
          
          <Link to="/Cart" class="nav-link">Cart</Link>
        </li>
         
        
      </ul>
      <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          </form>
    </div>
  </div>
  
</nav>
<Outlet/>
</>
    )
}
export default Layout;