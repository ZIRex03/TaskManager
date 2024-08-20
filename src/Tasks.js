import React from "react";
import Task from "./Task";

class Tasks extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            sortArrow: 'high',
            sortFolder: 'all',
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleChange1 = this.handleChange1.bind(this)
    }

    handleChange (event) {

        this.setState({sortArrow: event.target.value})
    }

    handleChange1 (event) {

        this.setState({sortFolder: event.target.value})
    }

    render(){

        const priorityOrderHigh = {
            high: 1,
            medium: 2,
            low: 3,
        };

        const priorityOrderLow = {
            low: 1,
            medium: 2,
            high: 3,
        };

        let sortedTasks = [];

        if(this.state.sortArrow === 'high'){
            sortedTasks = this.props.tasks.sort((a, b) => {
                return priorityOrderHigh[a.priority] - priorityOrderHigh[b.priority];
            });
        }
        else{
            sortedTasks = this.props.tasks.sort((a, b) => {
                return priorityOrderLow[a.priority] - priorityOrderLow[b.priority];
            });
        }

        

        if (this.state.sortFolder !== 'all') {
            sortedTasks = sortedTasks.filter((el) => el.onFolder === this.state.sortFolder);
        }

       
        
        if(sortedTasks.length > 0){
            return(
                <div className="tasks">
                    <div className="tasks__header">
                        <div>
                            <p className="tasks__p">Задачи</p>
                            <select onChange={this.handleChange1}>
                                <option value='all'>Все</option>
                                {this.props.folders.map((el) => (
                                    <option value={el.folder}>{el.folder}</option>
                                ))}
                            </select>
                        </div>
                        <div className="sort__div">
                            <p>Сортировка</p>
                            <select onChange={this.handleChange}>
                                <option value='high'>По приоритету &darr;</option>
                                <option value='low'>По приоритету &uarr;</option>
                            </select>
                        </div>
                        
                    </div>
                    {sortedTasks.map((el) => (
                        <Task toFolder ={this.props.toFolder} folders={this.props.folders} addPr = {this.props.addPr} dark = {this.props.dark} key={el.id} task = {el} onUpdateTask = {this.props.onUpdateTask} onComplete = {this.props.onComplete}/>
                    ))}
                </div>
            )
        }
        else{
            return(
                <div className="no__task">
                    <p>Нет задач</p>
                </div>
            )
        }
    }
}

export default Tasks;