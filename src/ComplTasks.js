import React from "react";
import ComplTask from "./ComplTask";

class ComplTasks extends React.Component{

    render(){

        if(this.props.complTasks.length > 0){
            return(
                <div className="complete__tasks">
                    <p>Завершенные задачи</p>
                    {this.props.complTasks.map((el) => (
                        <ComplTask dark = {this.props.dark} key={el.id} complTask = {el} onDelete = {this.props.onDelete} onReturn = {this.props.onReturn}/>
                    ))}
                </div>
            )
        }
        
    }
}

export default ComplTasks;