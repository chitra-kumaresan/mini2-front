//to add doctor by admin

import React, { useState,useEffect } from 'react'
import { getDoctor,createDoctors,updateDoctor } from '../services/DoctorService';
import { useNavigate, useParams } from "react-router-dom";

const Doctor = () => {
    const [doctorName,setDoctorName] = useState("");
    const [specialist,setSpecialist]=useState("");
    const [experience,setExperience] = useState("");
    const [age,setAge] = useState();

    const [email,setEmail]=useState("");
    const [contactNo,setContactNo] = useState();
    const [error, setError] = useState(false);

  const {docId}=useParams();
  const navigator=useNavigate();

//it update the field using getAPI using useParams()
  useEffect(()=>{
    const fetchData=async()=>{
        try {
            await getDoctor(docId).then((response)=>{
                const fetch=response.data;
               setDoctorName(fetch.doctorName);
               setSpecialist(fetch.specialist);
               setExperience(fetch.experience);
               setAge(fetch.age);
               setEmail(fetch.email);
               setContactNo(fetch.contactNo);
    
            })
            
        } catch (error) {
            console.error(error);
            
        }
       
    }

fetchData();
  },[docId])

  //it add new employee using Post API
  const addOrUpdateDoctor=async(e)=>{
     e.preventDefault(); 
     try {
        if (doctorName === "") {
          setError(true);
        } else if (specialist === "") {
          setError(true);
        }else if (experience === "") {
            setError(true);
          }else if (age === "") {
            setError(true);
          } else if (email === "") {
          setError(true);
        } else if (contactNo === "") {
          setError(true);
        } else {
    const doctor={doctorName,specialist,experience,age,email,contactNo}
    console.log(doctor);
    if(docId){
    await updateDoctor(docId,doctor);
    alert("updated sucessfully");
    navigator("/docList")

    }else{
      await createDoctors(doctor).then((response)=>{
            console.log(response.data);
          alert("Doctor added successfully")
          setDoctorName("");
          setSpecialist("");
          setExperience("");
          setAge("");
          setEmail("");
          setContactNo("");
     
          navigator("/docList")
     
            }) }}}catch (error) {
      console.error(error);
    }
           
            
    }
    const pageTitle = () => {
        return docId ? <h2 className='text-center'> Update Doctor </h2> : <h2  className='text-center'>Add Doctor</h2>
        }
  return (
    <div>
         <div className="offset-lg-3">
<form className="container">
    <div className='card'>
 <div className="card-header ">
     {pageTitle()}
</div>
            <div className="card-body">


                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label>Doctor Name <span className="errmsg">*</span></label>
                            <input value={ doctorName} onChange={e => setDoctorName(e.target.value)} className="form-control"></input>
                            {!!error && (
                        <p className="text-danger">Doctor name field cannot be null</p>
                      )}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label>Specialist <span className="errmsg">*</span></label>
                    
                            <select type="text" className='form-control' value={ specialist}  onChange={e => setSpecialist(e.target.value)}>
<option selected>Choose Dept.</option>                                
<option value="General">General</option>
<option value="Diabetology">Diabetology</option>
<option value="Gynaecology">Gynaecology</option>
<option value="surgeon">Surgeon</option>

</select>
{!!error && (
                        <p className="text-danger">specialist field cannot be null</p>
                      )}
                        </div>
                        
                    </div>
                    
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label>Experience <span className="errmsg">*</span></label>
                            <input value={experience} placeholder='00yrs' onChange={e => setExperience(e.target.value)} className="form-control"></input>
                            {!!error && (
                        <p className="text-danger">Experience field cannot be null</p>
                      )}
                        </div>

                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label> Age <span className="errmsg">*</span></label>
                            <input value={ age} placeholder='00' onChange={e => setAge(e.target.value)} className="form-control"></input>
                            {!!error && (
                        <p className="text-danger">Age field cannot be null</p>
                      )}
                        </div>
                        
                    </div>
            
            <div className="col-lg-6">
                        <div className="form-group">
                            <label>Email <span className="errmsg"></span></label>
                            <input   value={email} onChange={e => setEmail(e.target.value)} className="form-control"></input>
                            {!!error && (
                        <p className="text-danger">Email field cannot be null</p>
                      )}
                        </div>
                    </div>
                    
            <div className="col-lg-6">
                        <div className="form-group">
                            <label>Mobile Number <span className="errmsg">*</span></label>
                            <input placeholder="987654321" value={contactNo} onChange={e => setContactNo(e.target.value)} className="form-control"></input>
                            {!!error && (
                        <p className="text-danger">contact number field cannot be null</p>
                      )}
                        </div>
           </div>
            
            <div className="card-footer"> 
              <button type="submit" className="btn btn-primary" onClick={ addOrUpdateDoctor}>Save</button> 
              <div class="vr"></div>
              <button type="submit" className="btn btn-danger" onClick={()=>navigator("/docList")}>Back</button> 
              </div> 
             
           </div>
           </div>
           </div>
           </form>
           </div>
           </div> 
    
  )
}

export default Doctor;
