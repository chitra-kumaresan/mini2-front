//list of doctor for admin purpose to add,update doctors


import { useNavigate,Link} from 'react-router-dom';
import React,{ useState,useEffect } from 'react'
import {deleteDoctor, getAllDoctors} from '../services/DoctorService';

const ListDoctor = () => {
    const navigator=useNavigate();
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

        const addDoc=async()=>{
            navigator("/add-doc")
          }
         
          const updateDoc=(docId)=>{
            navigator(`/update-doc/${docId}`);
  
          }
          const deleteDoc=async(docId)=>{
            try{
            await deleteDoctor(docId);
          
            getAllDoctors();
            }catch(error){
              console.error(error);
            }
          }
          const addApp=(docId)=>{
            navigator(`/add-app/${docId}`);
  
          }

  return (
    <div>
        <div className='container'>
<h1 className='text-center'>Doctors List</h1>
<Link to={'/front'} className="btn btn-info float-right">Back</Link> 
<div class="vr"></div>
<button className="btn btn-success" onClick={addDoc}>Add Doctor</button>
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
<th>Actions</th>
<th>Add Appointment</th>
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
<td>

<button className="btn btn-info" onClick={()=>updateDoc(doctor.docId)} >Update</button>
<div class="vr"></div>
<div class="vr"></div>
<button className="btn btn-danger" onClick={()=>deleteDoc(doctor.docId)} >Delete</button>
</td>
<td>
<button className="btn btn-success" onClick={()=>addApp(doctor.docId)} >Add Appointment</button>

</td>
</tr>
)}            
</tbody>
</table>

</div>
      
    </div>
  ) 
}

export default ListDoctor
