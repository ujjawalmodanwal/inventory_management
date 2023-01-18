import React from 'react';
import './Table.css';
import delete_icon from '../../resources/images/delete_icon.png';
import edit_icon from '../../resources/images/edit_icon.png';
import axios from 'axios';

function TableRow(props) {
    var windowWidth = window.innerWidth;
    const rowStyle = {width:'96vw', backgroundColor:'white'}
    if(props.isOpen && windowWidth>880){
        rowStyle.width='85.5vw'
    }
    if(props.color_id%2===1){
        rowStyle.backgroundColor = "#cccccc"
    }
    const handleDelete=(item_id)=>{
        props.handleItemDelete(item_id);
        axios.delete(`/remove/${item_id}`);
        props.getData();
    }

    const sendData=()=>{
        const itemData={
            "id":props.color_id,
            "name":props.item_data.item_name,
            "quantity":props.item_data.item_quantity,
            "unit":props.item_data.item_unit,
            "weight":props.item_data.item_weight
        }
        props.setUpdate(itemData)
    }
    const getRow = () =>{
        if(props.isHeader===1){
            return(
                <div className='header-main' style={rowStyle}>
                    <div className='header-cell-id' >ID</div>
                    <div className='header-cell-name'>NAME</div>
                    <div className='header-cell-quantity'>QUANTITY</div>
                    <div className='header-cell-unit'>UNITS</div>
                    <div className='header-cell-weight'>WEIGHT</div>
                    <div className='header-cell-actions'>ACTION</div>
                </div> 
            )
        }
        else{
            return (
                <div className='header-main-data' style={rowStyle} >
                    <div className='header-cell-id'>{props.color_id}</div>
                    <div className='header-cell-name'>{props.item_data.item_name}</div>
                    <div className='header-cell-quantity'>{props.item_data.item_quantity}</div>
                    <div className='header-cell-unit'>{props.item_data.item_unit}</div>
                    <div className='header-cell-weight'>{props.item_data.item_weight}</div>
                    <div className='header-cell-delete' onClick={()=>sendData()}> <img alt='edit' className='row-action-icon'  src={edit_icon}/></div>
                    <div className='header-cell-edit' onClick={()=>{handleDelete(props.color_id)}}><img alt='delete' className='row-action-icon' src={delete_icon}/></div>
                </div>
            )
        }
    }
    return (
        <>
            {getRow()}
        </>
    )
}

export default TableRow
