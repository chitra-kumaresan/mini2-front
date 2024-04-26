//front page 


import React from 'react'
import { isLoggedInUser,isAdminUser, isDoctorUser } from '../services/AuthService';
const FrontPageComponent = () => {

    const isAuth=isLoggedInUser();
    const isDoctor=isDoctorUser();

    const isAdmin=isAdminUser();
  return (
    <div class="container-fluid">
    <div class="row flex-nowrap">
        <div class="col-auto col-md-9 col-xl-2 px-sm-2 px-0 bg-dark">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                
<img src='data:image/png;base64,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' />
                  

                <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline">Mithran's Hospital</span>
                   
                </a>
                <br />
                <br />
                
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                <li class="nav-item">
                    {isAuth && isAdmin && (
                        <a data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-1 bi-speedometer2"></i> <button class="ms-1 d-none d-sm-inline">Admin Dashboard</button> </a>)}
                       
                    </li>
                    <li class="nav-item">
                    {isAuth && isDoctor && (
                        <a data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-1 bi-speedometer2"></i> <button class="ms-1 d-none d-sm-inline">Doctors Dashboard</button> </a>)}
                       
                    </li>
                    <li class="nav-item">
                    {isAuth && !isAdmin && !isDoctor && (
                        <a data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-1 bi-speedometer2"></i> <button class="ms-1 d-none d-sm-inline">Patient's Dashboard</button> </a>)}
                       
                    </li>
                    <br />
                    <li>
                        {isAuth && !isAdmin && !isDoctor &&(
                        <a href="http://localhost:3000/pat-doc" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline">Doctors List</span> </a>)}
                            
                    </li>
                    <li>
                    {isAuth && !isAdmin && !isDoctor &&(
                        <a href="http://localhost:3000/appList" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                            <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline">Appointment Slot-Booking</span></a>)}
                       
                    </li>

                    <li>
                    {isAuth && !isAdmin && !isDoctor && ( 
                        <a  href="http://localhost:3000/book-his"   data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline"> View your Booking</span> </a>)}
                            
                    </li>
                   
                    
                    <li>
                    {isAuth && isAdmin && (
                        <a href="http://localhost:3000/docList" class="nav-link px-0 align-middle">
                            
            <i className="bi-house fs-4 bi-house"></i><span class="ms-1 d-none d-sm-inline">Doctors</span> </a>)}
                    </li>
                   
                    <li>
                    {isAuth && isAdmin && ( 
                        <a href="http://localhost:3000/patientList" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline">Patients</span> </a>)}
                            
                    </li>
                   
                    <li>
                    {isAuth && isDoctor && (
                        <a href="http://localhost:3000/bookList" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline">Bookings</span> </a>)}
                            
                    </li>
                    <li>
                    {isAuth && isDoctor && (
                        <a href="http://localhost:3000/medList" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline">Medication</span> </a>)}
                            
                    </li>
                   
                    <li>
                    {isAuth && !isAdmin && !isDoctor &&(
                        <a href="http://localhost:3000/viewMed" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline">View your Medication</span> </a>)}
                            
                    </li>

                
                </ul>
                <hr />


            </div>
        </div>
        <div class="col py-3">
        <div class="p-3 mb-2 bg-warning text-white"><h2>Welcome To Mithran's Hospital</h2></div>
        {isAuth && isDoctor && (
           <h4 >Welcome Doctors<br /> Do your service efficiently.Thank you! </h4>)}
           {isAuth && !isAdmin && !isDoctor && (
           <h6>Welcome to our Hospital Management .Utilize our service efficiently.Thank you!<br />
            Share any symptoms you have.<br />
            Give information about all your medications.<br />
            Tell the doctor about your habits.<br />
            Share other concerns in your life with your doctor. </h6>)}
            <img src='https://thumbs.dreamstime.com/b/group-hospital-doctors-over-health-care-clinic-background-89857953.jpg' class="rounded mx-auto d-block" alt="..." />
           
            <br />
            
           
        </div>
       
    </div>
</div>
  )
}

export default FrontPageComponent
