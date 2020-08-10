import React from 'react';
import {User} from '../components/User';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://yalantis-react-school-api.yalantis.com/api/task0/users'
})

export default class  UsersPage extends React.Component{
    
      state = {
       usersData: [],
       monthsArr: []
      }

      // updateData = (value) => {
      //   const monthsArr = [];
      //   monthsArr.push(value)
      //   this.setState({monthsArr});
      // }

      componentDidMount(){
        api.get('/').then(res => {
          this.setState({usersData: res.data})
        })
      }
      
      usersHandler = (arr) => {
        return arr.map(item => {
          return <User firstName = {item.firstName} lastName = {item.lastName} dob = {item.dob} key = {item.id} />
        })
      }

      render(){
        return (
          <>
             <h1 className = "center">Users page</h1>
             <div className="cont-data">
                {this.usersHandler(this.state.usersData)}
             </div>
          </>  
      )
      }
    
}



