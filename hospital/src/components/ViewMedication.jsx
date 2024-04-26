//view medication by giving patients registered email


import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { getMedicationByEmail } from '../services/MedicationService';

   

const ViewMedication = () => {
    const [email,setEmail]=useState("");
    const [appointmentDate,setAppointmentDate]=useState("");
    const [medicationName,setMedicationName]=useState("");
    const [morning,setMorning]=useState("");
    const [afternoon,setAfternoon]=useState("");
    const [night,setNight]=useState("");
    const [doctorName,setDoctorName] =useState("");

    //By GET API by Email,  get Passenger Details and by join columns ,using Passenger email get the Booking Details by GET API (by email)
    const callData=async()=>{
        try {
           
            if(email){
            await getMedicationByEmail(email).then((response)=>{
           
            const fetch=response.data;
            setAppointmentDate(fetch.appointmentDate);
            setMedicationName(fetch.medicationName);
            setMorning(fetch.morning);
            setAfternoon(fetch.afternoon);
            setNight(fetch.night);
            setDoctorName(fetch.doctorName);
        })
            }}

            catch(error){
        console.error(error)};
 }

  return (
    <div className='container'>

<nav class=" bg-warning">
<p><h4>View your Medications</h4></p>
</nav>


                        <div className="form-group">

                            <label><h3>Enter Patient's Registered Email:</h3> <span className="errmsg"></span></label>
                            <input placeholder='Enter your Email'required value={email} onChange={(e)=>setEmail(e.target.value)}  className="form-control"></input>

                        </div>
                    
                    

                     <button type="submit" className="btn btn-success btn-md float-center" onClick={callData} >Submit</button> 
                     
                     <Link to={'/front'} className="btn btn-danger">Back</Link> 

                    
                    
                       <div className="col-lg-3">
                
                            <label ><b>Appointment Date</b><span className="errmsg"></span></label> 
                            <input value={appointmentDate} onChange={e => setAppointmentDate(e.target.value)} className="form-control"></input>
                        </div>




                    <div className="col-lg-3">
                       
                            <label><b>Medication Name</b> <span className="errmsg"></span></label>
                            <input value={medicationName} onChange={e => setMedicationName(e.target.value)} className="form-control"></input>
                    </div>
                   

                    <div className="col-lg-3">
                        
                            <label><b>Morning</b> <span className="errmsg"></span></label>
                            <input value={morning} onChange={e => setMorning(e.target.value)} className="form-control"></input>
                    
                    </div>

                    <div className="col-lg-3">
                       
                            <label><b>Afternoon</b><span className="errmsg"></span></label>
                            <input value={afternoon} onChange={e => setAfternoon(e.target.value)} className="form-control"></input>
                    </div>



                    <div className="col-lg-3">
                        
                            <label><b>Night</b><span className="errmsg"></span></label>
                            <input value={night} onChange={e => setNight(e.target.value)} className="form-control"></input>
                    </div>
                    <div className="col-lg-3">
                        
                        <label><b>Doctor Name</b><span className="errmsg"></span></label>
                        <input value={doctorName} onChange={e => setDoctorName(e.target.value)} className="form-control"></input>
                </div>
                

</div>
  )
}

export default ViewMedication;
