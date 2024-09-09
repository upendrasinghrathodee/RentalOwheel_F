import { useSelector } from "react-redux"
import Crousal from "./Crousal"
import { Link, useNavigate } from "react-router-dom"


function Home(){
   const login=useSelector(state=>state.carts.login)
   const navigate=useNavigate()
    return login.role=="admin"?navigate('/vm'):<>
    <h1 className="display-4 text-uppercase text-center mb-5">Welcome To <span className="text-primary">RentalOwheel Community {login.name}</span></h1>

  
    {login.islogin?"":<div className="container-fluid py-5">
        <div className="container py-5">
            <div className="row mx-0">
                <div className="col-lg-6 px-0">
                    <div className="px-5 bg-secondary d-flex align-items-center justify-content-between" style={{height:"350px"}}>
                        <img className="img-fluid flex-shrink-0 ml-n5 w-50 mr-4" src="img/banner-left.png" alt="" />
                        <div className="text-right">
                            <h3 className="text-uppercase text-light mb-3">Want to be Share Your Car?</h3>
                            <p className="mb-4">Lorem justo sit sit ipsum eos lorem kasd, kasd labore</p>
                            <Link className="btn btn-primary py-2 px-4" to="/sp_register">Start Now</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 px-0">
                    <div className="px-5 bg-dark d-flex align-items-center justify-content-between" style={{height:"350px"}}>
                        <div className="text-left">
                            <h3 className="text-uppercase text-light mb-3">Looking for a car?</h3>
                            <p className="mb-4">Lorem justo sit sit ipsum eos lorem kasd, kasd labore</p>
                            <Link className="btn btn-primary py-2 px-4" to="/cust_register">Start Now</Link>
                        </div>
                        <img className="img-fluid flex-shrink-0 mr-n5 w-50 ml-4" src="img/banner-right.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>}
      <Crousal/>
    </>
}

export default Home