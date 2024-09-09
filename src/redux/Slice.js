import { createSlice } from "@reduxjs/toolkit";

const slice=createSlice({
    name:'auth',
    initialState:{
        login:{
            islogin:false,
            token:undefined,
            role:undefined,
            name:undefined
        },
        vehicle:[],
        cust:[],
        sp_vehicle:[],
        all_vehicle:[]
    },
    reducers:{
        addToken:(state,action)=>{
            const [token,role,name]=action.payload
            if(state.login.islogin===false){
                state.login={
                    islogin:true,
                    token:token,
                    role:role,
                    name:name
                }
            }
        },
        removeToken:(state,action)=>{
             const p=action.payload  
             if(state.login.islogin){
                 state.login={
                    islogin:false,
                    token:undefined,
                    role:undefined,
                    name:undefined
                }
             }
        },
     loadVehicle:(state,action)=>{
         const p=action.payload
         state.vehicle=p
     },
     addVehicle:(state,action)=>{
        const p=action.payload
        state.vehicle=[...state.vehicle,p]
     },
     removeVehicle:(state,action)=>{
        const p=action.payload
        state.vehicle=state.vehicle.filter(obj=>obj.id!=p.id)
     },
     updateVehicle:(state,action)=>{
         const p=action.payload
         state.vehicle=state.vehicle.map(obj=>obj.id==p.id?p:obj)
     },
     addCustomer:(state,action)=>{
        const p=action.payload
        state.cust=p
     },
     removeCustomer:(state,action)=>{
         const p=action.payload
         state.cust=state.cust.filter(ob=>ob.id!=p.id)
     },
     loadSp_vehicle:(state,action)=>{
         const p=action.payload
         state.sp_vehicle=p
     },
     addSp_vehicle:(state,action)=>{
        const p=action.payload
        state.sp_vehicle=[...state.sp_vehicle,p]
     },
     reomove_Sp_vehicle:(state,action)=>{
        const p=action.payload
        state.sp_vehicle=state.sp_vehicle.filter(ob=>ob.id!=p.id)
     },
     loadall_vehicle:(state,action)=>{
        const p=action.payload
        state.all_vehicle=p
    },
    addall_vehicle:(state,action)=>{
        const p=action.payload
        state.all_vehicle=[...state.all_vehicle,p]
     },
     reomove_all_vehicle:(state,action)=>{
        const p=action.payload
        state.all_vehicle=state.all_vehicle.filter(ob=>ob.id!=p.id)
     },
    }
})

export default slice.reducer
export const {addToken,removeToken,addVehicle,addCustomer,removeCustomer,addSp_vehicle,loadSp_vehicle,loadVehicle,removeVehicle,loadall_vehicle,addall_vehicle,reomove_Sp_vehicle,reomove_all_vehicle,updateVehicle}=slice.actions