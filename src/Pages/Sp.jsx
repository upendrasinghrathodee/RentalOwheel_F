import { useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

function Sp(){
   const login=useSelector(state=>state.carts.login)
   const navigate=useNavigate()
   const [clk,setClk]=useState(false)

return login.islogin?<> 
   <div className="conatiner">
        <h3 className="alert-success text-center">Service Provider List</h3>
        <table className="table">
             <thead>
                <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Company Name</th>
                    <th>Registration Number</th>
                    <th>Address</th>
                    <th>Contact</th>
                    <th>Contact Person Name</th>
                    <th>Location</th>
                    <th>Delete</th>
                </tr>
             </thead>
             <tbody>
                
             </tbody>
        </table>
   </div>

  <button onClick={()=>setClk(true)}>Chnage</button>
  <div className="modal" tabIndex="-1" style={{display:clk?"block":"none" ,zIndex:"10"}}>
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>setClk(false)}>Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

</>:navigate('/')
}

export default Sp