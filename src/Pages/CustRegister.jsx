import { useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { addToken } from "../redux/Slice"
import toast, { Toaster } from "react-hot-toast"
import { mainUrl } from "./api"

function CustRegister(){
   const nameBox=useRef()
   const emailBox=useRef()
   const phoneBox=useRef()
   const passBox1=useRef()
   const passBox2=useRef()
  const dispatch=useDispatch()
   const  navigate=useNavigate()
   const [check,setCheck]=useState(true)
   const notify=(msg)=>toast.error(msg)
   const done=(msg)=>toast.success(msg)
   const check1=()=>{
           if(passBox1.current.value===passBox2.current.value)
              setCheck(true)
           else
              setCheck(false)
   }
  const add=(event)=>{
      const ob={
          name:nameBox.current.value,
          email:emailBox.current.value,
          phone:phoneBox.current.value,
          password:passBox1.current.value
      }
      fetch(`${mainUrl}/rental/cust/register`,{
         method:"POST",
         headers: {
          "Content-Type": "application/json",
        },
         body:JSON.stringify(ob)
      }).then(res=>res.json()).then(data=>{
          if(data.status){
              done(data.msg)
              event.target.reset()
          }
          else{
            notify(data.msg)
          }
             
      }).catch(res=>console.log(res))
      console.log(ob);
      
     event.preventDefault()
  }
    return<>

<div className="container" style={{width:"50vw"}}>

{/* <!-- Pills navs --> */}
<ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
  <li className="nav-item" role="presentation">
    <Link to="/login" className="nav-link " id="tab-login" data-mdb-pill-init href="#pills-login" role="tab"
      aria-controls="pills-login" aria-selected="true">Login</Link>
  </li>
  <li className="nav-item" role="presentation">
              <Link
                to="/cust_register"
                className="nav-link active"
                id="tab-register"
                data-mdb-pill-init
                href="#pills-register"
                role="tab"
                aria-controls="pills-register"
                aria-selected="false"
              >
               Customer Register
              </Link>
            </li>
            <li className="nav-item" role="presentation">
              <Link
                to="/sp_register"
                className="nav-link"
                id="tab-register"
                data-mdb-pill-init
                href="#pills-register"
                role="tab"
                aria-controls="pills-register"
                aria-selected="false"
              >
               Service Provider Register
              </Link>
            </li>
</ul>
{/* <!-- Pills navs --> */}
<Toaster/>
{/* <!-- Pills content --> */}
<div className="tab-content">
  
  <div className="tab-pane show active" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
    <form onSubmit={add}>
      <div className="text-center mb-3">
        <p>Sign up with:</p>
        <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
          <i className="fab fa-facebook-f"></i>
        </button>

        <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
          <i className="fab fa-google"></i>
        </button>

        <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
          <i className="fab fa-twitter"></i>
        </button>

        <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
          <i className="fab fa-github"></i>
        </button>
      </div>

      <p className="text-center">or:</p>

      {/* <!-- Name input --> */}
      <div data-mdb-input-init className="form-outline mb-4">
        <input type="text" id="registerName" ref={nameBox} className="form-control" required />
        <label className="form-label" for="registerName" >Name</label>
      </div>

      {/* <!-- Username input --> */}
      <div data-mdb-input-init className="form-outline mb-4">
        <input type="number" id="registerUsername"  ref={phoneBox} className="form-control" max={9999999999} min={6000000000} required/>
        <label className="form-label" for="registerUsername">Phone</label>
      </div>

      {/* <!-- Email input --> */}
      <div data-mdb-input-init className="form-outline mb-4">
        <input type="email" id="registerEmail" ref={emailBox} className="form-control"  required />
        <label className="form-label" for="registerEmail">Email</label>
      </div>

      {/* <!-- Password input --> */}
      <div data-mdb-input-init className="form-outline mb-4">
        <input type="password" id="registerPassword" ref={passBox1} onKeyUpCapture={check1}  className="form-control" required />
        <label className="form-label" for="registerPassword">Password</label>
      </div>

      {/* <!-- Repeat Password input --> */}
      <div data-mdb-input-init className="form-outline mb-4">
        <input type="password" id="registerRepeatPassword" ref={passBox2} onKeyUpCapture={check1}   className="form-control" required/>
        <label className="form-label" for="registerRepeatPassword">Repeat password</label>
        <br /><span style={{color:"red"}}>{check?"":"Password is not Matching"}</span>
      </div>

      {/* <!-- Checkbox --> */}
      <div className="form-check flex-column  mb-4">
        <input className="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
          aria-describedby="registerCheckHelpText" />
        <label className="form-check-label" for="registerCheck">
          I have read and agree to the terms
        </label>
      </div>

      {/* <!-- Submit button --> */}
      <button type="submit" data-mdb-button-init data-mdb-ripple-init className={check?"btn btn-primary btn-block mb-3":"btn btn-primary btn-block mb-3 disabled"}>Sign in</button>
    </form>
  </div>
</div>
{/* <!-- Pills content --> */}
</div>
    </>
}

export default CustRegister