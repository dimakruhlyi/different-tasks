import React from 'react';
import {NavLink} from 'react-router-dom';



export const User = (props) => {
    //const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const birthday = new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "long",
        day: "2-digit"
        }).format(new Date(props.dob));
 
    return(
        <>  
             <div className="col s12 m7 card-data">
                <div className="card horizontal">
                <div className="card-image">
                    <img src="https://i.ibb.co/2hZMrzm/user-Image.jpg" alt ={props.firstName}/>
                </div>
                {/* { props.updateData(birthday.split(' ')[1])} */}
                <div className="card-stacked">
                    <div className="card-content">
                        <h6>{props.firstName} {props.lastName}</h6>
                        <p><b>Date of birthday:</b>  {birthday}</p>
                    </div>
                    <div className="card-action">
                        <NavLink to="/months">View months</NavLink>
                    </div>
                </div>
                </div>
            </div>
        </>

     
    )
}