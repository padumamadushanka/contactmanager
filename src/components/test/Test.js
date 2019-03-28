import React, { Component } from 'react'

 class Test extends Component {
    state={
        title:'',
        body:'',
        id:'',
        userId:''
    };
     componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => this.setState({
          title:data.title,
          body:data.body,
          id:data.id,
          userId:data.userId
      }))
    }
  render() {
    const{title,body,id,userId}=this.state;
    return (
      <div>
       <h1>{title}</h1> 
       <p>{body}</p>
       <p>{id}</p>
       <p>{userId}</p>
      </div>
    )
  }
}
export default Test;