import React from "react";
import Header from "./Header";
import AddTask from "./AddTask";
import Tasks from "./Tasks";
import ComplTasks from "./ComplTasks";
import Aside from "./Aside";


class App extends React.Component{

    constructor(props){
        super (props)

        this.state = {
            tasks: [],
            complTasks: [],
            darkTheme: false,
            folders: [],
        }

    }

    darkList = [
        '.header',
        '.settings',
        'body',
        '.current__task-button',
        '.current__task-text',
    ];

    componentDidMount() {
        // Получаем данные из локального хранилища
        const storedTasks = localStorage.getItem('taskText');
        const storedTasks2 = localStorage.getItem('complTask');
        const setDark = localStorage.getItem('darkTheme');
        const setFolders = localStorage.getItem('hFolders');
        
        if (storedTasks) {
            // Парсим данные, если они существуют
            this.setState({ tasks: JSON.parse(storedTasks)});
        }

        if (storedTasks2) {
            // Парсим данные, если они существуют
            this.setState({ complTasks: JSON.parse(storedTasks2)});
        }

        if (setDark) {
            // Парсим данные, если они существуют
            this.setState({ darkTheme: JSON.parse(setDark)}); 
        }

        if (setFolders) {
            // Парсим данные, если они существуют
            this.setState({ folders: JSON.parse(setFolders)});
        }
        
    }

    addTask = (taskText) => {

        let lastId = this.state.tasks.reduce((max, task) => (task.id > max ? task.id : max), 0);

        const newTask = {
            id: lastId + 1,
            text: taskText,
            priority: "high",
            onFolder: '',
        };

        const updatedTasks = [...this.state.tasks, newTask];
        this.setState({ tasks: updatedTasks });
        localStorage.setItem('taskText', JSON.stringify(updatedTasks));
    };

    addFolder = (folderName) => {

        const newTask = {
            folder: folderName
        };

        const updatedTasks = [...this.state.folders, newTask];
        this.setState({ folders: updatedTasks });
        localStorage.setItem('hFolders', JSON.stringify(updatedTasks));
    };

    returnTask = (taskText, id) => {

        let lastId = this.state.tasks.reduce((max, task) => (task.id > max ? task.id : max), 0);

        const newTask = {
            id: lastId + 1,
            text: taskText
        };

        const updatedTask = [...this.state.tasks, newTask];
        this.setState ({tasks: updatedTask});
        localStorage.setItem('taskText', JSON.stringify(updatedTask));

        const returnedTask = this.state.complTasks.filter(task => task.id !== id);

        this.setState({complTasks: returnedTask});
        localStorage.setItem('complTask', JSON.stringify(returnedTask));

    }

    completeTask = (taskText, id) => {

        let lastId = this.state.tasks.reduce((max, task) => (task.id > max ? task.id : max), 0);

        const newTask ={
            id: lastId + 1,
            text: taskText
        };

        const updatedTask = [...this.state.complTasks, newTask];
        this.setState({ complTasks: updatedTask });
        localStorage.setItem('complTask', JSON.stringify(updatedTask));

        const updatedTasks = this.state.tasks.filter(task => task.id !== id);
        this.setState({ tasks: updatedTasks }, () => {
            localStorage.setItem('taskText', JSON.stringify(updatedTasks));
        });
    }

    deleteTask = (id) =>{
        const updatedTask = this.state.complTasks.filter(task => task.id !== id);

        this.setState({complTasks: updatedTask}, () => {
            localStorage.setItem('complTask', JSON.stringify(updatedTask));
        })
    }

    onDark = (dark) => {

        const updatedTheme = dark;

        this.setState({darkTheme: updatedTheme});
        localStorage.setItem('darkTheme', JSON.stringify(updatedTheme));

        
    }

    addPriority = (priorityValue, id) => {

        const updatedTask = this.state.tasks.map(task => {
            if(task.id === id){
                return {...task, priority: priorityValue}
            }
            return task;
        });

        this.setState( {tasks: updatedTask});
        localStorage.setItem('taskText', JSON.stringify(updatedTask))

    }

    onUpdateTask = (id, newText) => {
        const updatedTasks = this.state.tasks.map(task => {
            if (task.id === id) {
                return { ...task, text: newText }; 
            }
            return task;
        });
        this.setState({ tasks: updatedTasks }, () => {
            localStorage.setItem('taskText', JSON.stringify(updatedTasks));
        });
    };

    addToFolder = (id, folderName) => {

        const updatedTask = this.state.tasks.map(task => {
            if(task.id === id){
                return {...task, onFolder: folderName};
            }
            return task;
        });

        this.setState({tasks: updatedTask});
        localStorage.setItem('taskText', JSON.stringify(updatedTask));
    }

    deleteFolder = (folderName) => {

        const updatedFolder = this.state.folders.filter(el => el.folder !== folderName);

        const updatedTask = this.state.tasks.map((el) => {
            if(el.onFolder === folderName){
                return {...el, onFolder: ''}
            }
            return el;
        });

        this.setState({folders: updatedFolder});
        this.setState({tasks: updatedTask});

        localStorage.setItem('hFolders', JSON.stringify(updatedFolder));
        localStorage.setItem('taskText', JSON.stringify(updatedTask));
    }

    render(){

        if (this.state.darkTheme) {
            this.darkList.forEach((el) => {
                const element = document.querySelector(el);
                if (element) {
                    element.classList.add('dark');
                }
            });
        }
        else{
            this.darkList.forEach((el) => {
                const element = document.querySelector(el);
                if (element) {
                    element.classList.remove('dark');
                }
            });
        }

        return(
            
            <div className="main__app">

                
                
                <Header onDark = {this.onDark} darkTheme = {this.state.darkTheme}/>

                <div className="tasks__field">

                    <Aside dark = {this.state.darkTheme} deleteFolder = {this.deleteFolder} onFolder = {this.addFolder} folders = {this.state.folders}/>

                    <main>
                        <AddTask addTask = {this.addTask}/>
                        <Tasks toFolder = {this.addToFolder} folders = {this.state.folders} addPr = {this.addPriority} dark = {this.state.darkTheme} tasks = {this.state.tasks} onUpdateTask = {this.onUpdateTask} onComplete = {this.completeTask}/>
                        <ComplTasks dark = {this.state.darkTheme} complTasks = {this.state.complTasks} onDelete = {this.deleteTask} onReturn = {this.returnTask}/>
                    </main>

                </div>
                
            </div>
            
        )
        
    }

    
}

export default App;