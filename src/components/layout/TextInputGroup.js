import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

 const TextInputGroup=({
     label,
     name,value,type,onChange,placeholder,error
 })=> {
  return (
    <div className="form-group">
    <label htmlFor={name}>{label}</label>
        <input onChange={onChange}
                value={value} 
                name={name}
                type={type}
                className={classnames('form-control form-control-lg',{'is-invalid':error})}
                placeholder={placeholder}>
        </input>
        {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
}
TextInputGroup.propTypes={
    name:PropTypes.string.isRequired,
    placeholder:PropTypes.string.isRequired,
    value:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
    label:PropTypes.string.isRequired,
    error:PropTypes.string

}
TextInputGroup.defaultProps={
    type:"text"
}
export default TextInputGroup;