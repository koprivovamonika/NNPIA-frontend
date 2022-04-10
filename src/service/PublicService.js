import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080/public/';

class PublicService {

    getProcedures(){
        return axios.get(USER_API_BASE_URL+'procedures');
    }


}

export default new PublicService();