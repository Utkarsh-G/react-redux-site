//will export our redux store
import {createStore, combineReducers} from 'redux';
import uuid from "uuid";
import _ from 'lodash';

const preloadedState = {
    showComplete:true,
    todos:[
        {
            id: uuid(),
            name:"Veggie Food Fest",
            done:false

        },
    {
        id:uuid(),
        name: "Taco Fest",
        done:true
    },
    {
        id: uuid(),
        name: "Spicy Food Fest",
        done:false
    },
    {
        id:uuid(),
        name: "Carribana",
        done:true
    }
    ]
};

export const mutations = { //mutations are also called action creators.
    completeToDo(id){
        return ({id, type:"COMPLETE_TODO"})
    },
    toggleShowComplete(){
        return{type:"TOGGLE_SHOW_COMPLETE"}
    },
    createTodo(name)
    {
        const id = uuid(); //notice that the random number generation happens here. NOT in a reducer which must be idempotent
        return {id, type:"CREATE_TODO", name}; 
    },
    deleteTodo(id)
    {
        return {id, type:"DELETE_TODO"};
    },
    shuffle(todos) // again, have to shuffle here instead of reducer. reducer must be idempotent
    {
        const shuffled = _.shuffle(todos);
        console.log(shuffled);
        return ({type:"SET_TODOS", todos:shuffled});
    }
};

//Reducer: takes a state, action and returns a state; pure function;
/*const reducer = (state, action)=>{
    console.log(action);
    switch(action.type)
    {
        case "COMPLETE_TODO":
            console.log("Processing action", action.type, state );
            const todos = state.todos;
            const newTodos = todos.map(todo=> todo.id === action.id ? {...todo, done:true}:todo);
            const newState = {
                ...state,
                todos:newTodos
            }
            return newState;

        case "TOGGLE_SHOW_COMPLETE":
            return{
                ... state,
                showComplete: !state.showComplete
            }
    }
    return state;
} */

const reducer2 = combineReducers({
    todos(todos = [], action){ //default values needed
        switch(action.type)
        {
            case "COMPLETE_TODO":
                const newTodos = todos.map(todo=> todo.id === action.id ? {...todo, done:true}:todo);
                return newTodos;
            case "CREATE_TODO":
                return [...todos, {id:action.id, name:action.name, done: false} ];
            case "DELETE_TODO":
                return todos.filter(todo=>todo.id === action.id ? false : true);
            case "SET_TODOS":
                return action.todos;
        }
        return todos;
    },

    showComplete(showComplete = true, action){
        switch(action.type)
        {
            case "TOGGLE_SHOW_COMPLETE":
                return !showComplete
        }
        return showComplete;
    }
});

export const store = createStore(reducer2,preloadedState);

//there. now we have a store. Where does it go?

