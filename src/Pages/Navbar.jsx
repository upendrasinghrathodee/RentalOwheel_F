import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { removeToken } from "../redux/Slice"

function Navbar(){
    const login=useSelector(state=>state.carts.login)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    useEffect(()=>{
        window.nav()
    })
    return <>
       {/* <!-- Topbar Start --> */}
    <div className="container-fluid bg-dark py-3 px-lg-5 d-none d-lg-block">
        <div className="row">
            <div className="col-md-6 text-center text-lg-left mb-2 mb-lg-0">
                <div className="d-inline-flex align-items-center">
                    <a className="text-body pr-3" href=""><i className="fa fa-phone-alt mr-2"></i>+917581807821</a>
                    <span className="text-body">|</span>
                    <a className="text-body px-3" href=""><i className="fa fa-envelope mr-2"></i>RentalOwheel@gmail.com</a>
                </div>
            </div>
            <div className="col-md-6 text-center text-lg-right">
                <div className="d-inline-flex align-items-center">
                    <a className="text-body px-3" href="">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="text-body px-3" href="">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a className="text-body px-3" href="">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="text-body px-3" href="">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a className="text-body pl-3" href="">
                        <i className="fab fa-youtube"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Topbar End --> */}

    {/* <!-- Navbar Start --> */}
    <div className="container-fluid position-relative nav-bar p-0">
        <div className="position-relative px-lg-5" style={{zIndex:9}}>
            <nav className="navbar navbar-expand-lg bg-secondary navbar-dark py-3 py-lg-0 pl-3 pl-lg-5">
                <a href="" className="navbar-brand" >
                    <h1 className=" text-primary mb-1">RentalOwheel</h1>
                </a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
                    <div className="navbar-nav ml-auto py-0">
                        {login.role===undefined||login.role==="customer"?<>
                            <Link to="/" className="nav-item nav-link active">Home</Link>
                        <Link to="/about"  className="nav-item nav-link">About</Link>
                        <Link to="/service"  className="nav-item nav-link">Service</Link>
                        <div className="nav-item dropdown">
                               <Link to="/list" className="nav-item nav-link">Car Listing</Link>
                            
                        </div>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu rounded-0 m-0">
                                <Link to="team" className="dropdown-item">The Team</Link>
                                <Link to="/testimonal" className="dropdown-item">Testimonial</Link>
                            </div>
                        </div>
                        <Link to="/contact" className="nav-item nav-link">Contact</Link></>:login.role=="Service_Provider"?<>
                        <Link to="/" className="nav-item nav-link active">Home</Link>
                        <Link to="/about"  className="nav-item nav-link">About</Link>
                        <Link to="/service"  className="nav-item nav-link">Service</Link>
                        <Link to="/vehicle"  className="nav-item nav-link">Vehicles</Link>
                        <Link to="/sphistory"  className="nav-item nav-link">Bookings</Link>
                        </>:<>
                        <Link to="/vm"  className="nav-item nav-link">Vehicle Master</Link>
                        <Link to="/cust"  className="nav-item nav-link">User</Link>
                        <Link to="/sp"  className="nav-item nav-link">Service Provider</Link>
                        </>}
                      {login.islogin?<label className="nav-item nav-link" style={{cursor:"pointer"}} onClickCapture={()=>{dispatch(removeToken())
                          sessionStorage.clear()
                            navigate("/")
                      }}>Logout</label>:<Link to="/login" className="nav-item nav-link">Login</Link>}
                    </div>
                </div>
            </nav>
        </div>
    </div>
    {/* <!-- Navbar End --> */}


    
    </>
}

export default Navbar