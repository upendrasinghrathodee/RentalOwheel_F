import { Route, Router, Routes } from "react-router-dom";
import Crousal from "./Pages/Crousal";
import Navbar from "./Pages/Navbar";
import Search from "./Pages/Search";
import About from "./Pages/About";
import Footer from "./Pages/Footer";
import Service from "./Pages/Service";
import Detail from "./Pages/Detail";
import List from "./Pages/list";
import Booking from "./Pages/Booking";
import Home from "./Pages/Home";
import Team from "./Pages/Team";
import Testimonial from "./Pages/Testimonal";
import Contact from "./Pages/Contact";
import Vendor from "./Pages/Vendor";
import Login from "./Pages/Login";
import CustRegister from "./Pages/CustRegister";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  addCustomer, addToken, loadall_vehicle, loadSp_vehicle, loadVehicle } from "./redux/Slice";
import SpRegister from "./Pages/SpRegister";
import Sp from "./Pages/Sp";
import Cust from "./Pages/Cust";
import Vm from "./Pages/Vm";
import Addvm from "./Pages/Addvm";
import Vehicle from "./Pages/Vehicle";
import AddVehicle from "./Pages/AddVehicle";
import { mainUrl } from "./Pages/api";
function App() {
  const dispatch=useDispatch()
  const vehicle=useSelector(state=>state.carts.vehicle)
  const login=useSelector(state=>state.carts.login)
  const cust=useSelector(state=>state.carts.cust)
  const all_vehicle=useSelector(state=>state.carts.all_vehicle)
  const sp_vehicle=useSelector(state=>state.carts.sp_vehicle)
  useEffect(()=>{
     if(sessionStorage.getItem('userInfo')!=null){
         dispatch(addToken(JSON.parse(sessionStorage.getItem('userInfo')))) 
         const t=setInterval(()=>{
                          
          },10000)
     }
    try{
      if(vehicle.length===0){
           fetch(`${mainUrl}/rental/list_vm`).then(res=>res.json()).then(data=>{
             dispatch(loadVehicle(data.data))              
       }).catch(res=>console.log(res))
      }
     if(all_vehicle.length===0){
        fetch(`${mainUrl}/rental/list_vehicle`).then(res=>res.json()).then(data=>{
          dispatch(loadall_vehicle(data.data))
     }).catch(res=>console.log(res))
    }
    }
    catch(err){
          alert("server is not running or malfunction")
          console.log(err);  
    }
    
  },[])
  if(login.islogin&&cust.length===0&&login.role=="admin"){
      try{
        fetch(`${mainUrl}/auth/admin/cust/list`,{
          headers:{
             'Authorization' : `Bearer ${login.token}`
          }
        }).then(res=>res.json()).then(data=>{
          if(data.status){
              dispatch(addCustomer(data.data))
          }
        })
      }
      catch(err){
        console.log(err);
        
      }
  }
  if(login.islogin&&sp_vehicle.length===0&&login.role=="Service_Provider"){
    try{
      fetch(`${mainUrl}/auth/sp/vehicle/list`,{
        headers:{
           'Authorization' : `Bearer ${login.token}`
        }
      }).then(res=>res.json()).then(data=>{
        if(data.status){
            dispatch(loadSp_vehicle(data.data))  
        }
      })
    }
    catch(err){
      console.log(err);
      
    }
  }
  return <>
       <Navbar/>
     {login.role=="admin"||login.role=="Service_Provider"?"":<Search/>}
      
       <Routes>
        <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/service" element={<Service/>}></Route>
          <Route path="/detail" element={<Detail/>}></Route>
          <Route path="/list" element={<List/>}></Route>
          <Route path="/booking" element={<Booking/>} ></Route>
          <Route path="/team" element={<Team/>}></Route>
          <Route path="/testimonal" element={<Testimonial/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/cust_register" element={<CustRegister/>}></Route>
          <Route path="/sp_register" element={<SpRegister/>}></Route>
          <Route path="/sp" element={<Sp/>}></Route>
          <Route path="/cust" element={<Cust/>}></Route>
          <Route path="/vm" element={<Vm/>}></Route>
          <Route path="/addvm" element={<Addvm/>}></Route>
          <Route path="/vehicle" element={<Vehicle/>}></Route>
          <Route path="/addvehicle" element={<AddVehicle/>}></Route>
       </Routes>
       <Vendor/>
       <Footer/>

  </>
}

export default App;
