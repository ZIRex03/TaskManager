import React, {useState} from "react";
import { IoAddCircleOutline } from "react-icons/io5";


const AddTask = ({addTask}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSave = () => {
        if (inputValue.trim()) {
            addTask(inputValue); 
            setInputValue(''); 
        }
    };

    return(

        <div className="task">
            <input placeholder="Добавить задачу..." value={inputValue} className="add-task" onChange={handleInputChange}/>
            <IoAddCircleOutline title="Add Task" className="add-task-icon" onClick={handleSave}/>
        </div>
    )

}

export default AddTask;