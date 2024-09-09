import { useDispatch, useSelector } from "react-redux"
import { removeCustomer } from "../redux/Slice"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  faTrash, faUserEdit } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import { mainUrl } from "./api"

function Cust(){
   const cust=useSelector(state=>state.carts.cust)
   const login=useSelector(state=>state.carts.login)
   const dispatch=useDispatch()
   const navigate=useNavigate()
   const notify=(msg)=>toast.error(msg)
   const done=(msg)=>toast.success(msg)
   const del=(obj)=>{
      const url=`${mainUrl}/auth/admin/cust/delete/${obj.id}`

      if(window.confirm("Are You Sure that you want to delete the User ?")){
      try{
       fetch(url,{
         method:'DELETE',
         headers:{
            'Authorization':`Bearer ${login.token}`
         }
       }).then(res=>res.json()).then(data=>{
          if(data.status){
                 dispatch(removeCustomer(obj))
                 done(data.msg)
          }
          else{
              notify(data.msg)
          }
       }).catch(err=>console.log(err)
       )
      }
      catch(err){
          alert("Got an Error")
      }
   }
        
   }
   return login.islogin&&login.role=="admin"?<>
    <div className="conatiner">
        <h3 className="alert-success text-center">User List</h3>
        <table className="table align-middle mb-0 bg-white">
             <thead className="bg-light">
                <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>role</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
             </thead>
             <tbody>
                {cust.map((obj,ind)=><tr>
                  <td>{ind+1}</td>
                  <td>  <div className="d-flex align-items-center">
          <img
              src="https://mdbootstrap.com/img/new/avatars/8.jpg"
              alt=""
              style={{height:45,width:45}}
              className="rounded-circle"
              />
          <div className="ms-3">
            <p className="fw-bold mb-1">{obj.name}</p>
            <p className="text-muted mb-0">{obj.email}</p>
          </div>
        </div></td>
                  <td>{obj.phone}</td>
                  <td className="fw-bolder"><span className="fw-bold">{obj.role}</span></td>
                  <td><span className={obj.status?"badge-lg badge-success rounded-pill p-2 ":"badge-lg badge-warning rounded-pill p-2"}>{obj.status?'Acitve':"Inactive"}</span></td>
                  <td><FontAwesomeIcon style={{cursor:"pointer"}} icon={faUserEdit}/>&nbsp;&nbsp;<FontAwesomeIcon style={{cursor:'pointer'}} onClick={()=>del(obj)} icon={faTrash} /> </td> 
                </tr>)}
             </tbody>
        </table>
   </div>
   </>:navigate('/')
}
export default Cust