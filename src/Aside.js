import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import Folders from "./Folders";


class Aside extends React.Component{


    constructor(props){
        super(props)
        this.state = {
            nameFolder: '',
        }
    }

    handleInputChange = (event) => {
        this.setState({nameFolder: event.target.value});
    };

    addFolder = () => {

        if (this.state.nameFolder.trim()) {
            this.props.onFolder(this.state.nameFolder); 
        }

        document.querySelector('.input-folder').value = '';
    }

    openMenu () {
        document.querySelector('.aside').classList.toggle('active');
        document.querySelector('.burger-icon').classList.toggle('active');
    }



    render(){

        const backDark = {
            backgroundColor: this.props.dark? '#000' : '#fff'
        }

        if(this.props.folders.length > 0){

            return(
                <div style={backDark} className="aside">

                    <CiMenuBurger title="Add Folder Menu" className="burger-icon" onClick={this.openMenu}/>

                    <div className="add__folder">
                        <input className="input-folder" onChange={this.handleInputChange}/>
                        <button onClick={this.addFolder}>Создать папку</button>
                    </div>

                    {this.props.folders.map((el)=>(
                        <Folders delFromFolder = {this.props.deleteFromFolder} tasks = {this.props.tasks} delFolder = {this.props.deleteFolder} folders = {el}/>
                    ))}

                </div>
            )
        }
        else{
            return(

                <div style={backDark} className="aside">

                    <CiMenuBurger title="Add Folder Menu" className="burger-icon" onClick={this.openMenu}/>

                    <div className="add__folder">
                        <input className="input-folder" onChange={this.handleInputChange}/>
                        <button onClick={this.addFolder}>Создать папку</button>
                    </div>

                    <p>Список папок пуст</p>

                </div>
            )
        }

        
    }
}

export default Aside;