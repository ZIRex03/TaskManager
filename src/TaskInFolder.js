import React from "react";
import { MdFolderDelete } from "react-icons/md";

class TaskInFolder extends React.Component {

    deleteFromFolder = () => {
        this.props.delFromFolder(this.props.tasks.id);
    }

    render() {

        return(
            <div className="folder__task">
                <div className="folder__task-text">
                    <hr/>
                    <p>{this.props.tasks.text}</p>
                </div>
                <MdFolderDelete onClick={this.deleteFromFolder} title="Delete From Folder" className="delete_from_folder-icon"/>
            </div>
        )
             
    }
}

export default TaskInFolder;