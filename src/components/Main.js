import './style.css'
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import PublicService from "../service/PublicService";
import ProcedureList from "./ProcedureList";

function Main(){

    const [procedures, setProcedures] = useState([]);

    useEffect(() => {
        PublicService.getProcedures().then(result => {
            if(result.data.status === 200){
                setProcedures(result.data.result);
                console.log(result.data.result)
            }
        })
    },[]);

    return(
        <div>
            <div className="card">
                <h1 className="h1">Our procedures</h1>
                <div className="card-body w-50 mx-auto" id="procedures">
                    {procedures.length
                        ? procedures.map(row => <ProcedureList clickable={false}  key={row.name} row={row} setProcedure={()=>{}}/>)
                        : <h3>We currently do not offer any cosmetic treatments.</h3>
                    }
                </div>
            </div>
            <Link to="/reservation" className="bigButton">Create reservation</Link>
        </div>
    )
}
export default Main;