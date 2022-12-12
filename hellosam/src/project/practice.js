import React from 'react';
import './practice.css';
function App()
{
    return(
        <>
        <form>
            <div class='submain'></div>
                <div class='r1'><h1>Registration</h1></div>
                <div class='input'>
                    <div class='input-container'>
                        <input class="input-field" type="text" placeholder="Name" id="name" required></input> </div></div>
                <div class='inputs'>
                    <div class='inputs-container'>
                        <input class="inputs-field" type="text" placeholder="Mobile No" id="name" required></input> </div></div>
                <div class='input1'>
                    <div class='input1-container'>
                        <input class="input1-field" type="text" placeholder="Email Address" id="name" required></input> </div></div>
                <div class='r2'><h1>Vehicle Details</h1></div>
                <div class='input2'>
                    <div class='input2-container'>
                        <input class="input2-field" type="text" placeholder="Brand" id="name" required></input> </div></div>
                <div class='input3'>
                    <div class='input3-container'>
                        <input class="input3-field" type="text" placeholder="Model" id="name" required></input> </div></div>
                <div class='input4'>
                    <div class='input4-container'>
                        <input class="input4-field" type="text" placeholder="Register No" id="name" required></input> </div></div><br></br><br></br>
                <div><input class="b" type='submit' value="Submit"></input></div>
        </form>
    </>
    );
}
export default App;
