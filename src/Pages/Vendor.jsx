import { useEffect } from "react"
function Vendor(){
    useEffect(()=>{
         window.vendorcrousal()
    })
    return <>
   
        {/* <!-- Vendor Start --> */}
    <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="owl-carousel vendor-carousel">
                <div className="bg-light p-4">
                    <img src="img/vendor-1.png" alt="" />
                </div>
                <div className="bg-light p-4">
                    <img src="img/vendor-2.png" alt="" />
                </div>
                <div className="bg-light p-4">
                    <img src="img/vendor-3.png" alt="" />
                </div>
                <div className="bg-light p-4">
                    <img src="img/vendor-4.png" alt="" />
                </div>
                <div className="bg-light p-4">
                    <img src="img/vendor-5.png" alt="" />
                </div>
                <div className="bg-light p-4">
                    <img src="img/vendor-6.png" alt="" />
                </div>
                <div className="bg-light p-4">
                    <img src="img/vendor-7.png" alt="" />
                </div>
                <div className="bg-light p-4">
                    <img src="img/vendor-8.png" alt="" />
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Vendor End --> */}


    </>
}

export default Vendor