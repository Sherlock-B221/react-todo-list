import './App.css';
import {Component} from "react";
import Todos from './Todos';


class App extends Component {
    state = {
        todos: [
            {
                id:  1,
                title: 'Take out the trash',
                completed: false
            },
            {
                id:  2,
                title: 'Take out the trash',
                completed: false
            },
            {
                id:  3,
                title: 'Take out the trash',
                completed: false
            }

        ]
    }
  render() {

    return (

        <div className="App">
          <Todos todos={this.state.todos}></Todos>
        </div>
    );
  }
}

export default App;
