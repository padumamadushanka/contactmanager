import React from 'react'
import {Link} from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="jumbotron">
      <h1 className="display-4 alert alert-danger">404 page not found</h1>
      <p className="lead">sorry we coudn't find that page</p>
    </div>
  )
}
