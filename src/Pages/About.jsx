import { Link } from "react-router-dom"


function About(){
    return <>
    
    {/* <!-- Page Header Start --> */}
    <div className="container-fluid page-header">
        <h1 className="display-3 text-uppercase text-white mb-3">About</h1>
        <div className="d-inline-flex text-white">
            <h6 className="text-uppercase m-0"><Link to="/" className="text-white" href="">Home</Link></h6>
            <h6 className="text-body m-0 px-3">/</h6>
            <h6 className="text-uppercase text-body m-0">About</h6>
        </div>
    </div>
    {/* <!-- Page Header Start --> */}


    {/* <!-- About Start --> */}
    <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
            <h1 className="display-4 text-uppercase text-center mb-5">Welcome To <span className="text-primary">RentalOwheel Community</span></h1>
            <div className="row justify-content-center">
                <div className="col-lg-10 text-center">
                    <img className="w-75 mb-4" src="img/about.png" alt="" />
                    <p>Justo et eos et ut takimata sed sadipscing dolore lorem, et elitr labore labore voluptua no rebum sed, stet voluptua amet sed elitr ea dolor dolores no clita. Dolores diam magna clita ea eos amet, amet rebum voluptua vero vero sed clita accusam takimata. Nonumy labore ipsum sea voluptua sea eos sit justo, no ipsum sanctus sanctus no et no ipsum amet, tempor labore est labore no. Eos diam eirmod lorem ut eirmod, ipsum diam sadipscing stet dolores elitr elitr eirmod dolore. Magna elitr accusam takimata labore, et at erat eirmod consetetur tempor eirmod invidunt est, ipsum nonumy at et.</p>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-4 mb-2">
                    <div className="d-flex align-items-center bg-light p-4 mb-4" style={{height:"150px"}}>
                        <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary ml-n4 mr-4" style={{height:"100px",width:"100px"}}>
                            <i className="fa fa-2x fa-headset text-secondary"></i>
                        </div>
                        <h4 className="text-uppercase m-0">24/7 Car Rental Support</h4>
                    </div>
                </div>
                <div className="col-lg-4 mb-2">
                    <div className="d-flex align-items-center bg-secondary p-4 mb-4" style={{height:"150px"}}>
                        <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary ml-n4 mr-4" style={{height:"100px",width:"100px"}}>
                            <i className="fa fa-2x fa-car text-secondary"></i>
                        </div>
                        <h4 className="text-light text-uppercase m-0">Car Reservation Anytime</h4>
                    </div>
                </div>
                <div className="col-lg-4 mb-2">
                    <div className="d-flex align-items-center bg-light p-4 mb-4" style={{height:"150px"}}>
                        <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary ml-n4 mr-4" style={{height:"100px",width:"100px"}}>
                            <i className="fa fa-2x fa-map-marker-alt text-secondary"></i>
                        </div>
                        <h4 className="text-uppercase m-0">Lots Of Pickup Locations</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- About End --> */}


    {/* <!-- Banner Start --> */}
    <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="row mx-0">
                <div className="col-lg-6 px-0">
                    <div className="px-5 bg-secondary d-flex align-items-center justify-content-between" style={{height:"350px"}}>
                        <img className="img-fluid flex-shrink-0 ml-n5 w-50 mr-4" src="img/banner-left.png" alt="" />
                        <div className="text-right">
                            <h3 className="text-uppercase text-light mb-3">Want to be driver?</h3>
                            <p className="mb-4">Lorem justo sit sit ipsum eos lorem kasd, kasd labore</p>
                            <a className="btn btn-primary py-2 px-4" href="">Start Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 px-0">
                    <div className="px-5 bg-dark d-flex align-items-center justify-content-between" style={{height:"350px"}}>
                        <div className="text-left">
                            <h3 className="text-uppercase text-light mb-3">Looking for a car?</h3>
                            <p className="mb-4">Lorem justo sit sit ipsum eos lorem kasd, kasd labore</p>
                            <a className="btn btn-primary py-2 px-4" href="">Start Now</a>
                        </div>
                        <img className="img-fluid flex-shrink-0 mr-n5 w-50 ml-4" src="img/banner-right.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Banner End --> */}
    </>
}
export default About