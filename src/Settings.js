import React from "react";

class Settings extends React.Component{


    toggleCheck = () => {
        const newTheme = !this.props.darkTheme; // Получаем текущее значение темной темы
        console.log(newTheme);
        this.props.onDark(newTheme); // Передаем новое значение в App
    };

    handleChange = (event) => {
        this.props.setFonts(event.target.value);
    }

    render(){

        return(
            <div className="settings" style={{backgroundColor: this.props.darkTheme ? 'black' : 'white',}}>
                <h2>Настройки</h2>
                <div className="settings__theme">
                    <p>Темная тема</p>
                    <button className="theme-checkbox" style={{backgroundColor: this.props.darkTheme ? 'green' : 'white', }} onClick={this.toggleCheck}/> 
                </div>
                <hr className="a-theme"/>
                <div className="settings__fonts">
                    <p>Выберите шрифт</p>
                    <div className="fonts-input">
                        <p className="p-Montserrat">Montserrat<input onChange={this.handleChange} value='montserrat' name="fonts" type="radio"/></p>
                        <p className="p-Pacifico">Pacifico<input onChange={this.handleChange} value='pacifico' name="fonts" type="radio"/></p>
                        <p className="p-Tiny5">Tiny 5<input onChange={this.handleChange} value='tiny-5' name="fonts" type="radio"/></p>
                        <p className="p-Exo2">Exo 2<input onChange={this.handleChange} value='exo-2' name="fonts" type="radio"/></p>
                    </div>
                </div>
            </div>
        )
    }

}

export default Settings;