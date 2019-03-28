import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Consumer } from "../../context";
import axios from 'axios';
import {Link} from 'react-router-dom';

 class Contact extends Component {
     state={
        showContactInfo:false
     }
     onshowclick=e=>{
       this.setState({showContactInfo:!this.state.showContactInfo})
     }
     onDeleteClick= async (id,dispatch)=>{
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      dispatch({type:'DELETE_CONTACT',payload:id})
        
     }
  render() {
    const{id}=this.props.contact;
      const {contact}=this.props;//contact object of props coming from contacts.js
      const {showContactInfo}=this.state;//destructuring and take out showcontactinfo 
    return (
      <Consumer>
        {
            value=>{
              const {dispatch}=value;
            return(
              <div className="card card-body mb-3 text-white bg-success">
              <h4>{contact.name} <i onClick={this.onshowclick}className="fas fa-sort-down" style={{cursor:'pointer'}}></i>
              <i className="fas fa-user-times" style={{color:'white',cursor:'pointer',float:'right'}} onClick={this.onDeleteClick.bind(this,id,dispatch)}></i>
              <Link to={`contact/edit/${id}`}><i style={{color:'white',cursor:'pointer',float:'right',marginRight:'1rem'}} className="fas fa-pencil-alt"></i></Link>
              </h4>
              {showContactInfo ? (<ul className="list-group">
                  <li className="list-group-item bg-success">Email:{contact.email}</li>
                  <li className="list-group-item bg-success">Phone:{contact.phone}</li>
              </ul>):null}  
            </div>
            )
          }
        }
      </Consumer>
 
    )
    //toggling ul using showcontactinfo set display and none
  }
}
Contact.propTypes={
    contact:PropTypes.object.isRequired,
}
export default Contact;