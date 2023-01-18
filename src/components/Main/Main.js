import {React, useEffect, useState} from 'react';
import './Main.css';
import Table from '../Table/Table';
import referesh_icon from '../../resources/images/referesh_icon.png';
import axios from 'axios';
import Modal from '../Modal/Modal';


function Main(props) {
  var windowWidth = window.innerWidth;
  const main = {minWidth:'96vw'}
  if(props.isOpen && windowWidth>880){
    main.minWidth = '85.5vw'
  }
  const [id, setEditId]= useState('');
  const [name, setName] = useState('');
  const [weight, setWeight] = useState('');
  const [quantity, setQuantity] = useState('');
  const [units, setUnits] = useState('');
  const [modal, setModal] = useState(false);
  const [update, setUpdate] = useState(false);
  const [datas, setData] = useState([]);
    const getData = () =>{
        axios.get("/list").then(response=>{
            setData(response.data.data)
        }, err=>{
           console.log(err);
        })
    }
    useEffect(()=>{
        getData();
    }, [])
  const handleItemDelete =(received_item_id)=>{
    const updatedData = [...datas]
    updatedData.splice(received_item_id-1 ,1);
    setData(updatedData);
  }
  const handleNewSave = ()=>{
    const newItemData = {"item_name":name, "item_quantity":quantity, "item_weight":weight, "item_unit":units}
    const updatedData = [...datas]
    updatedData.push(newItemData);
    setData(updatedData);
    setModal(false);
    axios.post('/add', newItemData);
    getData();
  }
  const handleNewEdit=()=> {
    const updatedData = [...datas];
    updatedData[id-1].item_name = name;
    updatedData[id-1].item_quantity = quantity;
    updatedData[id-1].item_weight = weight;
    updatedData[id-1].item_unit = units;
    setData(updatedData);
    setUpdate(false);
  }

  const handleAddNewModal = ()=>{
    if(modal){
      return (
        <Modal handleNewSave={handleNewSave} isUpdateRequest={false} isOpen={props.isOpen} closeModal={setModal} setName={setName} setWeight={setWeight} setQuantity={setQuantity} setUnits={setUnits}/>
      )
    }
    else{
      return <></>
    }
  }
  const handleUpdate= (itemData)=>{
    setEditId(itemData.id)
    setName(itemData.name);
    setQuantity(itemData.quantity);
    setUnits(itemData.unit);
    setWeight(itemData.weight);
    setUpdate(!update);
  }
  const handleUpdateModal= ()=>{
    if(update){
      return(
          <Modal isOpen={props.isOpen} handleNewEdit={handleNewEdit} isUpdateRequest={true} name={name} weight={weight} quantity={quantity} units={units} closeModal={setUpdate} setName={setName} setWeight={setWeight} setQuantity={setQuantity} setUnits={setUnits}/>
      )
    }
    else {
      return <></>
    }
  }
  
  return (
    <div className='main-container' onClick={()=>{if(props.isOpen)props.toggleSidebar()}} style={main}>
      <div className='main-header'>
        Items 
        <img alt="referesh" onClick ={()=>{getData()}}className = 'main-referesh-icon' src={referesh_icon}/>
        <div className='main-add-button' onClick={()=>setModal(!modal)}>Add Item +</div>
      </div>
      {handleAddNewModal()}
      {handleUpdateModal()}
      <Table handleItemDelete={handleItemDelete} setUpdate={handleUpdate} getData={getData} isOpen={props.isOpen} datas={datas}/>
    </div>
  )
}

export default Main
