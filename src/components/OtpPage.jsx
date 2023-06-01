import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { IoShieldCheckmark } from 'react-icons/io5';
import OtpInput from 'react-otp-input';
import '../style/otpform.css'

const OtpPage = () => {
    const [otp, setOtp] = useState('');
    console.log(otp);

   const handleotp=()=>{
      if(otp.length === 4){
     alert(`Your OTP is ${otp}`);
     setOtp("");
      }
     else
     alert(`Please enter the OTP `)
   }

    return (
        <>
            <div className='otp-wrapper'>
                <Container>
                    <div className='otp-formContainer'>
                        <Form className='otp-form'>
                            <header className='shield-header'>
                                <IoShieldCheckmark id='shield-icon' />
                            </header>
                            <div className='otp-text'>
                                <h4>Enter OTP Code</h4>
                            </div>
                            <OtpInput
                                inputStyle={
                                    {
                                        'height': '40px ',
                                        'width': '37px',
                                        'border-radius': '6px',
                                        'font-size': '1.125rem',
                                        'text-align': 'center',
                                        'border': '2px solid rgb(197 191 191)'
                                    }}
                                value={otp}
                                onChange={setOtp}
                                numInputs={4}
                                renderSeparator={<span>-</span>}
                                renderInput={(props) => <input {...props} />}
                            />
                            <div className='otp-btn-div'>
                                <Button onClick={handleotp} id='otp-btn' variant='primary'>Verify OTP</Button>
                            </div>
                        </Form>
                    </div>
                </Container>
            </div>
        </>

    )
}

export default OtpPage
