import React, { Component } from 'react'
import { getMaxListeners } from 'cluster';

 class AddContact extends Component {
   constructor(props){
     super(props)
     this.nameInput=React.createRef();
     this.emailInput=React.createRef();
     this.phoneInput=React.createRef();
   }
     onSubmit=e=>{
       e.preventDefault();
       const contact={
         name:this.nameInput.current.value,
         email:this.emailInput.current.value,
         phone:this.phoneInput.current.value,

       }
       console.log(contact)
     }
     static defaultProps={
       name:'venom',
       email:'venom@getMaxListeners.com',
       phone:'345435353535'
     }
  render() {
      const {name,email,phone}=this.props
    return (
      <div className="card mb-3">
        <div className="card-header">
        Add Contact
        </div>
        <div className="card-body">
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                <label htmlFor="name">name</label>
                <input ref={this.nameInput}defaultValue={name} name="name"type="text"className="form-control form-control-lg" placeholder="enter name"></input>
                </div>
                <div className="form-group">
                <label htmlFor="email">email</label>
                <input ref={this.emailInput}defaultValue={email} name="email"type="email"className="form-control form-control-lg" placeholder="enter email"></input>
                </div>
                <div className="form-group">
                <label htmlFor="phone">phone</label>
                <input ref={this.phoneInput}defaultValue={phone}name="phone"type="text"className="form-control form-control-lg" placeholder="enter phone"></input>
                </div>
                <input type="submit" value="add contact" className="btn btn-primary btn-block"></input>
            </form>
        </div>
      </div>
    )
  }
}
export default AddContact;