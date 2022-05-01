import axios from 'axios';
import AuthService from './AuthService';

const USER_API_BASE_URL = 'https://nnpia-backend.herokuapp.com/api/procedure';

class ProcedureService {

    createProcedure(procedure){
        return axios.post(USER_API_BASE_URL, procedure, AuthService.getAuthHeader());
    }

    updateProcedure(procedure){
        return axios.put(USER_API_BASE_URL, procedure, AuthService.getAuthHeader());
    }

    deleteProcedure(id){
        return axios.delete(USER_API_BASE_URL+'?id='+id, AuthService.getAuthHeader());
    }


}

export default new ProcedureService();