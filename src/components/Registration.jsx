import React,{useState} from 'react'
import '../style/Registration.css'
import {useForm} from 'react-hook-form'
import { Button, Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import {BiErrorCircle} from 'react-icons/bi'
import Spinner from 'react-bootstrap/Spinner';

const host='http://127.0.0.1:8000/api/Register/';

const RegistrationForm = () => {

  const { register,reset,watch, handleSubmit, formState: {errors}} = useForm();
  const [success,setSuccess] = useState(false);
  const navigate = useNavigate();
  const [loading,setLoading]=useState(false);

  const onSubmit= async (data)=>{
    setLoading(true);

    try{
  const response = await fetch(`${host}`, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
      // 'auth-token':localStorage.getItem('token')  
    },
    body:JSON.stringify({Name:data.username ,Email:data.email,Password: data.password})
  });
    const json1 = await response.json();
    
     console.log(json1);
     console.log(json1.Status,typeof(json1.Status));
     setLoading(false);

    if(json1.Status === true){
      console.log(true)
      navigate('/login');
      reset();
    }
    else{
      alert(json1.Message);
    }
  }  catch(error){
    setLoading(false);
    alert("Bad Request");

  }
  }


  return (
    <div className='bg-secondary'>
        <Container> 
            <div className='formContainer p-4 pb-4 mt-0 mb-0'>
                <Form className=' shadow login-form border-0 rounded bg-light' onSubmit={handleSubmit(onSubmit)}>
                    <div className="formContainer-div1">
                       <h2>Welcome to ADI</h2>
                       <span >Sign up</span>
                    </div>

                    <div className="formContainer-div2">
                        <div className="input-div">
                            <input placeholder='Username' type="name" 
                              {...register("username" , {required:'" Username is required ! " '}  )}/>
                            <span className='error'>{errors.username?.message }</span>
                            {/* <span  className='error'> {errors.username?.message !== ''? <BiErrorCircle/>:<span/> } <span className='error-msg' > {errors.username?.message }</span></span>  */}
                        </div>
                        <div className="input-div">
                            <input placeholder='Email' type="email"
                              {...register("email" , {required:'" Email is required ! "'}  )}/>
                             <span className='error'>{errors.email?.message }</span>
                        </div>
                        <div className="input-div">
                            <input placeholder='Password' type="password" 
                            {...register("password" ,  {required:'" Password is required ! "', minLength:{value: 5, message: "Min lenth should be 5"}})}/>
                             <span className='error'>{errors.password?.message }</span>
                        </div>
                        <div className="input-div">
                            <input placeholder='Confirm Password' type="text" 
                            {...register("confirm_password" ,  {required:'" Conform Password is required ! "',validate:(val)=>{
                                if(watch('password') !== val){
                                return "Password is not same"
                                }
                               }})}/>
                             <span className='error'>{errors.confirm_password?.message }</span>
                        </div>
                         
                    </div>

                     <div className="formContainer-div3">
                          <Button type='submit'>  { loading ? <Spinner id='load-spin' />:'' } Register</Button>
                           
                     </div>

                </Form> 
            </div>
        </Container>     
    </div>
  )
}

export default RegistrationForm

