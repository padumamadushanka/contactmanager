import React, { Component } from 'react'
import Contact from './Contact'
import { Consumer } from "../../context";//bringing in consumer

 class Contacts extends Component {

  render() {
    //use consumer
      return(
        <Consumer>
          {
            value=>{
              const {contacts}=value;//pulling out contacts from state using destructuring
              return(
                <div>
                  <h1 className="display-4 mb-2 jumbotron">Contact list</h1>
                {contacts.map(contact =>
                    <Contact key={contact.id} contact={contact} >
                    
                    </Contact>  //instead of passing value by value here everything passed in contacts object in to contact component
                )}
              </div>//traversing contact array to loop objects
              )
            }
          }
        </Consumer>
      )
  }
}
export default  Contacts;