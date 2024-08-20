import React from "react";
import { CiEdit } from "react-icons/ci";
import { MdLowPriority } from "react-icons/md";
import EditTask from "./EditTask";
import AddPriority from "./AddPriority";
import { FaFolderPlus } from "react-icons/fa6";
import TaskToFolder from "./TaskToFolder";

class Task extends React.Component{

    task = this.props.task;

    constructor (props){
        super(props)

        this.state = {
            editTask: false,
            currentText: this.task.text,
            priority: this.task.priority,
            setPriority: false,
            toFolder: false,
        }
    }

    toggleEdit = () => {
        this.setState(prevState => ({
            editTask: !prevState.editTask
        }));
    };

    togglePriority = () => {
        this.setState(prevState => ({
            setPriority: !prevState.setPriority
        }));
        
        
    }

    setNewPriority = (newPriority) => {
        this.setState({ priority: newPriority });
    }

    updateTaskText = (newText) => {
        this.toggleEdit();
        this.setState({ currentText: newText });
        this.props.onUpdateTask(this.task.id, newText);
    };

    completeTask = () =>{
        this.props.onComplete(this.task.text, this.task.id)
    }

    toggleFolder = () => {
        this.setState(prevState => ({
            toFolder: !prevState.toFolder
        }));
    };
    

    render(){

        const darkStyleBorder = {
            border: this.props.dark ? '2px solid white' : '2px solid black'
        }

        const DarkStyleText = {
            color: this.props.dark? 'white' : '#0F3443'
        }

        return (
            <div>
                <p style={DarkStyleText} className="priority__text">Приоритет: {this.state.priority}</p>
                <div className="current__task">
                    <button className="current__task-button" style={darkStyleBorder} onClick={this.completeTask}/>
                    <div className="current__task-text" style={darkStyleBorder}>
                        {this.state.currentText}
                        <CiEdit title="Edit Task" onClick={this.toggleEdit} className="edit-icon"/>
                        <MdLowPriority onClick={this.togglePriority} title="Set Priority" className="priority-icon"/>
                        {this.state.setPriority && <AddPriority setNP = {this.setNewPriority} togglePriority = {this.togglePriority} addPr = {this.props.addPr} task = {this.task}/>}
                        {this.state.editTask && <EditTask currentText = {this.state.currentText} onUpdate = {this.updateTaskText}/>}
                    </div>
                    <FaFolderPlus onClick={this.toggleFolder} title="Add To Folder" className="add-folder-icon"/>
                    {this.state.toFolder && <TaskToFolder dark = {this.props.dark} folderMark = {this.toggleFolder} toFolder={this.props.toFolder} task={this.task} folders={this.props.folders}/>}
                </div>
            </div>
        )
    }
}

export default Task;