import React from "react";
import { FaRegFolderOpen } from "react-icons/fa6";
import { TiDelete } from "react-icons/ti";

class Folders extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            folderName: this.props.folders.folder,
        }
    }

    toDelete = () => {
        this.props.delFolder(this.state.folderName)
    }

    render(){

        return(

            <div className="folders">
                <div className="folders__name">
                    <FaRegFolderOpen className="folder-icon"/>
                    <p>{this.state.folderName}</p>
                </div>
                <TiDelete onClick={this.toDelete} title="Delete Folder" className="delete-folder-icon"/>
            </div>
        )
    }
}

export default Folders;