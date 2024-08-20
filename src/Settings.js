import React from "react";

class Settings extends React.Component{


    toggleCheck = () => {
        const newTheme = !this.props.darkTheme; // Получаем текущее значение темной темы
        console.log(newTheme);
        this.props.onDark(newTheme); // Передаем новое значение в App
    };

    render(){

        return(
            <div className="settings" style={{backgroundColor: this.props.darkTheme ? 'black' : 'white',}}>
                <h2>Настройки</h2>
                <div className="settings__theme">
                    <p>Темная тема</p>
                    <button className="theme-checkbox" style={{ 
                            backgroundColor: this.props.darkTheme ? 'green' : 'white', }} 
                            onClick={this.toggleCheck}/>
                </div>
            </div>
        )
    }

}

export default Settings;