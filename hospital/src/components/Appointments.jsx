//it adds appointment slot for available doctor

import React,{ useState,useEffect  }  from 'react';
import { useNavigate,Link, useParams } from "react-router-dom";
import { createAppointments } from '../services/AppointmentService';
import { getDoctor } from '../services/DoctorService';



const Appointments = () => {

const [availableDate,setAvailableDate] = useState("");
const [doctorName,setDoctorName]=useState("");
const [specialist,setSpecialist] = useState("");
const [experience,setExperience] = useState("");

const navigator=useNavigate();

const {docId}=useParams();
    useEffect(()=>{
        const fetchData=async()=>{
        try {
        const response=await getDoctor(docId);
        
        const booked=response.data;
        console.log(booked);
        setDoctorName(booked.doctorName);
        setSpecialist(booked.specialist);
        setExperience(booked.experience);
        }catch(error){
        console.error(error);
        }
        }
        fetchData();
        },[docId])


//it add new appointment using Post API
const addApp=async(e)=>{
 e.preventDefault();
const appointment={availableDate,doctorName,specialist,experience}

  await createAppointments(appointment).then((response)=>{
        console.log(response.data);
      alert("Appointment added successfully")
    
      setAvailableDate("");
      setDoctorName("");
      setSpecialist("");
      setExperience("");
        }) 
        navigator("/front")
}


  return (

       <div className="offset-lg-3">
<form className="container">
    <div className='card'>
 <div className="card-header ">
    <h2> Add Appointment Slots</h2>
</div>
            <div className="card-body">

                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label>Available Date  <span className="errmsg">*</span></label>
                            <input value={availableDate} type='date' onChange={e => setAvailableDate(e.target.value)} className="form-control"></input>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label>Doctor Name <span className="errmsg">*</span></label>
                            <input value={doctorName}  onChange={e => setDoctorName(e.target.value)} className="form-control"></input>
                        </div>
                        
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label>Speciality <span className="errmsg">*</span></label>
                            <input value={specialist} onChange={e => setSpecialist(e.target.value)} className="form-control"></input>
                        </div>
                        
                    </div>

                    
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label>Experience<span className="errmsg">*</span></label>
                            <input value={experience} placeholder='xxyrs' onChange={e => setExperience(e.target.value)} className="form-control"></input>
                        </div>

                    </div>
                   
            
            <div className="card-footer"> 
              <button type="submit" className="btn btn-success" onClick={ addApp}>Save</button>
              <div class="vr"></div> 
              <Link to={'/docList'} className="btn btn-warning float-right">Back</Link> 
             </div>
           </div>
           </div>
           </div>
           </form>
      </div>

    
  )
}

export default Appointments;
