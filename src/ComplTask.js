import React from "react";
import { IoCheckbox, IoReturnDownBack } from "react-icons/io5";
import { FaRegTrashAlt } from "react-icons/fa";

class ComplTask extends React.Component{

    complTask = this.props.complTask;

    deletedTask = () => {
        this.props.onDelete(this.complTask.id);
    }

    returnTask = () => {
        this.props.onReturn(this.complTask.text, this.complTask.id)
    }

    render(){

        const darkStyle = {
            backgroundColor: this.props.dark? '#06275c': '#d2dee3',
        }

        return(
            <div className="complete__tasks-text" style={darkStyle}>
                <IoCheckbox className="check-icon"/> { this.complTask.text}
                <FaRegTrashAlt title="Delete Task" className="trash-icon" onClick={this.deletedTask}/>
                <IoReturnDownBack title="Return Task" className="return-icon" onClick={this.returnTask}/>
            </div>
        )
    }
    
}

export default ComplTask;