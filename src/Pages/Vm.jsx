import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { removeVehicle, updateVehicle } from "../redux/Slice"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  faTrash, faUserEdit } from "@fortawesome/free-solid-svg-icons"
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from "react"
import toast, { Toaster } from "react-hot-toast"
function Vm(){
   const login =useSelector(state=>state.carts.login)
    const vehicle=useSelector(state=>state.carts.vehicle)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [show, setShow] = useState(false);
    const [update,setUpdate]=useState({})
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   const done=(msg)=>toast.success(msg)
    const remove=(obj)=>{
            try{
               fetch(`http://localhost:8989/auth/admin/delete_vm/${obj.id}`,{
                  method:"DELETE",
                  headers:{
                     'Authorization':`Bearer ${login.token}`
                  }
               }).then(res=>res.json()).then(data=>{
                  if(data.status){
                      dispatch(removeVehicle(obj))
                  }
               }).catch(res=>console.log(res))
            }catch(err){
               console.log(err);
               
            }
    }
    const add=(event)=>{
           const frm=new FormData(event.target)
           for (let [key, value] of frm.entries()) {
            if (!value) {
              frm.delete(key);
            }
          }
           try{
            fetch(`http://localhost:8989/auth/admin/cust/update/${update.id}`,{
               method:'PUT',
               headers:{
                'Authorization':`Bearer ${login.token}`
              },
              body:frm
            }).then(res=>res.json().then(data=>{
               if(data.status){
                  dispatch(updateVehicle(data.data))
                  handleClose()
                  done(data.msg)
               }
            }
            )).catch(err=>console.log(err)
            )
           }
           catch(err){
            console.log(err);
            
           }
           event.preventDefault()
    }
    return login.islogin?<>
       <Toaster/>
         <Link to="/addvm" className="btn btn-outline-success" >Add</Link>
         <br />

         <div className="container-fluid">
                 <table className="table">
                      <thead>
                          <tr>
                            <th>S.no</th>
                            <th>Model</th>
                            <th>Image</th>
                            <th>type</th>
                            <th>Capacity</th>
                            <th>Delete</th>
                          </tr>
                      </thead>
                      <tbody>
                         {vehicle.map((obj,ind)=><tr >
                            <td>{ind+1}</td>
                            <td>{obj.model}</td>
                            <td ><img  src={obj.image}  alt=""
              style={{height:100,width:100}}
              className="rounded-circle"/></td>
                            <td>{obj.type}</td>
                            <td>{obj.capacity_seats==null?obj.capacity_tons+" tons":"Seats: "+obj.capacity_seats}</td>
                            <td><FontAwesomeIcon style={{cursor:"pointer"}} variant="primary" onClick={()=>{handleShow()
                                     setUpdate(obj)
                            }} icon={faUserEdit}></FontAwesomeIcon>&nbsp;&nbsp;&nbsp;<FontAwesomeIcon style={{cursor:"pointer"}} icon={faTrash} onClick={()=>remove(obj)}></FontAwesomeIcon></td>
                         </tr>)}
                      </tbody>
                 </table>
         </div>
       
         <div className="modal " id="exampleModal"  style={{display:show?"block":"none",zIndex:"10"}} >
  <div className="modal-dialog modal-fullscreen-xl-down">
        <form onSubmit={add}>
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Update User</h1>
        {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
      </div>
      <div className="modal-body">
          <div className="mb-3">
            <label for="recipient-name" className="col-form-label">Model:</label>
            <input type="text" name="model"defaultValue={update.model}  className="form-control" id="recipient-name" />
          </div>
          <div className="mb-3">
            <label for="message-text" className="col-form-label">type:</label>
            <select defaultValue={update.type} name="type" className="form-control" required>
                    <option value="">Select engine Type</option>
                    <option value="Automatic">Automatic</option>
                    <option value="Manual">Manual</option>
                </select>
          </div>
          <div className="mb-3">
            <label for="recipient-name"  className="col-form-label">Image:</label>
            <input type="file" name="image"    className="form-control" id="recipient-name" />
          </div>
          <div className="mb-3">
            <label for="recipient-name" className="col-form-label">Capacity:</label>
            <input type="number" name="capacity_seats" defaultValue={update.capacity_seats}  className="form-control" id="recipient-name" />
          </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" onClick={()=>setShow(false)} data-bs-dismiss="modal">Close</button>
        <button type="submit"  className="btn btn-primary">Send message</button>
      </div>
    </div>
        </form>
  </div>
</div>
    </>:navigate('/')
}

export default Vm