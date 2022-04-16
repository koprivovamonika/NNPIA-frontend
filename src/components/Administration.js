import './style.css'
import {useEffect} from "react";
import AuthService from "../service/AuthService";
import {Link, useNavigate} from 'react-router-dom';

function Administration(){
    const navigate = useNavigate();

    useEffect(() => {
        if (AuthService.getUserInfo().username === null){
            navigate('/');
        }
    },[]);

    return(
        <div className="w-50 mx-auto">
            <div className="card mx-auto">
                <h1 className="h1">Administration</h1>
                <div className="row mb-3">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body bg-dark bg-opacity-10 rounded-3">
                                <h5 className="card-title p-2">Procedures</h5>
                                <p className="card-text">Add and edit procedures.</p>
                                <Link to="/adm_procedures" className="btn btn-primary">Go to procedures</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body bg-dark bg-opacity-10 rounded-3">
                                <h5 className="card-title p-2">Reservations</h5>
                                <p className="card-text">Reservation management</p>
                                <Link to="/adm_reservation" className="btn btn-primary">Go to reservations</Link>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    )
}
export default Administration;