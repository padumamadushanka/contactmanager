import React, { Component } from 'react'
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup"
import axios from 'axios';

 class EditContact extends Component {
     state={
         name:'',
         email:'',
         phone:'',
         errors:{

         }
         
     }
     async componentDidMount(){
         const{id}=this.props.match.params;
         const res= await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
         const contact= res.data;
         this.setState({
             name:contact.name,
             email:contact.email,
             phone:contact.phone
         })
     }
     onSubmit = async (dispatch,e) => {
       e.preventDefault();
       const { name,email,phone } = this.state;
       //check for errors
       if(name===''){
         this.setState({errors:{name:'name is required'}})
         return;
       }
       if(email===''){
        this.setState({errors:{email:'email is required'}})
        return;
      }
      if(phone===''){
        this.setState({errors:{phone:'phone is required'}})
        return;
      }
   const updatedContact ={
       name,
       email,
       phone
   }
    const{id}=this.props.match.params;
    const res= await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,updatedContact);
    dispatch({
        type:'UPDATE_CONTACT',
        payload:res.data
    })
       this.setState({
         name:'',
         email:'',
         phone:"",
         errors:{}
       })
       //redirect
       this.props.history.push('/');
     }

     onChange = e => this.setState({ [e.target.name]:e.target.value })
  render() {
      const {name,email,phone,errors}=this.state
      return(
        <Consumer>
          {value=>{
            const {dispatch}=value;
            return(
                
            <div className="card-body">
            <div className="card-header">edit contact</div>
              <form onSubmit={this.onSubmit.bind(this,dispatch)}>
                  <TextInputGroup
                    label="name"
                    name="name"
                    placeholder="enter name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="email"
                    name="email"
                    type="email"
                    placeholder="enter email"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                 />
                    <TextInputGroup
                    label="phone"
                    name="phone"
                    placeholder="enter phone"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                  <input type="submit" value="update contact" className="btn btn-primary btn-block"></input>
              </form>
          </div>
            )
          }}
        </Consumer>
      )
  }
}
export default EditContact;