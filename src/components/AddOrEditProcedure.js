import React, {useEffect, useState} from 'react';
import AuthService from "../service/AuthService";
import {useLocation, useNavigate} from 'react-router-dom';
import ProcedureService from "../service/ProcedureService";

function AddOrEditProcedure(props) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (AuthService.getUserInfo().username === null) {
            navigate('/');
        }
        if(location.state != null){
            if(location.state.name!=null){
                setName(location.state.name);
            }
            if(location.state.description!=null){
                setDescription(location.state.description);
            }
            if(location.state.price!=null){
                setPrice(location.state.price);
            }
        }

    }, []);

    const edit = (e) => {
        e.preventDefault();
        console.log(description);
        const procedure = {
            id: location.state.id,
            name: name,
            description: description,
            price: price
        };
        ProcedureService.updateProcedure(procedure).then(res => {
            if (res.data.status === 200) {
                navigate('/adm_procedures');
            } else {
                setMessage(res.data.message);
            }
        });
    };

    const create = (e) => {
        e.preventDefault();
        const procedure = {
            name: name,
            description: description,
            price: price
        };
        ProcedureService.createProcedure(procedure).then(res => {
            if (res.data.status === 200) {
                navigate('/adm_procedures');
            } else {
                setMessage(res.data.message);
            }
        });
    };

    const handleChangeName = (e) => {
        setName(e.target.value);
    }

    const handleChangeDescription = (e) => {
        setDescription(e.target.value);
    }

    const handleChangePrice = (e) => {
        setPrice(e.target.value)
    }

    return (
        <div className="container w-50 mx-auto mt-4">
            <h3>Procedure</h3>
            <hr/>
            <form onSubmit={location.state != null ? edit : create}>
                <h2 className="text-danger">{message}</h2>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Name</label>
                    <div className="col-sm-7">
                        <input type="text" placeholder={name != "" ? name: "Name"} className="form-control"
                               value={name} onChange={handleChangeName}
                               required/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Description</label>
                    <div className="col-sm-7">
                        <textarea type="text" placeholder={description != "" ? description: "Description"} className="form-control"
                               value={description} onChange={handleChangeDescription}
                               required/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Price</label>
                    <div className="col-sm-7">
                        <input type="number" min="0" placeholder={price != 0 ? price: "Price"} className="form-control"
                               value={price} onChange={handleChangePrice}
                               required/>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary w-25 mt-3">Save</button>
            </form>
        </div>


    );
}

export default AddOrEditProcedure;