function Crousal(){
    
const df=()=>{
     
}
    return <>
      {/* <!-- Carousel Start --> */}
    <div className="container-fluid p-0" style={{marginBottom: "1px"}}>
        <div id="header-carousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{maxWidth: "900px"}}>
                            <h4 className="text-white text-uppercase mb-md-3">Rent A Car</h4>
                            <h1 className="display-1 text-white mb-md-4">Best Rental Cars In Your Location</h1>
                            <a href="" className="btn btn-primary py-md-3 px-md-5 mt-2">Reserve Now</a>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{maxWidth:"900px"}}>
                            <h4 className="text-white text-uppercase mb-md-3">Rent A Car</h4>
                            <h1 className="display-1 text-white mb-md-4">Quality Cars with Unlimited Miles</h1>
                            <a href="" className="btn btn-primary py-md-3 px-md-5 mt-2">Reserve Now</a>
                        </div>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
                <div className="btn btn-dark" style={{width:"45px",height:"45px"}}>
                    <span className="carousel-control-prev-icon mb-n2"></span>
                </div>
            </a>
            <a className="carousel-control-next" href="#header-carousel" data-slide="next">
                <div className="btn btn-dark" style={{width:"45px",height:"45px"}}>
                    <span className="carousel-control-next-icon mb-n2"></span>
                </div>
            </a>
        </div>
    </div>
    {/* <!-- Carousel End --> */}



    </>
}

export default Crousal