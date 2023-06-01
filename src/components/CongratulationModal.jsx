import React from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button} from 'react-bootstrap'
import '../style/Congrats.css'
import ConfettiExplosion from 'react-confetti-explosion';

const CongratulationModal = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [isExploding, setIsExploding] = React.useState(false);
  return (
    <>
      <Button variant="primary" onClick={() => {
        setModalShow(true);
        setIsExploding(true);
      }}>
        Launch vertically centered modal
      </Button> 

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() =>{ setModalShow(false)
            setIsExploding(false);}}
        expload={isExploding}
      />
    </>
  )
}

export default CongratulationModal

function MyVerticallyCenteredModal(props) {
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
           <div  className='Modal-btn-div'>
          <Button  variant="warning" onClick={props.onHide}>Dashboard</Button>
          <Button style={{'width':'102px'}}  variant="info" onClick={props.onHide}>Website</Button>
          </div>
        </Modal.Body>
       
      </Modal>

      </>
    );
}

// force={0.6}
//         duration={2500}
//         particleCount={80}
//         width={1000}