import { useNavigate } from 'react-router-dom';
import {useEffect} from "react";
import AuthService from "../service/AuthService";

function Logout(props){
    const navigate = useNavigate();

    useEffect(() => {
        AuthService.logOut().then(res =>{
            if(res.data.status === 200){
                props.setLoggedIn(false);
                navigate('/');
            }else{
                console.log(res.data.message());
            }
        });
    },[]);

    return(
        <div>
            <div className="card">
                <h1 className="h1">Logged out!</h1>
            </div>
        </div>
    )
}
export default Logout;