import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import {Modal} from "react-bootstrap"
import './getStarted.css'

export default function LoginModal(props) {

    const [submitError, setSubmitError] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const [formData, setFormData] = useState({
        'username':'',
        'password':''
    });

    const handleClose = () => {
        console.log('submit')
       useHistory.push('/') 
    }
    const handleFormInput = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    };
    const handleSubmit= () => {
        fetch('/loginAuth', {
            method:'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        }).then(
            res => res.json().then(
                data => {
                    if (data.msg!='success'){
                        setSubmitError(true);
                        setErrorMsg(data.msg)
                        return
                    };
                    handleClose()
                    localStorage.setItem('username', data.payload.username)
                    // console.log(data.payload.username);
                }
            )
        )
    };

    return (
        <Modal dialogClassName="customModal" show={props.show} centered>
            <Modal.Header >
            <Modal.Title><span className="customModal-Header">Log In</span></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    {submitError? 
                        <div className="alert alert-danger" role="alert">
                            {errorMsg}
                        </div>: null
                    }
                    <label className="form-label">Username/ Email</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control customModal-Input"
                            name='username'
                            onChange={handleFormInput}
                        />
                    </div>

                    <label className="form-label">Password</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control customModal-Input"
                            name='password'
                            onChange={handleFormInput}/>
                    </div>

                    <div className="text-center">
                        <label className="form-label customModal-ForgotPass">Forgot your password?</label>
                    </div>

                    <div className="text-center">
                        <button type="submit" className="btn btn-lg mt-2 shadow customModal-LogInBtn"
                            onClick={handleSubmit}>
                        Log In
                        </button>
                    </div>

                    <hr className="customModal-Hr"/>

                    <div className="text-center mt-3">
                        <label className="form-label customModal-ForgotPass">Create a new account?</label>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}
