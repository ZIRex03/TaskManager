import React from "react";

class EditTask extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            newText: this.props.currentText
        };
    }

    handleChange = (event) => {
        this.setState({ newText: event.target.value });
    };

    handleSubmit = () => {
        this.props.onUpdate(this.state.newText);
    };

    render(){

        return(

            <div className="edit__task">
                <input value={this.state.newText} onChange={this.handleChange}/>
                <button onClick={this.handleSubmit} type="button">Редактировать</button>
            </div>
        )
    }
}

export default EditTask;