
import { UserAuth } from './AuthContext'
import {  useNavigate } from 'react-router-dom';

const ProtectedRoutes = ({children}) => {
    const navigate =useNavigate();
    const {currentUser}=UserAuth();
    if(!currentUser){
        return navigate("/login")
    }
    return children



}

export default ProtectedRoutes;