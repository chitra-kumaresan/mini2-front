//to view booking by bookid useparams


import { useNavigate,Link, useParams} from 'react-router-dom';
import React,{ useState,useEffect } from 'react'
import {getBooking } from '../services/BookingService';

const ViewBooking = () => {
    const {bookId}=useParams();
    const navigator=useNavigate();
    const [doctorName,setDoctorName] = useState("");
    const [patientName,setPatientName] = useState("");
    const [contactNo,setContactNo] = useState();
    const [age,setAge] = useState();
    const [problem,setProblem] = useState("");
    const [appointmentDate,setAppointmentDate] = useState("");
  const [email,setEmail] = useState("");

    useEffect(()=>{
        const fetchData=async()=>{
        try {
            if(bookId){

        const response=await getBooking(bookId);
        
        const fetch=response.data;
        console.log(fetch);

        setDoctorName(fetch.doctorName);
        setPatientName(fetch.patient.patientName);
        setContactNo(fetch.patient.contactNo);
        setAge(fetch.patient.age);
        setProblem(fetch.patient.problem);
        setAppointmentDate(fetch.appointmentDate);
        setEmail(fetch.patient.email);
        alert("Please note your Doctor Appointment Id");
}}catch(error){
        console.error(error);
        }
        }
        fetchData();
        },[bookId])

    const callData=async()=>{
       
        navigator("/front")
    }    
        

  return (
      <div className='container'>
<h3>Your Bookings: </h3>
<div className="card-body">

<div className="row">
<div className="col-lg-6">
        <div className="form-group">
            <label>Appointment Id <span className="errmsg">*</span></label>
            <input value={bookId} onChange={e => setBookIdd(e.target.value)} className="form-control"></input>
        </div>
    </div>

    <div className="col-lg-6">
        <div className="form-group">
            <label>Doctor Name  <span className="errmsg">*</span></label>
            <input value={doctorName} onChange={e => setDoctorName(e.target.value)} className="form-control"></input>
        </div>
    </div>
    <div className="col-lg-6">
        <div className="form-group">
            <label>Patient Name <span className="errmsg">*</span></label>
            <input value={patientName}  onChange={e => setPatientName(e.target.value)} className="form-control"></input>
        </div>
        
    </div>
    <div className="col-lg-6">
        <div className="form-group">
            <label>Patient Contact <span className="errmsg">*</span></label>
            <input placeholder='987654321' value={contactNo} onChange={e => setContactNo(e.target.value)} className="form-control"></input>
        </div>
        
    </div>
    
    <div className="col-lg-6">
        <div className="form-group">
            <label>Age<span className="errmsg">*</span></label>
            <input value={age} placeholder='00' onChange={e => setAge(e.target.value)} className="form-control"></input>
        </div>

    </div>
    <div className="col-lg-6">
        <div className="form-group">
            <label>Problem<span className="errmsg">*</span></label>
            <input value={problem} onChange={e => setProblem(e.target.value)} className="form-control"></input>
        </div>

    </div>
   
    <div className="col-lg-6">
        <div className="form-group">
            <label>Appointment Date<span className="errmsg">*</span></label>
            <input value={appointmentDate} onChange={e => setAppointmentDate(e.target.value)} className="form-control"></input>
        </div>

    </div>
    <div className="col-lg-6">
        <div className="form-group">
            <label>Email<span className="errmsg">*</span></label>
            <input value={email} onChange={e => setEmail(e.target.value)} className="form-control"></input>
        </div>

    </div>
    
</div>
</div>
<button type="submit" className="btn btn-warning" onClick={callData}>Back</button> 

</div> 
  ) 
}

export default ViewBooking;
