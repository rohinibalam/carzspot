import React from 'react';
import ReactDOM from 'react-dom/client';
class Hello extends React.Component
{
    render()
    {
        return(
            <h1>I am Rohini</h1>
        )
    }
}
class ClassComponent extends React.Component{
    render()
    {
        return(
            <>
            <ul>
                <li>Rishi</li>
                <li>Rithis</li>
                <li>Roshini</li>
                </ul>
                <Hello/>
                </>
        )
    }
}
export default ClassComponent