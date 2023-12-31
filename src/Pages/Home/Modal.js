//import 'bootstrap/dist/css/bootstrap.min.css';  
import {Modal, Button} from 'react-bootstrap';  
import { AreaSelector } from '@bmunozg/react-image-area'
import { useState } from 'react';  
function ModalDialog(props) {  
  
    const [areas, setAreas] = useState([]);

    const onChangeHandler = (areas) => {
        setAreas(areas);
    }
    const customRender = (areaProps) => {
      if (!areaProps.isChanging) {
          return (
              <div key={areaProps.areaNumber}>
                  {areaProps.areaNumber}
              </div>
          );
      }
  };
  return (  
    <div className="App p-4">  
  <Modal show={props.open} onHide={props.modalClose}>  
  <Modal.Header closeButton>  
    <Modal.Title>Select Image Area</Modal.Title>  
  </Modal.Header>  
  
  <Modal.Body>  
     <AreaSelector
            areas={areas}
            customAreaRenderer={customRender}
            onChange={onChangeHandler}
            debug={true}
            maxAreas={1}
            unit={'pixel'}
        >
            <img src={props.image} alt='my image' style={{width:"100%"}} />
        </AreaSelector>
  </Modal.Body>  
  
  <Modal.Footer>  
    {/* <Button variant="secondary" onClick={modalClose}>Close Modal</Button>   */}
    <Button variant="primary">Save changes</Button>  
  </Modal.Footer>  
</Modal>  
    </div>  
  );  
}  
export default ModalDialog;
