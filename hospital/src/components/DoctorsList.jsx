//to view doctors list for patients

import { Link} from 'react-router-dom';
import React,{ useState,useEffect } from 'react'
import {getAllDoctors} from '../services/DoctorService';

const DoctorsList = () => {
    const [doctors,setDoctors] = useState([]);
    useEffect(()=>{
        const fetchData=async()=>{
        try {
        const response=await getAllDoctors();
        
        const doctor=response.data;
        console.log(doctor);
        setDoctors(doctor);
        }catch(error){
        console.error(error);
        }
        }
        fetchData();
        },[])


  return (
    <div>
        <div className='container'>
<h3>Find your Doctors here..</h3>
<br />


<table className='table table-striped table-bordered'>
<thead>
<tr>
<th>Id</th>
<th>Doctor Name</th>
<th>Specialist</th>
<th>Experience</th>
<th>Age</th>
<th>Email</th>
<th>Doctor Contact</th>
</tr>

</thead>
<tbody>{
  doctors.map(doctor=> 
<tr key={doctor.docId}>
  <td>{doctor.docId}</td>
<td>{doctor.doctorName}</td>
<td>{doctor.specialist}</td>
<td>{doctor.experience}</td>
<td>{doctor.age}</td>
<td>{doctor.email}</td>
<td>{doctor.contactNo}</td>

</tr>
)}            
</tbody>
</table>
<Link to={'/front'} className="btn btn-primary float-right">Back</Link> 
</div>
      
    </div>
  ) 
}

export default DoctorsList;
