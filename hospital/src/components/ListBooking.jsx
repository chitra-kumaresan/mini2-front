//it diplay booking list for doctors reference

import { useNavigate,Link} from 'react-router-dom';
import React,{ useState,useEffect } from 'react'
import { deleteBooking, getAllBookings } from '../services/BookingService';

const ListBooking = () => {
    const navigator=useNavigate();
    const [bookings,setBookings] = useState([]);
    const [search,setSearch] = useState('');
    useEffect(()=>{
        const fetchData=async()=>{
        try {
        const response=await getAllBookings();
        
        const booking=response.data;
        console.log(booking);
        setBookings(booking);
        }catch(error){
        console.error(error);
        }
        }
        fetchData();
        },[])

        
          const deleteBook=async(bookId)=>{
            try{
            await deleteBooking(bookId);
            alert("deleted by refresh");
          
            getAllBookings();
            }catch(error){
              console.error(error);
            }
          }
          const add=async(patId)=>{
            navigator(`/add-med/${patId}`)
         }
        

  return (
    <div>
        <div className='container'>
<h1 className='text-center'>Booking List</h1>
<Link to={'/front'} className="btn btn-primary float-right">Back</Link> 
<input
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search by Doctor Name'
            ></input>
<br />
<br />

<table className='table table-striped table-bordered'>
<thead>
<tr>
<th>Id</th>
<th>Doctor Name</th>
<th>Patient Name</th>
<th>Contact No.</th>
<th>Age</th>
<th>Problem</th>
<th>Appointment Date</th>
<th>Email</th>

<th>Actions</th>
<th>Add Medication</th>
</tr>

</thead> 
<tbody>{
  bookings.filter(( booking) => {
    return search.toLowerCase() === ''
      ?  booking
      :  booking.doctorName.toLowerCase().includes(search);
  })
  .map(( booking, index) => (
<tr key={index}>
  <td>{booking.bookId}</td>
<td>{booking.doctorName}</td>
<td>{booking.patient.patientName}</td>
<td>{booking.patient.contactNo}</td>
<td>{booking.patient.age}</td>
<td>{booking.patient.problem}</td>
<td>{booking.appointmentDate}</td>
<td>{booking.patient.email}</td>
<td>

<button className="btn btn-danger" onClick={()=>deleteBook(booking.bookId)} >Cancel Appointment</button>

</td>
<td>

<button className="btn btn-success" onClick={()=>add(booking.patient.patId)}>Add</button> 
</td>
</tr>
 ))}
 </tbody>           
</table>

</div>
      
    </div>
  ) 
}

export default ListBooking;
