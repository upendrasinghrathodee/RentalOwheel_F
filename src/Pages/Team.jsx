import { useEffect } from "react"
import { Link } from "react-router-dom"

function Team(){
    useEffect(()=>{
         window.teamC()
    })
    return <>
    
    {/* <!-- Page Header Start --> */}
    <div className="container-fluid page-header">
        <h1 className="display-3 text-uppercase text-white mb-3">The Team</h1>
        <div className="d-inline-flex text-white">
            <h6 className="text-uppercase m-0"><Link to="/" className="text-white" >Home</Link></h6>
            <h6 className="text-body m-0 px-3">/</h6>
            <h6 className="text-uppercase text-body m-0">The Team</h6>
        </div>
    </div>
    {/* <!-- Page Header Start --> */}


    {/* <!-- Team Start --> */}
    <div className="container-fluid py-5">
        <div className="container py-5">
            <h1 className="display-4 text-uppercase text-center mb-5">Meet Our Team</h1>
            <div className="owl-carousel team-carousel position-relative" style={{padding:"0 30px"}}>
                <div className="team-item">
                    <img className="img-fluid w-100" src="img/team-1.jpg" alt="" />
                    <div className="position-relative py-4">
                        <h4 className="text-uppercase">Full Name</h4>
                        <p className="m-0">Designation</p>
                        <div className="team-social position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
                            <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div className="team-item">
                    <img className="img-fluid w-100" src="img/team-2.jpg" alt="" />
                    <div className="position-relative py-4">
                        <h4 className="text-uppercase">Full Name</h4>
                        <p className="m-0">Designation</p>
                        <div className="team-social position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
                            <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div className="team-item">
                    <img className="img-fluid w-100" src="img/team-3.jpg" alt="" />
                    <div className="position-relative py-4">
                        <h4 className="text-uppercase">Full Name</h4>
                        <p className="m-0">Designation</p>
                        <div className="team-social position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
                            <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div className="team-item">
                    <img className="img-fluid w-100" src="img/team-4.jpg" alt="" />
                    <div className="position-relative py-4">
                        <h4 className="text-uppercase">Full Name</h4>
                        <p className="m-0">Designation</p>
                        <div className="team-social position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
                            <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Team End --> */}


    </>
}

export default Team