import React from "react";

class AddPriority extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            priorityValue: "high",
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (event) {
        this.setState({priorityValue: event.target.value})
    }

    setPriority = () => {
        this.props.togglePriority()
        this.props.setNP(this.state.priorityValue)
        this.props.addPr(this.state.priorityValue, this.props.task.id)
    }

    render(){
        return(
            <div className="priority">
                <p>Установить приоритет :</p>
                <select onChange={this.handleChange}>
                    <option value='high'>Высокий</option>
                    <option value='medium'>Средний</option>
                    <option value='low'>Низкий</option>
                </select>
                <button onClick={this.setPriority} type="button">Установить</button>
            </div>
        )
    }
}

export default AddPriority;