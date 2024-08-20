import React from "react";

class TaskToFolder extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            toFolderName : '',
        }
    }

    changeFolder = (event) => {
        this.setState({toFolderName: event.target.value})
    }

    addToFolder = () => {
        this.props.toFolder(this.props.task.id, this.state.toFolderName)
        this.props.folderMark();
    }

    render(){

        const darkBack = {
            backgroundColor: this.props.dark? '#000' : '#fff',
            border: this.props.dark? '1px #fff solid' : '1px #000 solid'
        }

        return(
            <div style={darkBack} className="task__folder">
                <p>В какую папку добавить задачу?</p>
                <select onChange={this.changeFolder}>
                    <option value=''></option>
                    {this.props.folders.map((el) => (
                        <option value={el.folder}>{el.folder}</option>
                    ))}
                </select>
                <button onClick={this.addToFolder}>Добавить</button>
            </div>
        )
    }
}

export default TaskToFolder;