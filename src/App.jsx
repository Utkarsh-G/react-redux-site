
import React from 'react'; //needed in every jsx file?
import {connect} from 'react-redux'; //Once Provider is providing a store to our
import CounterWrapper from './Counter';
// component, it needs 2 connect functions to get the data from redux
import {mutations} from './store';
import ShowCompleteToggleWrapper from "./ShowCompleteToggle";
import TodoInputWrapper from "./TodoInput";

export const App = ({todos, doTodo, deleteTodo})=> (
    <div className="container">
        This is the application itself!
        <CounterWrapper />
        <TodoInputWrapper/>
        <ShowCompleteToggleWrapper/>
        <div>
            <ul className="list-group">
                {todos.map(datum=>(
                    <li key = {datum.id} className="list-group-item">
                        
                        {datum.name} - {datum.done ? `Done!` : <button className="btn btn-primary" onClick={()=>doTodo(datum.id)}> Do </button>}
                        <button className="btn btn-danger" onClick={()=>deleteTodo(datum.id)}>Del</button>
                    </li>
                )
                )}
            </ul>
        </div>
    </div>
);

//const mapStateToProps = (state)=>({todos:state.todos}); //brings state data in
const mapStateToProps = (state)=>({
    todos:state.todos.filter(todo=> !state.showComplete ? true: !todo.done)
}); //brings state data in

const mapDispatchToProps = (dispatch)=>({
    doTodo(id){
        const action = mutations.completeToDo(id);
        console.log("Now completing todo", id, action);
        dispatch(action);
    },
    deleteTodo(id){
        console.log("Delete todo", id);
        dispatch(mutations.deleteTodo(id));
    }
}); //sends actions out

export const AppWrapper = connect(mapStateToProps, mapDispatchToProps)(App);//App: component to be wrapped