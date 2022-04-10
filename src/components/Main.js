import './style.css'
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import PublicService from "../service/PublicService";

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
                <h1 className="h1">Welcome!</h1>
                <div className="card-body">
                    <h5 className="card-title">Project main site.</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <Link to="/create" className="bigButton">Create reservation</Link>
                </div>
            </div>

            {procedures.length
                ? procedures.map(row => (
                    <div className="card" key={row.name}>
                        <div className="card-header">
                            <h4>{row.name}</h4>
                        </div>
                        <div className="card-body">
                            <p className="card-text">Price: {row.price}.</p>
                        </div>
                    </div>
                ))
                : <p>None</p>
            }

            {/*
            <div className="list-group list-group-flush w-50">
                <label className="list-group-item">
                    <input className="form-check-input me-1" type="radio" name="xxx" value="First checkbox"/>First checkbox
                </label>
                <label className="list-group-item">
                    <input className="form-check-input me-1" type="radio" name="xxx" value="First checkbox"/>Second checkbox
                </label>
                <label className="list-group-item">
                    <input className="form-check-input me-1" type="radio" name="xxx" value="Third checkbox"/>Third checkbox
                </label>
                <label className="list-group-item">
                    <input className="form-check-input me-1" type="radio" name="xxx" value="Fourth checkbox"/>Fourth checkbox
                </label>
                <label className="list-group-item">
                    <input className="form-check-input me-1" type="radio" name="xxx" value="Fifth checkbox"/>Fifth checkbox
                </label>
                <button type="button" className="btn btn-primary">Primary</button>
            </div>*/}

        </div>
    )
}
export default Main;