import axios from 'axios';
import {format} from 'date-fns';
import AuthService from './AuthService';

const USER_API_BASE_URL = 'http://localhost:8080/api/reservation';

class ReservationService {

    getReservation(date, status, pageNo, pageSize, sortBy){
        return axios.get(USER_API_BASE_URL+'?salonId=1&date='+format(date, "yyyy-MM-dd")+'&status='+status+'&size=' + pageSize+'&page=' + pageNo+'&sort=' + sortBy, AuthService.getAuthHeader());
    }

    setReservationAsDone(reservationId){
        return axios.put(USER_API_BASE_URL+'/asDone', {reservationId: reservationId}, AuthService.getAuthHeader());
    }

    confirmReservation(id){
        return axios.put(USER_API_BASE_URL+'/confirm', {reservationId:id}, AuthService.getAuthHeader());
    }

    cancelReservation(reservationId, description){
        return axios.put(USER_API_BASE_URL+'/cancel', {reservationId:reservationId, description:description}, AuthService.getAuthHeader());
    }


}

export default new ReservationService();