import React from "react";
import { CiSettings } from "react-icons/ci";
import Settings from "./Settings";

class Header extends React.Component{

    constructor (props){
        super(props)

        this.state = {
            openSettings: false,
        }
    }

    toggleSettings = () => {
        this.setState(prevState => ({
            openSettings: !prevState.openSettings
        }));
    };

    render(){
        return(
            <header className="header">
                <h1 className="header__text">TaskManager</h1>
                <CiSettings title="Settings" className="settings-icon" onClick={this.toggleSettings}/>
                {this.state.openSettings && <Settings setFonts = {this.props.setFonts} darkTheme = {this.props.darkTheme} onDark = {this.props.onDark}/>}
            </header>
        )
    }
}

export default Header;