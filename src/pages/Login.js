import './style.css';
import register from './assets/register.png'; 

const Contact = () => {
    return (
        <>
            <center>
                <h3 className="tittle-sign-in">
                    <b>LogIn Form</b>
                </h3>
            </center>
            <div className="outline-container">
                <div className="left" style={{ backgroundImage: `url(${register})`, backgroundSize: "cover" }}> </div>
                <div className="right">
                  <  div className="formbox">

                  <form>
                    <p>E-mail</p>
                    <br></br>
                    
                    <input type='email'/>
                    <br></br>
                    <br></br>
                    <p>password</p>
                    <br></br>
                    <input typr="password"/>
                    <br></br>
                    <br></br>
                    <br></br>
                    <button type='submit'>Sign In</button>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p id="fpassword">forget password?</p>
                  </form>
                  </div>
                    
                </div>
            </div>
        </>
    );
}

export default Contact;
