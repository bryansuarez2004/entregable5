import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const ProtectecRoutes = () => {
  
       const trainerName = useSelector((store)=> store.trainerName.name)
  
   if(trainerName !== ''){
       return <Outlet />;
   }else{
       return <Navigate to='/' />;
   }


    
  
}
export default ProtectecRoutes