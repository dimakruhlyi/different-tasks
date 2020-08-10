import React from 'react';
import Calendar from 'react-calendar';
 
const monthHandler = (val) => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const classes = [];
   if(val >= 0 && val <= 2){
        classes.push('grey')
   }else{
        if(val >= 3 && val <= 6){
            classes.push('blue')
        }else{
            if(val >= 7 && val <= 10){
                classes.push('green') 
            }
            else{
                classes.push('red') 
            }
        }
   }
    return arr.map(item => {
        const date =  new Date(2020, item, 1);
        return (
            <div className ="calendar" key ={item}>
                <Calendar
                value={date}
                className = {classes.join(' ')}
                />
            </div>
        )
   })
      
}

export const Month  = (props) => {
    return (
        <>
            <h1 className = "center">Month page</h1>
            <div className ="cont-data">
                {monthHandler(props.usersCnt)}
            </div>
        </>
    );
  
}