//import React,{useState} from 'react'
import {useForm} from 'react-hook-form'
import { Button, Container,Form } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

const Reset_Url= 'http://35.78.112.238/api/ChangePass/'

const ResetPassword = () => {
   
  const navigate= useNavigate();  
  const { register, watch,handleSubmit,reset, formState: {errors}} = useForm();
    
  const onSubmit= async(data)=>{
    console.log(data);
    const token=localStorage.getItem('Token'); 
    console.log(token);


    const response = await fetch(`${Reset_Url}`, {     
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json', 
      },
      body:JSON.stringify({Token:token, Old_Password: data.password, Password: data.new_password })
    });
    const json1 = await response.json();
    console.log(json1);
    reset();
    navigate("/");
  
}


  return (
    <div className='wrapper'>
    <Container> 
        <div className='formContainer'>
            <Form className='form' onSubmit={handleSubmit(onSubmit)}>
                <div className="formContainer-div1">
                   <h2>Reset Password</h2>
                   {/* <span>Reset Password</span> */}
                </div>

                <div className="formContainer-div2">
                
                    <div className="input-div">
                        <input placeholder='Old Password' type="password"
                          {...register("password" ,  {required:'Password is required'})} />
                         <span className='error'>{errors.password?.message }</span>
                    </div>
                    <div className="input-div" >
                    <input placeholder='New Password' type="password"  {...register("new_password" ,  {required:' Password is required',validate:(val)=>{
                if(watch('password') === val){
                return "New Password should not be same"
                }
               }})} />
                 <span className='error'>{errors.new_password?.message }</span>
                    </div>
                     
                </div>

                 <div className="formContainer-div3">
                      <Button type='submit'>Reset</Button>
                 </div>
            </Form> 
        </div>
    </Container>     
</div>
  )
}

export default ResetPassword
