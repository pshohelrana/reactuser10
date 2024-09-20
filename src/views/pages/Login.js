import { useNavigate  } from "react-router-dom";

export default function Login(){

  const navigate = useNavigate();

  const loginHandle=(e)=>{  
         
    console.log("Login");
    //window.location.replace('/home');
    navigate("/home");
  }

    return(
   <div className="card mt-3" style={{width:"400px",margin:"0 auto"}}>
     <div className="card-title p-2 bg-primary  text-white">User Login</div>
    <form className="container-fluid shadow shadow-lg p-3">
          
          <div className="row mt-3">
            <label className="col-3">Username</label>
             <div className="col-9">
               <input className="form-control" type="text" name="username" placeholder="Enter username" />
             </div>           
          </div>

          <div className="row mt-3">
            <label className="col-3">Password</label> 
            <div className="col-9">
             <input className="form-control" type="password" name="password" placeholder="Enter Password" />
            </div>          
          </div>

          <div className="row mt-3">            
            <div className="offset-3">
              <input onClick={loginHandle} className="btn btn-primary" type="button" value="Log In" />
            </div>           
          </div>
    </form>
    </div>
    );
}