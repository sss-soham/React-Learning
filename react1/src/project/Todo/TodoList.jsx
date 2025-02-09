/* eslint-disable react/prop-types */
import { FaCheck } from "react-icons/fa6"
import { MdDeleteForever } from "react-icons/md"

export const TodoList = ({data, checked, onDelete, onChecked}) => {
    return (
        <li className='todo-item'>
            <span className={checked ? 'checkList' : 'notCheckedList'}>{data}</span>
            <button className='check-btn' onClick={() => onChecked(data)}>
                <FaCheck />
            </button>
            <button 
            className='delete-btn' 
            onClick={() => onDelete(data)}>
                <MdDeleteForever />
            </button>
        </li>
    )
}