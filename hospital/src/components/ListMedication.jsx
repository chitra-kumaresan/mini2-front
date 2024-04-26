//it list medication for doctors reference

import React from 'react'
import { useNavigate,Link } from 'react-router-dom';
import{ useState,useEffect } from 'react';
import { getAllMedications,deleteMedication } from '../services/MedicationService';

const ListMedication = () => {
  const navigator=useNavigate();
  const [medications,setMedications] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(()=>{
      const fetchData=async()=>{
      try {
      const response=await getAllMedications();
      
      const medication=response.data;
      console.log(medication);
      setMedications(medication);
      }catch(error){
      console.error(error);
      }
      }
      fetchData();
      },[])

    
       
        const updateMed=(medId)=>{
          navigator(`/update-med/${medId}`);

        }
        const deleteMed=async(medId)=>{
          try{
          await deleteMedication(medId);
          alert("Deleted on refresh");
          getAllMedications();
          }catch(error){
            console.error(error);
          }
        }
  return (
    <div>
      <div className='container'>
  <h1 className='text-center'>Medications List</h1>
  <input
              onChange={(e) => setSearch(e.target.value)}
              placeholder='By DoctorName/Pat.Email'
            ></input>
            <br />
            <br />
            <Link to={'/front'} className="btn btn-danger float-left">Back</Link> 
<table className='table table-striped table-bordered'>
<thead>
<tr>
<th>Id</th>
<th>Doctor Name</th>
<th>Patient Name</th>
<th>Appointment Date</th>
<th>Email</th>
<th>Medications</th>
<th>Morning</th>
<th>Afternoon</th>
<th>Night</th>

<th>Actions</th>
</tr>

</thead> 
<tbody>{
  medications.filter((medication) => {
    return search.toLowerCase() === ''
      ? medication
      : medication.doctorName.toLowerCase().includes(search) ||  medication.email.toLowerCase().includes(search)
  })
  .map((medication, index) => (
<tr key={index}>
  <td>{medication.medId}</td>
  <td>{medication.doctorName}</td>
<td>{medication.patientName}</td>
<td>{medication.appointmentDate}</td>
<td>{medication.email}</td>
<td>{medication.medicationName}</td>
<td>{medication.morning}</td>
<td>{medication.afternoon}</td>
<td>{medication.night}</td>
<td>

<button className="btn btn-info" onClick={()=>updateMed(medication.medId)} >Update</button>
<div class="vr"></div>
<div class="vr"></div>
<button className="btn btn-danger" onClick={()=>deleteMed(medication.medId)} >Delete</button>

</td>
</tr>
  ))}
  </tbody>          
</table>

</div>
    </div>
  )
}

export default ListMedication

