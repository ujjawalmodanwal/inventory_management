import React from 'react';
import './Modal.css';

function Modal(props) {
    var windowWidth = window.innerWidth;
    const modalBackgroundWidth = {minWidth:'96vw'}
    if(props.isOpen && windowWidth>880){
        modalBackgroundWidth.minWidth = '85.5vw'
    }
    const inputBoxStyle = {width: "20vw" , height: "4vh", margin:"1vw", border:'1px solid black', borderRadius:'3px'}
    if(windowWidth<=880){
        inputBoxStyle.width="70vw"
        inputBoxStyle.margin='3vw'
        inputBoxStyle.height='12vw'
    }

    const getAddNewModal=()=>{
       
        if(!props.isUpdateRequest){
            return(
                <div className='modal-main-window' >
                    <h3>Add New Item</h3>
                    <input
                        style={inputBoxStyle}
                        type="text" 
                        placeholder='Item Name'
                        onChange={(event)=>{props.setName(event.target.value)}}
                    />
                    <input
                        style={inputBoxStyle}
                        type="text" 
                        placeholder='Item Quantity'
                        onChange={(event)=>{props.setQuantity(event.target.value)}}
                    />
                    <input
                        style={inputBoxStyle}
                        type="text" 
                        placeholder='Item Units'
                        onChange={(event)=>{props.setUnits(event.target.value)}}
                    />
                    <input
                        style={inputBoxStyle}
                        type="text" 
                        placeholder='Item Weight'
                        onChange={(event)=>{props.setWeight(event.target.value)}}
                    />
                    <div className='modal-add-new-buttons'>
                        <div className='modal-save-button' onClick={()=>props.handleNewSave()}>Save</div>
                        <div className='modal-save-button' onClick={()=>props.closeModal(false)}>Cancel</div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className='modal-main-window' >
                    <h3>Update Item</h3>
                    <input
                        style={inputBoxStyle}
                        type="text" 
                        placeholder='Item Name'
                        onChange={(event)=>{props.setName(event.target.value)}}
                        value={props.name}
                    />
                    <input
                        style={inputBoxStyle}
                        type="text" 
                        placeholder='Item Quantity'
                        onChange={(event)=>{props.setQuantity(event.target.value)}}
                        value={props.quantity}
                    />
                    <input
                        style={inputBoxStyle}
                        type="text" 
                        placeholder='Item Units'
                        onChange={(event)=>{props.setUnits(event.target.value)}}
                        value={props.units}
                    />
                    <input
                        style={inputBoxStyle}
                        type="text" 
                        placeholder='Item Weight'
                        onChange={(event)=>{props.setWeight(event.target.value)}}
                        value={props.weight}
                    />
                    <div className='modal-add-new-buttons'>
                        <div className='modal-save-button' onClick={()=>props.handleNewEdit()}>Update</div>
                        <div className='modal-save-button' onClick={()=>props.closeModal(false)}>Cancel</div>
                    </div>
                </div>
            )
        }
    }
    return (
        <div className='modal-background' style={modalBackgroundWidth}>
            <div className='modal-main-window' >
                {getAddNewModal()}
            </div>
        </div>
    )
}

export default Modal
