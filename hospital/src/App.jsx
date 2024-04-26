import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import FrontPageComponent from './components/FrontPageComponent'
import ListDoctor from './components/ListDoctor'
import Doctor from './components/Doctor'
import ListMedication from './components/ListMedication'
import Medications from './components/Medications';
import ViewMedication from './components/ViewMedication'
import Appointments from './components/Appointments'
import ListAppointments from './components/ListAppointments'
import BookingComponent from './components/BookingComponent'
import ListBooking from './components/ListBooking'
import ListPatient from './components/ListPatient'
import Register from './components/Register'
import LoginComponent from './components/LoginComponent'
import HeaderComponent from './components/HeaderComponent'
import WelcomePage from './components/WelcomePage'
import DoctorsList from './components/DoctorsList'
import ViewBooking from './components/ViewBooking'
import BookingHistory from './components/BookingHistory'


function App() {

  return (
    <>
    <BrowserRouter>
    <HeaderComponent />
    <Routes>
<Route path="/front" element={<FrontPageComponent />}></Route>
<Route path='/docList' element={<ListDoctor />}></Route>
<Route path='/add-doc' element={<Doctor />}></Route>
<Route path='/update-doc/:docId' element={<Doctor />}></Route>
<Route path='/medList' element={<ListMedication />}></Route>
<Route path='/add-med/:patId' element={<Medications />}></Route>
<Route path='/update-med/:medId' element={<Medications />}></Route>
<Route path='/viewMed' element={<ViewMedication />}></Route>
<Route path='/add-app/:docId' element={<Appointments />}></Route>
<Route path='/appList' element={<ListAppointments />}></Route>
<Route path='/booking/:appId' element={<BookingComponent />}></Route>
<Route path='/bookList' element={<ListBooking />}></Route>
<Route path='/patientList' element={<ListPatient/>}></Route>
<Route path='/reg' element={<Register/>}></Route>
<Route path='/login' element={<LoginComponent />}></Route>
 <Route path='/pat-doc' element={<DoctorsList />}></Route> 
<Route path='/' element={<WelcomePage />}></Route>
<Route path='/view-book/:bookId' element={<ViewBooking />}></Route>
<Route path='/book-his' element={<BookingHistory />}></Route>











    </Routes>
    </BrowserRouter>
      
        
    </>
  )
}

export default App
