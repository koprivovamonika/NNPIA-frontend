import axios from 'axios';
import {format} from 'date-fns';
import AuthService from './AuthService';

const USER_API_BASE_URL = 'http://localhost:8080/api/';

class ReservationService {

    getReservation(date, status, pageNo, pageSize, sortBy){
        return axios.get(USER_API_BASE_URL+'res?salonId=1&date='+format(date, "yyyy-MM-dd")+'&status='+status+'&size=' + pageSize+'&page=' + pageNo+'&sort=' + sortBy, AuthService.getAuthHeader());
    }

    setReservationAsDone(reservationId){
        return axios.put(USER_API_BASE_URL+'asDone?resId=' + reservationId, null, AuthService.getAuthHeader());
    }

    confirmReservation(id){
        return axios.put(USER_API_BASE_URL+'confirm?resId='+id,null, AuthService.getAuthHeader());
    }

    cancelReservation(reservationId, description){
        return axios.delete(USER_API_BASE_URL+'delete?id='+reservationId+'&&description='+description, AuthService.getAuthHeader());
    }


}

export default new ReservationService();