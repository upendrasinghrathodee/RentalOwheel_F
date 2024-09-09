import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToken, removeToken } from "../redux/Slice";
import { Alert } from "@mui/material";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { mainUrl } from "./api";





function Login() {
  const navigate=useNavigate()
  const login = useSelector((state) => state.carts.login);
  const dispatch = useDispatch();
  let emailBox = undefined;
  let passBox = undefined;
  // const [modalShow, setModalShow] = useState(false);
  // const [msg,setMsg]=useState('');
  // const change=()=>{
  //     setModalShow(true)
  //     setTimeout(()=>{
  //        setModalShow(false)
  //     },2000)
  // }
  const notify=(msg)=>toast.error(msg)
  const auth = (event) => {
    const ob = {
      email: emailBox.value,
      password: passBox.value,
    };
    try {
      fetch(`${mainUrl}/rental/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ob),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status) {
                  dispatch(addToken(data.data))
                   sessionStorage.setItem('userInfo',JSON.stringify(data.data))    
                   // setTimeout(()=>{
                  //    sessionStorage.clear()
                  //    dispatch(removeToken())
                  //  },
                  // 10000)           
          } else {
          //   change()
          //  setMsg(data.msg)
            notify(data.msg)
          }
        })
        .catch((res) => {console.log(res);
          // change()
          // setMsg('Issue in Server')
          notify("Issue in Server")
        });
    } catch (err) {
      console.log(err);
    }
    event.preventDefault()
      
  };
  if (login.islogin) {
      navigate("/")
  } else
    return (
      <>
        <div className="container" style={{ width: "50vw" }}>
          {/* <!-- Pills navs --> */}
          <ul
            className="nav nav-pills nav-justified mb-3"
            id="ex1"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <a
                className="nav-link active"
                id="tab-login"
                data-mdb-pill-init
                href="#pills-login"
                role="tab"
                aria-controls="pills-login"
                aria-selected="true"
              >
                Login
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <Link
                to="/cust_register"
                className="nav-link"
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

          {/* <!-- Pills content --> */}
          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="pills-login"
              role="tabpanel"
              aria-labelledby="tab-login"
            >
              <form onSubmit={auth}>
                <div className="text-center mb-3">
                  <p>Sign in with:</p>
                  <button
                    type="button"
                    data-mdb-button-init
                    data-mdb-ripple-init
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </button>

                  <button
                    type="button"
                    data-mdb-button-init
                    data-mdb-ripple-init
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-google"></i>
                  </button>

                  <button
                    type="button"
                    data-mdb-button-init
                    data-mdb-ripple-init
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-twitter"></i>
                  </button>

                  <button
                    type="button"
                    data-mdb-button-init
                    data-mdb-ripple-init
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-github"></i>
                  </button>
                </div>

                <p className="text-center">or:</p>

                {/* <!-- Email input --> */}
                <div data-mdb-input-init className="form-outline mb-4">
                  <input
                    type="email"
                    id="loginName"
                    ref={(ob) => (emailBox = ob)}
                    className="form-control"
                    required
                  />
                  <label className="form-label" for="loginName">
                    Email or username
                  </label>
                </div>

                {/* <div data-mdb-input-init className="form-outline mb-4">
                { modalShow?<Alert severity="info">{msg}</Alert>:""}
                </div> */}
                    <Toaster/>
                {/* <!-- Password input --> */}
                <div data-mdb-input-init className="form-outline mb-4">
                  <input
                    type="password"
                    id="loginPassword"
                    ref={(ob) => (passBox = ob)}
                    className="form-control"
                    required
                  />
                  <label className="form-label" for="loginPassword">
                    Password
                  </label>
                </div>

                {/* <!-- 2 column grid layout --> */}
                <div className="row mb-4">
                  <div className="col-md-6 d-flex justify-content-center">
                    {/* <!-- Checkbox --> */}
                    <div className="form-check mb-3 mb-md-0">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="loginCheck"
                      />
                      <label className="form-check-label" for="loginCheck">
                        {" "}
                        Remember me{" "}
                      </label>
                    </div>
                  </div>

                  <div className="col-md-6 d-flex justify-content-center">
                    {/* <!-- Simple link --> */}
                    <a href="#!">Forgot password?</a>
                  </div>
                </div>

                {/* <!-- Submit button --> */}
                <button
                  type="submit"
                  data-mdb-button-init
                  data-mdb-ripple-init
                  className="btn btn-primary btn-block mb-4"
                >
                  Sign in
                </button>

                {/* <!-- Register buttons --> */}
                <div className="text-center">
                  <p>
                    Not a member? <Link to="/cust_register">Customer Register</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
          {/* <!-- Pills content --> */}
        </div>
              {/* <Message showw={modalShow} content=" fddf" onHide={()=>setModalShow(false)}/> */}
      </>
    );
}
export default Login;
