import {React} from 'react';
import './Table.css';
import TableRow from './TableRow';

function Table(props) {
    const datas = props.datas;
    var key =0;
    return (
        <div>
            <TableRow isHeader={1} key={0} isOpen={props.isOpen} />
            {datas.map((data)=>{   
                key++;
                return <TableRow handleItemDelete={props.handleItemDelete} setUpdate={props.setUpdate} getData= {props.getData} color_id={key} isOpen={props.isOpen} isHeader={0} item_data = {data}/>
            })}
        </div>
    )
}

export default Table
