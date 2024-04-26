//it display available doctors list & let patient to book appointment


import React,{ useState,useEffect }  from 'react'
import { useNavigate,Link } from 'react-router-dom';
import { getAllAppointments } from '../services/AppointmentService';


const ListAppointments = () => {
  const navigator=useNavigate();
  const [appointments,setAppointments] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(()=>{
      const fetchData=async()=>{
      try {
      const response=await getAllAppointments();
      
      const appointment=response.data;
      console.log(appointment);
      setAppointments(appointment);
      }catch(error){
      console.error(error);
      }
      }
      fetchData();
      },[])
      
    
const bookApp=(appId)=>{
    navigator(`/booking/${appId}`)
   }
     
  return (
    <div>
      <div className='container'>

  <h3>Choose your Appointment Slot</h3>
  
          

            {/* onChange for search */}
            <input 
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Filter by Doctor/Speciality'></input>
            
            <br />
  <br />     
        
 
<table className='table table-striped table-bordered'>
<thead>
<tr>
<th>Id</th>
<th>Doctor Name</th>
<th>Specialist</th>
<th>Experience</th>
<th>Actions</th>
</tr> 

</thead> 
<tbody>{
  appointments.filter((appointment) => {
    return search.toLowerCase() === ''
    ? appointment
    : appointment.specialist.toLowerCase().includes(search) || appointment.doctorName.toLowerCase().includes(search)
})
.map((appointment, index) => ( 
<tr key={index}>
  <td>{appointment.appId}</td>
  <td>{appointment.doctorName}</td>
<td>{appointment.specialist}</td>
<td>{appointment.experience}</td>
<td>

<button className="btn btn-info" onClick={()=>bookApp(appointment.appId)} >Book Appointment</button>
</td>
</tr>
  ))}
</tbody>           
</table>
<Link to={'/front'} className="btn btn-primary float-right">Back</Link> 
</div>
    </div>
  )
}

export default ListAppointments;
