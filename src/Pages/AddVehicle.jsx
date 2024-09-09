import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addall_vehicle, addSp_vehicle } from "../redux/Slice"
import toast from "react-hot-toast"
import { mainUrl } from "./api"

function AddVehicle(){
    const vehicle=useSelector(state=>state.carts.vehicle)
    const login=useSelector(state=>state.carts.login)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    // const regBox=useRef()
    // const fuelBox=useRef()
    // const pucBox=useRef()
    // const modelBox=useRef()
    // const insuranceBox=useRef()
    // const kmBox=useRef()
    // const dayBox=useRef()
    // const acBox=useRef()
    const notify=(msg)=>toast.error(msg)
    const add=(event)=>{
            // const ob={
            //     reg_number:regBox.current.value,
            //     fuel_type:fuelBox.current.value,
            //     ispuc:pucBox.current.checked,
            //     isinsurance:insuranceBox.current.checked,
            //     price_km:kmBox.current.value,
            //     price_days:dayBox.current.value,
            //     ac_charges:acBox.current.value*1,
            //     master:modelBox.current.value,
            // }
      
        const frm=new FormData(event.target)
        frm.set('ispuc',frm.get('ispuc')?frm.get('ispuc').replace('on','true'):0)
        frm.set('isinsurance',frm.get('isinsurance')?frm.get('isinsurance').replace('on','true'):0)
        frm.set('ac_charges',frm.get('ac_charges')*1)
       console.log(frm);
       
        
            try{
        fetch(`${mainUrl}/auth/sp/save_vehicle`,{
            method:'POST',
            headers:{
              'Authorization':`Bearer ${login.token}`
            },
            body:frm
        }).then(res=>res.json()).then(data=>{
            if(data.status){
               dispatch(addall_vehicle(data.data))
               dispatch(addSp_vehicle(data.data))
               navigate("/vehicle")
            }
            else{
                notify(data.msg)
            }
        }).catch(err=>console.log(err)
        )}
        catch(err){
            console.log(err);
            
        }
          
        event.preventDefault()
    }
    return login.islogin?<>
      <div className="container" style={{ width: "50vw" }}>
            <br />
          {/* <!-- Pills navs --> */}
           <h3 className="alert-success text-center">Add Vehicle</h3>
          {/* <!-- Pills navs --> */}
            <br />
          {/* <!-- Pills content --> */}
          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="pills-login"
              role="tabpanel"
              aria-labelledby="tab-login"
            >
              <form onSubmit={add}>

                {/* <!-- Registration Number input --> */}
                <div data-mdb-input-init className="form-outline mb-4">
                  <input
                    type="text"
                    name="reg_number"
                    className="form-control"
                    required
                  />
                  <label className="form-label" for="loginName">
                    Registration Number
                  </label>
                </div>

                {/* <!-- Puc is available or not --> */}
                <div data-mdb-input-init className="form-outline mb-4">
                 <label>Puc</label>&nbsp; <input  type="checkbox"  name="ispuc"  />&nbsp;
                  <label>Insurance</label> <input  type="checkbox" name="isinsurance"  />
                </div>

                {/* <!--  fuel type nput --> */}
                <div data-mdb-input-init className="form-outline mb-4">
                 <select className="form-control" name="fuel_type" required>
                        <option value="">Select fuel type</option>
                        <option value="diesel">Diesel</option>
                        <option value="petrol">Petrol</option>
                        <option value="hybrid">Hybrid</option>
                        <option value="electric">Electric</option>
                 </select>
                  <label className="form-label" for="loginName">
                     Fuel Type
                  </label>
                </div>


                {/* <!--  image type nput --> */}
                <div data-mdb-input-init className="form-outline mb-4">
                 <input type="file"  className="form-control" name="cars"  required multiple />
                  <label className="form-label" for="loginName">
                     images
                  </label>
                </div>

                {/* <!--  model input --> */}
                <div data-mdb-input-init className="form-outline mb-4">
                    <select className="form-control" 
                    // ref={modelBox}
                   name="master"
                    >
                        <option value="">Select model</option>
                        {vehicle.map(obj=><option value={obj.id}>
                              {obj.model}
                        </option>)}
                    </select>
                  <label className="form-label" for="loginName">
                    Car Model
                  </label>
                </div>

                {/* <!-- price input --> */}
                <div data-mdb-input-init className="form-outline mb-4">
                  <input
                    type="number"
                    // ref={kmBox}
                    name="price_km"
                    id="loginPassword"
                    placeholder="Per km"
                    className="form-control"
                  />
                  <input
                    type="number"
                    // ref={dayBox}
                    name="price_days"
                    id="loginPassword"
                    placeholder="Per day"
                    className="form-control"
                  />
                  <label className="form-label" for="loginPassword">
                    Fare Price
                  </label>
                </div>

  {/* <!--  ac charges input --> */}
  <div data-mdb-input-init className="form-outline mb-4">
  <input
                    type="number"
                     name="ac_charges"
                    className="form-control"
                  
                  />
                  <label className="form-label" for="loginName">
                     Ac Charges
                  </label>
                </div>


                {/* <!-- Submit button --> */}
                <button
                  type="submit"
                  data-mdb-button-init
                  data-mdb-ripple-init
                  className="btn btn-primary btn-block mb-4"
                >
                  Add
                </button>

                {/* <!-- Register buttons --> */}
                <div className="text-center">
                </div>
              </form>
            </div>
          </div>
          {/* <!-- Pills content --> */}
        </div>
    </>:navigate('/')
}
export default AddVehicle