import React, { useState, useContext } from 'react';
import AuthContext from '../context/AuthProvider';
import { useForm } from 'react-hook-form';
import { Button, Container, Form } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import { Link, useNavigate } from 'react-router-dom';

const host = 'http://127.0.0.1:8000/api/Login/';

const Login = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const { webCards, setWebCards } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);
    setLoading(true);

    try {
      const response = await fetch(`${host}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Email: data.email, Password: data.password }),
      });

      setLoading(false);
      const json1 = await response.json();
      console.log(json1);

      if (json1.Status === true) {
        localStorage.setItem('Token', json1.Token);
        setAuth(true);
        navigate('/');
      } else {
        alert(json1.Message);
      }
    } catch (error) {
      setLoading(false);
      alert('Bad Request');
    }
  };

  return (
    <div className='bg-secondary'>
      <Container>
        <div className='formContainer p-4 pb-4 mt-0 mb-0 '>
          <Form
            className='shadow login-form border-0 rounded bg-light'
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className='formContainer-div1'>
              <h2>Welcome to ADI</h2>
              <span>Login Please</span>
            </div>

            <div className='swg-div'>
              <div className='swg-btn-div'>
                <Button id='swg-btn' variant='primary'>
                  Sign In with Google
                </Button>
              </div>

              <div class='separator'>
                <hr class='line' />
                <span>Or</span>
                <hr class='line' />
              </div>
            </div>

            <div className='formContainer-div2'>
              <div className='input-div'>
                <input
                  placeholder='Email'
                  type='email'
                  {...register('email', {
                    required: 'Email is required!',
                  })}
                  className='form-control'
                />
                <span className='error'>{errors.email?.message}</span>
              </div>
              <div className='input-div'>
                <input
                  placeholder='Password'
                  type='password'
                  {...register('password', {
                    required: 'Password is required!',
                  })}
                  className='form-control'
                />
                <span className='error'>{errors.password?.message}</span>
              </div>
            </div>

            <div className='formContainer-div3'>
              <Button type='submit' className='w-100'>
                {loading ? <Spinner id='load-spin' /> : ''} Login
              </Button>
              <div className='formContainer-div3-span'>
                <span>New User ?</span>
                <Link to={'/signup'} className='link'>
                  <span>Sign up</span>
                </Link>
              </div>
            </div>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Login;
