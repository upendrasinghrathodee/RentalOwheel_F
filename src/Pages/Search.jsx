import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

function Search(){
    const vehicle=useSelector(state=>state.carts.vehicle)
    const navigate=useNavigate()
    useEffect(()=>{
        window.dateTime()
    })
    const searc=(event)=>{
           const frm=new FormData(event.target)
           const car=frm.get('car')
           for(const k of frm.entries()){
               console.log(k[0],k[1])
               
           }
           navigate('/list',{state:{car}})
           event.preventDefault()
    }
    return <>
      {/* <!-- Search Start --> */}
    <div className="container-fluid bg-white pt-3 px-lg-5">
      <form onSubmit={searc}>
        <div className="row mx-n2">
            <div className="col-xl-2 col-lg-4 col-md-6 px-2">
                <select className="custom-select px-4 mb-3" style={{height:"50px"}} name="location1">
                    <option selected>Pickup Location</option>
                    <option value="1">Location 1</option>
                    <option value="2">Location 2</option>
                    <option value="3">Location 3</option>
                </select>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-6 px-2">
                <select className="custom-select px-4 mb-3" style={{height:"50px"}} name="location2">
                    <option selected>Drop Location</option>
                    <option value="1">Location 1</option>
                    <option value="2">Location 2</option>
                    <option value="3">Location 3</option>
                </select>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-6 px-2" >
                <div className="date mb-3" id="date" data-target-input="nearest">
                    <input type="date" className="form-control p-4 " placeholder="Pickup Date" name="date"
                        />
                </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-6 px-2">
                <div className="time mb-3" id="time" data-target-input="nearest">
                    <input type="time" className="form-control p-4 " placeholder="Pickup Time" name="time"/>
                </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-6 px-2">
                <select className="custom-select px-4 mb-3" style={{height:"50px"}} name="car" required>
                    <option value="0">Select A Car</option>
                    {vehicle.map(obj=><option value={obj.id}>{obj.model}</option>)}
    
                </select>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-6 px-2">
                <button className="btn btn-primary btn-block mb-3" type="submit" style={{height:"50px"}}>Search</button>
            </div>
        </div>
    </form>
    </div>
    {/* <!-- Search End --> */}



    </>
}


export default Search