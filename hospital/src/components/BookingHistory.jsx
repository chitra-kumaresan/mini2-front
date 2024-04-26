//to view appointment details by giving appointment id

import { useNavigate,Link, useParams} from 'react-router-dom';
import React,{ useState,useEffect } from 'react'
import { getBooking, getBookingByEmail } from '../services/BookingService';

const BookingHistory = () => {
    const navigator=useNavigate();
    const [bookId,setBookId] = useState();
    const [doctorName,setDoctorName] = useState("");
    const [patientName,setPatientName] = useState("");
    const [contactNo,setContactNo] = useState();
    const [age,setAge] = useState();
    const [problem,setProblem] = useState("");
    const [appointmentDate,setAppointmentDate] = useState("");
  const [email,setEmail] = useState("");

   
           
const callData=async()=>{
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
        }}catch(error){
        console.error(error);
        }
    }

  return (
    
      <div className='container'>
<h3>Bookings: </h3>

<div className="form-group">

<label><h3>Enter your Doctor Appointment Id :</h3> <span className="errmsg"></span></label>
<input placeholder='Enter your Booking Id'required value={bookId} onChange={(e)=>setBookId(e.target.value)}  className="form-control"></input>
<button type="submit" className="btn btn-success btn-md float-center" onClick={callData} >Submit</button> 
                     
<Link to={'/front'} className="btn btn-danger">Back</Link> 
</div>
<div className="card-body">

<div className="row">

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
    </div> 
  ) 
}

export default BookingHistory;