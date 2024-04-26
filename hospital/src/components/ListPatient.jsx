//it displays patient details for reference

import { useNavigate,Link} from 'react-router-dom';
import React,{ useState,useEffect } from 'react'
import { getAllPatients } from '../services/PatientService';

const ListPatient = () => {
    const navigator=useNavigate();
    const [patients,setPatients] = useState([]);
    useEffect(()=>{
        const fetchData=async()=>{
        try {
        const response=await getAllPatients();
        
        const patient=response.data;
        console.log(patient);
        setPatients(patient);
        }catch(error){
        console.error(error);
        }
        }
        fetchData();
        },[])

        
          
  return (
    <div>
        <div className='container'>
<h1 className='text-center'>Patients List</h1>
<Link to={'/front'} className="btn btn-primary float-right">Back</Link> 

<table className='table table-striped table-bordered'>
<thead>
<tr>
<th>Id</th>
<th>Patient Name</th>
<th>Email</th>
<th>Problem</th>
<th>Patient Contact </th>
<th>Age</th>
</tr>

</thead>
<tbody>{
  patients.map(patient=> 
<tr key={patient.patId}>
  <td>{patient.patId}</td>
<td>{patient.patientName}</td>
<td>{patient.email}</td>
<td>{patient.problem}</td>
<td>{patient.contactNo}</td>
<td>{patient.age}</td>

</tr>
)}            
</tbody>
</table>

</div>
      
    </div>
  ) 
}

export default ListPatient;
