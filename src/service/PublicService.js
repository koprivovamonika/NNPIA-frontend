import axios from 'axios';
import {format} from 'date-fns';

const USER_API_BASE_URL = process.env.REACT_APP_TARGET_DOMAIN+'/public/';

class PublicService {

    getProcedures(){
        return axios.get(USER_API_BASE_URL+'procedures');
    }

    getTimeSlots(date){
        return axios.get(USER_API_BASE_URL+'reservation?date='+format(date, "yyyy-MM-dd")+'&id=1');
    }

    createReservation(reservation){
        return axios.post(USER_API_BASE_URL+'reservation', reservation)
    }

}

export default new PublicService();