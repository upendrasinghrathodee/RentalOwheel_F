import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Link, useLocation } from "react-router-dom"

function List(){
    const vehicle=useSelector(state=>state.carts.vehicle)
    const all_vehicle=useSelector(state=>state.carts.all_vehicle)
    const login=useSelector(state=>state.carts.login)
    const location=useLocation()
    const car=location.state
   useEffect(()=>{
     console.log(car);
     
   })
    return <>



    {/* <!-- Rent A Car Start --> */}
    <div className="container-fluid ">
        <div className="container  pb-3">
            <h1 className="display-4 text-uppercase text-center mb-5">Find Your Car</h1>
            <div className="row">
                {all_vehicle.map(obj=>car==null||car.car==obj.veh_master.id||car.car==0?<div className="col-lg-4 col-md-6 mb-2">
                      <div className="rent-item mb-4">
                          <img className="img-fluid mb-4" height={"10px"} src={obj.veh_master.image} alt="" />
                          <h4 className="text-uppercase mb-4">{obj.veh_master.model}</h4>
                          <div className="d-flex justify-content-center mb-4">
                              <div className="px-2">
                                  <i className="fa fa-car text-primary mr-1"></i>
                                  <span>{obj.type}</span>
                              </div>
                              <div className="px-2 border-left border-right">
                                  <i className="fa fa-cogs text-primary mr-1"></i>
                                  <span>{obj.fuel_type}</span>
                              </div>
                              <div className="px-2">
                                  <i className="fa fa-road text-primary mr-1"></i>
                                  <span>Rs{obj.price_km}K/Km</span>
                              </div>
                          </div>
                          <Link to={login.islogin?'/booking':'/login'} state={obj} className="btn btn-primary px-3" href="">Rs {obj.price_days}/Day</Link>
                      </div>
                  </div>:""                
                )}
            </div>
        </div>
    </div>
    {/* <!-- Rent A Car End --> */}





    </>
}

export default List