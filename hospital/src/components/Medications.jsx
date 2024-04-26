//to add medication by doctor


import React,{ useState,useEffect }  from 'react';
import { useNavigate, useParams } from "react-router-dom";
import {createMedications, getMedication, updateMedication } from '../services/MedicationService';
import { getPatient } from '../services/PatientService';
import { getBookingByPatientId } from '../services/BookingService';



const Medications = () => {

const [patientName,setPatientName] = useState("");
const [appointmentDate,setAppointmentDate]=useState("");
const [email,setEmail] = useState("");
const [medicationName,setMedicationName] = useState("");
const [morning,setMorning] = useState();

const [afternoon,setAfternoon]=useState("");
const [night,setNight] = useState();
const [doctorName,setDoctorName] =useState("");

const {patId}=useParams();
const {medId}=useParams();
const navigator=useNavigate();

//it update the field using getAPI using useParams()
useEffect(()=>{
const fetchData=async()=>{
    try { 
        if(patId){
        await getPatient(patId).then((response)=>{
            const fetch=response.data;
           setPatientName(fetch.patientName);
            setEmail(fetch.email);})
         await getBookingByPatientId(patId).then((response)=>{
            const fetch1=response.data;
           setAppointmentDate(fetch1.appointmentDate);
           setDoctorName(fetch1.doctorName);
    })}else if(medId) {
        await getMedication(medId).then((response)=>{
            const fetch2=response.data;
            setPatientName(fetch2.patientName);
            setAppointmentDate(fetch2.appointmentDate);
            setEmail(fetch2.email);
            setMedicationName(fetch2.medicationName);
            setMorning(fetch2.morning);
            setAfternoon(fetch2.afternoon);
            setNight(fetch2.night);
            setDoctorName(fetch2.doctorName);
        })
        
    } } catch (error) {
        console.error(error);
        
    }}

fetchData();
},[patId,medId])

//it add new employee using Post API
const addMedication=async(e)=>{
 e.preventDefault();
const medication={patientName,appointmentDate,email,medicationName,morning,afternoon,night,doctorName}
console.log(medication);
 if(patId){
  await createMedications(medication).then((response)=>{
        console.log(response.data);
      alert("Medication added successfully")
      
        }) }else if(medId){
            await updateMedication(medId,medication).then((response)=>{
                console.log(response.data);
              alert("Medication updated successfully")
            })

        }
        setPatientName("");
      setAppointmentDate("");
      setEmail("");
      setMedicationName("");
      setMorning("");
      setAfternoon("");
      setNight("");
      setDoctorName("");
        navigator("/medList")
}



  return (
    <div>
       <div className="offset-lg-3">
<form className="container">
    <div className='card'>
<h2>Add Medication</h2>
            <div className="card-body">

                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label>Patient Name <span className="errmsg">*</span></label>
                            <input value={patientName} onChange={e => setPatientName(e.target.value)} className="form-control"></input>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label>Appointment Date <span className="errmsg">*</span></label>
                            <input value={appointmentDate} onChange={e => setAppointmentDate(e.target.value)} className="form-control"></input>
                        </div>
                        
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label>Email <span className="errmsg">*</span></label>
                            <input value={email} onChange={e => setEmail(e.target.value)} className="form-control"></input>
                        </div>
                        
                    </div>
                    
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label>Medications <span className="errmsg">*</span></label>
                            <input value={medicationName} onChange={e => setMedicationName(e.target.value)} className="form-control"></input>
                        </div>

                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label> Morning <span className="errmsg">*</span></label>
                            <input value={morning}  onChange={e => setMorning(e.target.value)} className="form-control"></input>
                        </div>
                        
                    </div>
            
            <div className="col-lg-6">
                        <div className="form-group">
                            <label>Afternoon <span className="errmsg"></span></label>
                            <input   value={afternoon} onChange={e => setAfternoon(e.target.value)} className="form-control"></input>
                        </div>
                    </div>
                    
            <div className="col-lg-6">
                        <div className="form-group">
                            <label>Night <span className="errmsg">*</span></label>
                            <input value={night} onChange={e => setNight(e.target.value)} className="form-control"></input>
                        </div>
           </div>
           <div className="col-lg-6">
                        <div className="form-group">
                            <label>Doctor Name <span className="errmsg">*</span></label>
                            <input value={doctorName} onChange={e => setDoctorName(e.target.value)} className="form-control"></input>
                        </div>
           </div>
            
            <div className="card-footer"> 
              <button type="submit" className="btn btn-primary" onClick={ addMedication}>Save</button> 
              <div class="vr"></div>
              <button type="submit" className="btn btn-danger" onClick={()=>navigator("/front")}>Back</button> 
              </div> 
             
           </div>
           </div>
           </div>
           </form>
           </div>
      
    </div>
  )
}

export default Medications
