//booking by patient on selecting available appointment slot of specialist

import React,{ useState,useEffect }  from 'react';
import { useNavigate,Link, useParams } from "react-router-dom";
import { getAppointment } from '../services/AppointmentService';
import { createBookings } from '../services/BookingService';



const BookingComponent = () => {
    const {appId}=useParams();

const [doctorName,setDoctorName] = useState("");
const [patientName,setPatientName]=useState("");
const [contactNo,setContactNo] = useState();
const [age,setAge] = useState();
const [problem,setProblem] = useState("");
const [appointmentDate,setAppointmentDate] = useState("");
const [email,setEmail] = useState("");
const [error,setError] =useState(false);



const navigator=useNavigate();
//it update the field using getAPI using useParams()
useEffect(()=>{
    const fetchData=async()=>{


        try {
            await getAppointment(appId).then((response)=>{
                const fetch=response.data;
              setDoctorName(fetch.doctorName);
              setAppointmentDate(fetch.availableDate);
              })
            
        } catch (error) {
            console.error(error);
        }}

fetchData();
  },[appId])


//it add new appointment using Post API
const addBook=async(e)=>{
 e.preventDefault();
 try {
    if (doctorName === "") {
      setError(true);
    } else if (patientName === "") {
      setError(true);
    }else if (contactNo === "") {
        setError(true);
      }else if (age === "") {
        setError(true);
      } else if (problem === "") {
      setError(true);
    } else if (appointmentDate === "") {
      setError(true);
    } else if (email === "") {
        setError(true);
      }else {

 const patient={patientName,email,problem,contactNo,age}
const booking={doctorName,patient,appointmentDate}

  await createBookings(booking).then((response)=>{
        console.log(response.data);
        const fetch=response.data;

        console.log(fetch.bookId);
    
        
      alert("Booking added successfully")
    
        setDoctorName("");
        setPatientName("");
        setContactNo("");
        setAge("");
        setProblem("");
        setAppointmentDate("");
        setEmail("");
        navigator(`/view-book/${fetch.bookId}`);
        }) }}catch (error) {
            console.error(error);
          }
       
}

  return (

       <div className="offset-lg-3">
<form className="container">
    <div className='card'>
 <div className="card-header ">
    <h2> Booking</h2>

</div>
            <div className="card-body">

                <div className="row">
               
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label>Doctor Name  <span className="errmsg">*</span></label>
                            <input value={doctorName} onChange={e => setDoctorName(e.target.value)} className="form-control"></input>
                            {/* {!!error && (
                        <p className="text-danger">Doctor name field cannot be null</p>
                      )} */}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label>Patient Name <span className="errmsg">*</span></label>
                            <input value={patientName}  onChange={e => setPatientName(e.target.value)} className="form-control"></input>
                            {!!error && (
                        <p className="text-danger">Patient name field cannot be null</p>
                      )}
                        </div>
                        
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label>Patient Contact <span className="errmsg">*</span></label>
                            <input placeholder='987654321' value={contactNo} onChange={e => setContactNo(e.target.value)} className="form-control"></input>
                            {!!error && (
                        <p className="text-danger">Patient Contact field cannot be null</p>
                      )}
                        </div>
                        
                    </div>
                    
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label>Age<span className="errmsg">*</span></label>
                            <input value={age} placeholder='00' onChange={e => setAge(e.target.value)} className="form-control"></input>
                            {!!error && (
                        <p className="text-danger">Age field cannot be null</p>
                      )}
                        </div>

                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label>Problem<span className="errmsg">*</span></label>
                            <input value={problem} onChange={e => setProblem(e.target.value)} className="form-control"></input>
                            {!!error && (
                        <p className="text-danger">Problem field cannot be null</p>
                      )}
                        </div>

                    </div>
                   
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label>Appointment Date<span className="errmsg">*</span></label>
                             <input value={appointmentDate} type='date' onChange={e => setAppointmentDate(e.target.value)} className="form-control"></input>
                            {/* {!!error && (
                        <p className="text-danger">Appointment Date field cannot be null</p>
                      )} */}
                        </div>

                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label>Email<span className="errmsg">*</span></label>
                            <input value={email} onChange={e => setEmail(e.target.value)} className="form-control"></input>
                            {!!error && (
                        <p className="text-danger">Email field cannot be null</p>
                      )}
                        </div>

                    </div>
                    
                   
                   
            
            <div className="card-footer"> 
              <button type="submit" className="btn btn-success" onClick={ addBook}>Save</button>
              <div class="vr"></div> 
              <Link to={'/front'} className="btn btn-warning float-right">Back</Link> 
             </div>
           </div>
           </div>
           </div>
           </form>
      </div>

    
  )
}

export default BookingComponent;
