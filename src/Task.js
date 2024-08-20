import React from "react";
import { CiEdit } from "react-icons/ci";
import { MdLowPriority } from "react-icons/md";
import EditTask from "./EditTask";
import AddPriority from "./AddPriority";
import { FaFolderPlus } from "react-icons/fa6";
import TaskToFolder from "./TaskToFolder";

class Task extends React.Component{

    constructor (props){
        super(props)

        this.state = {
            editTask: false,
            currentText: this.props.task.text,
            priority: this.props.task.priority,
            setPriority: false,
            toFolder: false,
            textPriority: '',
        }
    }

    getTextPriority(priority) {
        switch(priority) {
            case 'high':
                return 'Высокий';
            case 'medium':
                return 'Средний';
            case 'low':
                return 'Низкий';
            default:
                return '';
        }
    }

    toggleEdit = () => {
        this.setState(prevState => ({
            editTask: !prevState.editTask
        }));
    };

    togglePriority = (txtPriority) => {

        this.setState(prevState => ({
            setPriority: !prevState.setPriority
        }));
        
        this.getTextPriority(txtPriority);
        
    }

    setNewPriority = (newPriority) => {
        this.setState({ priority: newPriority });
    }

    updateTaskText = (newText) => {
        this.toggleEdit();
        this.setState({ currentText: newText });
        this.props.onUpdateTask(this.props.task.id, newText);
    };

    completeTask = () =>{
        this.props.onComplete(this.props.task.text, this.props.task.id)
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
                <p style={DarkStyleText} className="priority__text">Приоритет: {this.getTextPriority(this.props.task.priority)}</p>
                <div className="current__task">
                    <button className="current__task-button" style={darkStyleBorder} onClick={this.completeTask}/>
                    <div className="current__task-text" style={darkStyleBorder}>
                        {this.state.currentText}
                        <CiEdit title="Edit Task" onClick={this.toggleEdit} className="edit-icon"/>
                        <MdLowPriority onClick={this.togglePriority} title="Set Priority" className="priority-icon"/>
                        {this.state.setPriority && <AddPriority setNP = {this.setNewPriority} togglePriority = {this.togglePriority} addPr = {this.props.addPr} task = {this.props.task}/>}
                        {this.state.editTask && <EditTask currentText = {this.state.currentText} onUpdate = {this.updateTaskText}/>}
                    </div>
                    <FaFolderPlus onClick={this.toggleFolder} title="Add To Folder" className="add-folder-icon"/>
                    {this.state.toFolder && <TaskToFolder dark = {this.props.dark} folderMark = {this.toggleFolder} toFolder={this.props.toFolder} task={this.props.task} folders={this.props.folders}/>}
                </div>
            </div>
        )
    }
}

export default Task;