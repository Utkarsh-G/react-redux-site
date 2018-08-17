import React from 'react';
import {connect} from 'react-redux';
import {mutations} from './store';

const TodoInputComponent = ({submitTodo}) => (
    <form onSubmit={submitTodo}>
        <div className="form-group">
        <input type ="text" placeholder="Fill me!"/>
        <button className="btn btn-primary" type="submit"> Add new Fest </button>
        </div>
    </form>
);

const mstp = () =>({});
const mdtp = (dispatch) =>({
    submitTodo(e){
        e.preventDefault();//stop the form from submitting, reloading page etc.
        let input = e.target.elements[0];
        let value = input.value;
        if(value){
            dispatch(mutations.createTodo(value));
            input.value = "";
        }
    }
});

export default connect(mstp,mdtp)(TodoInputComponent);