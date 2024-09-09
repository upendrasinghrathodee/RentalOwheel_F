import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  faTrash, faUserEdit } from "@fortawesome/free-solid-svg-icons"
import toast, { Toaster } from "react-hot-toast"
import { reomove_all_vehicle, reomove_Sp_vehicle } from "../redux/Slice"
function Vehicle(){
   const navigate=useNavigate()
   const login=useSelector(state=>state.carts.login)
   const sp_vehicle=useSelector(state=>state.carts.sp_vehicle)
   const dispatch=useDispatch()
   const notify=(msg)=>toast.error(msg)
   const done=(msg)=>toast.success(msg)
   const del=(obj)=>{
       try{
            fetch(`http://localhost:8989/auth/sp/delete/${obj.id}`,{
               method:'DELETE',
         headers:{
            'Authorization':`Bearer ${login.token}`
         }
            }).then(res=>res.json()).then(data=>{
               if(data.status){
                  dispatch(reomove_Sp_vehicle(obj))
                  dispatch(reomove_all_vehicle(obj))
                  done(data.msg)
               }
            })    
       }catch(err){
           console.log(err);
           notify("Server Is Facing issue!!!")
       }
   }
    return login.islogin?<>
      <div className="container">
          <br />
          <h3 className="text-center alert-success">Vehicle list</h3>
           <br />
           <div className="text-center"><Link to="/addvehicle" className="btn btn-outline-success">Add</Link></div>
           <br />
           <Toaster/>
           <table className="table">
              <thead>
                     <tr>
                        <th scope="col">S.no</th>
                        <th>Registration Number</th>
                        <th>Puc</th>
                        <th>Insurance</th>
                        <th>fuel Type</th>
                        <th>Price</th>
                        <th>Ac Charges</th>
                     </tr>
              </thead>
              <tbody className="table-group-divider">
                {sp_vehicle.map((obj,ind)=><tr>
                    <td>{ind+1}</td>
                    <td>{obj.reg_number}</td>
                    <td>{obj.ispuc?"Pass":"fail"}</td>
                    <td>{obj.isinsurance?"Pass":"fail"}</td>
                    <td>{obj.fuel_type}</td>
                    <td>{obj.price_km}</td>
                    <td>{obj.ac_charges}</td>
                    <td><FontAwesomeIcon icon={faUserEdit}/>&nbsp;&nbsp;<FontAwesomeIcon style={{cursor:'pointer'}} onClick={()=>{del(obj)}}  icon={faTrash} /> </td>
                 </tr>)}
              </tbody>
           </table>
      </div>

    </>:navigate('/')
}
export default Vehicle