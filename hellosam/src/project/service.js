import React from 'react';
import './service.css';
function Apps()
{
    return(
        <>
        <div class ='b1'><h1>Periodic Services</h1></div>
        <div class='b2'><p><h3>Your last service was on 11/10/2022 @ 10000Km</h3></p></div>
        <div class='b3'><p><h3>To update last service date</h3></p></div>
        <div class='b4'><p><h3>To schedule your next service</h3></p></div>
        <button class="buttonb1"><span>Update</span></button>
        <button class="buttonb2"><span>Schedule</span></button>
        <div class="dropdown">
  <button class="dropbtn">Select car</button>
  <div class="dropdown-content">
    <a>Hyundai</a>
    <a>Maruti Swift</a>
    <a>Mahindra</a>
    <a>Honda City</a>
  </div>
  </div>
        </>
    );
}
export default Apps;