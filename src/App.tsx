import React, {useState} from 'react';


const App: React.FC = () => {
    const [task, setTask] = useState<string>("");
    return (
        <div className="App">
            <div className="header">
                <div className="inputContainer">
                    <input type="text" name="task" placeholder="Add a task"/>
                    <input type="number" name="deadline" placeholder="Set a deadline (days)"/>
                </div>
                <button>Add</button>
            </div>
            <div className="todoList"></div>
        </div>
    );
}

export default App;
