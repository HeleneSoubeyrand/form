import React from "react";

import Button from 'react-bootstrap/Button'

class Form extends React.Component {
    render() {
        const { handleEmailChange, handlePasswordChange, handleRememberMeChange, handleSubmit } = this.props 
        return (
            <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group my-3 row">
                    <label className="row">Email adress</label>
                    <input type="email" className="form-control" placeholder="Enter email..." onChange={handleEmailChange} />
                </div>
                <div className="form-group my-3 row">
                    <label className="row">Password</label>
                    <input type="password" className="form-control" placeholder="Enter password..." onKeyUp={handlePasswordChange} />
                </div>
                <div className="form-check my-3">
                    <input className="form-check-input" type="checkbox" id="gridCheck1" onChange={handleRememberMeChange} />
                    <label className="form-check-label" for="gridCheck1">Remember me</label>
                </div>
                <Button className="row" type="submit" value="Submit">Submit</Button>
            </form>
            </div>
        )
    }
}

export default Form; 