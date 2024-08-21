import React from "react";
import { FaRegFolderOpen } from "react-icons/fa6";
import { TiDelete } from "react-icons/ti";
import TaskInFolder from "./TaskInFolder";

class Folders extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            folderName: this.props.folders.folder,
            openFolder: false,
        }
    }

    toDelete = () => {
        this.props.delFolder(this.props.folders.folder)
    }

    toggleOpen = () => {

        this.setState(prevState => ({
            openFolder: !prevState.openFolder
        }));
    }

    render(){

        const sortedTask = this.props.tasks.filter((el) => el.onFolder === this.props.folders.folder)

        return(

            <div className="folders">

                <div className="folders__current">
                    <div className="folders__name">
                        <div className="folders__name-icons">
                            <FaRegFolderOpen onClick={this.toggleOpen} className="folder-icon"/>
                        </div>
                        <p onClick={this.toggleOpen}>{this.props.folders.folder}</p>
                    </div>
                    <TiDelete onClick={this.toDelete} title="Delete Folder" className="delete-folder-icon"/>
                </div>

                {this.state.openFolder && sortedTask.map((el) => (
                    <TaskInFolder delFromFolder={this.props.delFromFolder} task = {sortedTask} tasks = {el}/>
                ))}
                
            </div>
        )
    }
}

export default Folders;