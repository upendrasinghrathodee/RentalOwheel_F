import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addVehicle } from "../redux/Slice"
import { useNavigate } from "react-router-dom"
import toast, { Toaster } from "react-hot-toast"
import { mainUrl } from "./api"
function Addvm(){
     const login=useSelector(state=>state.carts.login)
     const dispatch=useDispatch()
     const navigate=useNavigate()
     const modelBox=useRef()
     const typeBox=useRef()
     const imgBox=useRef()
     const seatBox=useRef()
     const tonBox=useRef()
     const frm=new FormData()
     const done = (msg)=>toast.success(msg)
     const notify=(msg)=>toast.error(msg) 
    const add=(event)=>{
           const ob={
              model:modelBox.current.value,
              type:typeBox.current.value,
              image:imgBox.current.value,
              capacity_seats:seatBox.current.value,
              capacity_tons:tonBox.current.value
           }
           const frm=new FormData()
           frm.append("model",ob.model)
           frm.append("type",ob.type)
           frm.append("capacity_seats",ob.capacity_seats*1)
           frm.append("capacity_tons",ob.capacity_tons*1)
           frm.append("image",imgBox.current.files[0])
            try{
                fetch(`${mainUrl}/auth/admin/save_vm`,{
                  method:'POST',
                  headers:{
                    'Authorization':`Bearer ${login.token}`
                  },
                  body:frm
                }).then(res=>res.json()).then(data=>{
                  if(data.status){
                      dispatch(addVehicle(data.data))
                      event.target.reset()
                      done(data.msg)
                  }
                  else{
                     notify(data.msg)
                  }
                }).catch(res=>console.log(res))
            } catch(err){
              console.log(err);
              
            }
           
            event.preventDefault()
    }
    return login.islogin?<>
      <div className="container" style={{ width: "50vw" }}>
            <br />
          {/* <!-- Pills navs --> */}
           <h3 className="alert-success text-center">Add Vehicle Master</h3>
          {/* <!-- Pills navs --> */}
            <br />
            <Toaster/>
          {/* <!-- Pills content --> */}
          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="pills-login"
              role="tabpanel"
              aria-labelledby="tab-login"
            >
              <form  onSubmit={add}>

                {/* <!-- model input --> */}
                <div data-mdb-input-init className="form-outline mb-4">
                  <input
                    type="text"
                    id="loginName"
                    ref={modelBox}
                    className="form-control"
                    required
                  />
                  <label className="form-label" for="loginName">
                    Model
                  </label>
                </div>

                {/* <!-- type input --> */}
                <div data-mdb-input-init className="form-outline mb-4">
                <select className="form-control" ref={typeBox} required>
                    <option value="">Select engine Type</option>
                    <option value="Automatic">Automatic</option>
                    <option value="Manual">Manual</option>
                </select>
                  <label className="form-label" for="loginName">
                    Type
                  </label>
                </div>

                {/* <!--  image nput --> */}
                <div data-mdb-input-init className="form-outline mb-4">
                  <input
                    type="file"
                    id="loginName"
                     ref={imgBox}
                    className="form-control"
                    required
                  />
                  <label className="form-label" for="loginName">
                     Image
                  </label>
                </div>

                {/* <!--  Capacity_seats input --> */}
                <div data-mdb-input-init className="form-outline mb-4">
                  <input
                    type="number"
                    id="loginName"
                    ref={seatBox}
                    className="form-control"
                    
                  />
                  <label className="form-label" for="loginName">
                     Capacity(seats)
                  </label>
                </div>

                {/* <!-- Capacity_tons input --> */}
                <div data-mdb-input-init className="form-outline mb-4">
                  <input
                    type="number"
                    id="loginPassword"
                     ref={tonBox}
                     step="any"
                    className="form-control"
                  />
                  <label className="form-label" for="loginPassword">
                    Capacity(tons)
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

export default Addvm