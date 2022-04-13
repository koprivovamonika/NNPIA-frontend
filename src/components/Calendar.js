import {useEffect, useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import PublicService from "../service/PublicService";
import './style.css'

function CalendarComponent(props) {
    const date3 = new Date();
    date3.setDate(date3.getDate() + 1);
    const newDate = new Date();
    newDate.setMonth(newDate.getMonth()+4);
    const [date, setDate] = useState(date3);

    const[timeslots, setTimeslots] = useState([]);
    const [tripType, setTripType] = useState("");

    useEffect(() => {
        getTimeSlots(date);
    },[]);

    const getTimeSlots = (date) => {
        setDate(date);
        props.setDateForReservation(date);
        props.setTimeSlot(null);
        setTripType("");
        PublicService.getTimeSlots(date).then(result => {
            if(result.status === 200){
                setTimeslots(result.data);
            }
        })
        console.log(timeslots);
    };

    const clickHandler = (row) => {
        if(row.slotFree){
            props.setTimeSlot(row);
            setTripType(row.startTime);
        }
    };

    return (
        <div className='row w-100'>
            <h3 className='text-center'>Select date</h3>
            <div className='calendar-container col-5'>
                <Calendar onChange={getTimeSlots} value={date} minDate={date3} maxDate={newDate} minDetail={"month"} tileDisabled={({date}) => date.getDay() === 0 || date.getDay() === 6}/>
            </div>
            <div className='col-7'>
                <div className="radio-btn-container row">
                    {timeslots.length
                        ? timeslots.map(row => (

                            <div
                                style={
                                    {backgroundColor:!row.slotFree ? "grey" : tripType == row.startTime ? "#0dcaf0" : "#0d6efd"}
                                }
                                key={row.startTime}
                                className="radio-btn card text-white col-5 m-2 p-2"
                                onClick={() => {clickHandler(row)}}
                            >
                                {row.startTime} : {row.endTime}

                            </div>

                        )

                        )
                        : <h3>We currently do not offer any cosmetic treatments.</h3>
                    }

                </div>
            </div>
        </div>
    );
}

export default CalendarComponent;