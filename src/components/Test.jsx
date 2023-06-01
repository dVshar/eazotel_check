import React, { useContext, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import "../style/test.css"
import Modal from 'react-bootstrap/Modal'
import { Button, Container, Row, Col } from 'react-bootstrap'
import ConfettiExplosion from 'react-confetti-explosion';



const master_api = 'http://127.0.0.1:8000/api/master';


const Test = () => {

  const navigate = useNavigate();
  const [load, setLoad] = useState(false);
  const { register, handleSubmit, getValues, reset, formState: { errors } } = useForm();
  const [modalShow, setModalShow] = React.useState(false); //Congratulation Modal
  const [isExploding, setIsExploding] = React.useState(false); //Confetti explosion
  const [websiteLink, setWebLink] = useState("");

  const onSubmit = async (data) => {
    setLoad(true);
    console.log(data);

    try {
      const response = await fetch(`${master_api}`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Token: localStorage.getItem('Token'),
          HotelName: (getValues('HotelName')),
          Hotelnumber: (getValues('Hotelnumber')),
          Address: (getValues('Address')),
          State: (getValues('State')),
          City: getValues('City'),
          Email: getValues('Email'),
          Rooms: getValues('Rooms')
        })
      });

      const json1 = await response.json();
      console.log(json1);
      setLoad(false);
      // alert(json1.Message);

      if (json1.Status === true) {
        setModalShow(true);
        setIsExploding(true);
        setWebLink(json1.Link);
        


      }
    } catch (error) {
      setLoad(false);
      alert('Bad Request');
    }


  }

  return (
    <>
      {/* Main Code */}

      <div className='container pt-5 pb-5 bg-danger' style={{ 'overflow-x': 'hidden' }}>
        <Row  id={load ? 'top-div-opacity' : 'top-div-test'} >

          <Col id='test-col1' md={6}>
            <div id='half-img-div'>
              <img id='half-img' src="https://app.durable.co/images/mars.svg" />
            </div>
          </Col>

          <Col id='mb-5 test-col2' md={6}>
            <div className='bg-primary'>
              <form className='test-form' onSubmit={handleSubmit(onSubmit)}>
                <section className='test-form-section' > Hotel Details</section>
                <div className="hotel-details">

                  <Row>
                    <Col>
                      <div class="formbold-input-group">
                        <label for="name" class="formbold-form-label"> Hotel Name
                          <span className='test-span'>* </span>
                        </label>
                        <input
                          type="text"
                          name="HotelName"
                          class="formbold-form-input"
                          {...register('HotelName', {
                            required: {
                              value: true,
                              message: 'Start_year is required'
                            }
                          })}
                        />
                      </div>

                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <div class="formbold-input-group">
                        <label for="name" class="formbold-form-label"> Address
                          <span className='test-span'>* </span>
                        </label>
                        <input
                          type="text"
                          name="Address"
                          class="formbold-form-input"
                          {...register('Address', {
                            required: {
                              value: true,
                              message: 'Address is required'
                            }
                          })}
                        />
                      </div>

                    </Col>

                    <Col>
                      <div class="formbold-input-group">
                        <label for="name" class="formbold-form-label"> No of rooms
                          <span className='test-span'>* </span>
                        </label>
                        <input
                          type="number"
                          name="Rooms"
                          class="formbold-form-input"
                          {...register('Rooms', {
                            required: {
                              value: true,
                              message: 'Rooms is required'
                            }
                          })}
                        />
                      </div>

                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <div class="formbold-input-group">
                        <label for="name" class="formbold-form-label"> City
                          <span className='test-span'>* </span>
                        </label>
                        <input
                          type="text"
                          name="City"
                          class="formbold-form-input"
                          {...register('City', {
                            required: {
                              value: true,
                              message: 'City is required'
                            }
                          })}
                        />
                      </div>

                    </Col>

                    <Col>
                      <div class="formbold-input-group">
                        <label for="name" class="formbold-form-label"> State
                          <span className='test-span'>* </span>
                        </label>

                        <select name="State" class="formbold-select-input"
                          {...register('State', {
                            required: {
                              value: true,
                              message: 'State is required'
                            }
                          })}>
                          <option value="None" selected disabled >Please Select</option>
                          <option value="Andhra Pradesh">Andhra Pradesh</option>
                          <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                          <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                          <option value="Assam">Assam</option>
                          <option value="Bihar">Bihar</option>
                          <option value="Chandigarh">Chandigarh</option>
                          <option value="Chhattisgarh">Chhattisgarh</option>
                          <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                          <option value="Daman and Diu">Daman and Diu</option>
                          <option value="Delhi">Delhi</option>
                          <option value="Lakshadweep">Lakshadweep</option>
                          <option value="Puducherry">Puducherry</option>
                          <option value="Goa">Goa</option>
                          <option value="Gujarat">Gujarat</option>
                          <option value="Haryana">Haryana</option>
                          <option value="Himachal Pradesh">Himachal Pradesh</option>
                          <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                          <option value="Jharkhand">Jharkhand</option>
                          <option value="Karnataka">Karnataka</option>
                          <option value="Kerala">Kerala</option>
                          <option value="Madhya Pradesh">Madhya Pradesh</option>
                          <option value="Maharashtra">Maharashtra</option>
                          <option value="Manipur">Manipur</option>
                          <option value="Meghalaya">Meghalaya</option>
                          <option value="Mizoram">Mizoram</option>
                          <option value="Nagaland">Nagaland</option>
                          <option value="Odisha">Odisha</option>
                          <option value="Punjab">Punjab</option>
                          <option value="Rajasthan">Rajasthan</option>
                          <option value="Sikkim">Sikkim</option>
                          <option value="Tamil Nadu">Tamil Nadu</option>
                          <option value="Telangana">Telangana</option>
                          <option value="Tripura">Tripura</option>
                          <option value="Uttar Pradesh">Uttar Pradesh</option>
                          <option value="Uttarakhand">Uttarakhand</option>
                          <option value="West Bengal">West Bengal</option>
                        </select>
                      </div>

                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <div class="formbold-input-group">
                        <label for="name" class="formbold-form-label"> Email
                          <span className='test-span'>* </span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          class="formbold-form-input"
                          {...register('Email', {
                            required: {
                              value: true,
                              message: 'Email is required'
                            }
                          })}
                        />
                      </div>

                    </Col>

                    <Col>
                      <div class="formbold-input-group">
                        <label for="name" class="formbold-form-label"> Phone
                          <span className='test-span'>* </span>
                        </label>
                        <input
                          type="tel"
                          pattern="[0-9]{10}"
                          name="Hotelnumber"
                          class="formbold-form-input"
                          {...register('Hotelnumber', {
                            required: {
                              value: true,
                              message: 'Hotelnumber is required'
                            }
                          })}
                        />
                      </div>

                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <div>
                        <Button type='submit' id='test-sbmt-btn' variant='dark'>{load ? 'Submitting ...' : 'Submit'} </Button>
                      </div>
                      <div className='terms-div'>
                        * By submitting this form, you agree to our Terms of Use and to receive Ezotal emails & updates and acknowledge you’ve read our Privacy Policy.
                      </div>
                    </Col>
                  </Row>

                </div>
              </form>
            </div>
          </Col>
        </Row>
      </div>


      {/* Congrats Modal Code */}
      <MyVerticallyCenteredModal show={modalShow}
        onHide={() => {
          setModalShow(false)
          setIsExploding(false);
        }}
        expload={isExploding}
        weblink={websiteLink}
      />


      {/* Spinner Code */}
      {load ?
        <div id='spinx-div'>
          <svg id='spinjsx-svg' class="pl" width="240" height="240" viewBox="0 0 240 240">
            <circle class="pl__ring pl__ring--a" cx="120" cy="120" r="105" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 660" stroke-dashoffset="-330" stroke-linecap="round"></circle>
            <circle class="pl__ring pl__ring--b" cx="120" cy="120" r="35" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 220" stroke-dashoffset="-110" stroke-linecap="round"></circle>
            <circle class="pl__ring pl__ring--c" cx="85" cy="120" r="70" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 440" stroke-linecap="round"></circle>
            <circle class="pl__ring pl__ring--d" cx="155" cy="120" r="70" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 440" stroke-linecap="round"></circle>
          </svg>
        </div> : undefined}

    </>
  )
}


function MyVerticallyCenteredModal(props) {

  const navigate = useNavigate();

  console.log(props.weblink)
  return (
    <>
      <Modal
        {...props}
        backdrop={'static'}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        closeButton={'true'}
      >

        <Modal.Body>
          <div className='Modal-details-div'>
            <h2>Congratulations

            </h2>
            <p>
              Your Website is ready !
            </p>

            <div className='test'><div>
              {props.expload && <ConfettiExplosion />}</div></div>

          </div>
          <div className='Modal-btn-div'>
            <Button variant="warning" onClick={() => {
              navigate('/')
            }} >Dashboard</Button>
            <Button style={{ 'width': '102px' }} onClick={() => {
              navigate('/')
            }} variant="info" target='_blank' href={'https://www.youtube.com/'} >Website</Button>
          </div>
        </Modal.Body>

      </Modal>

    </>
  );

}


export default Test




