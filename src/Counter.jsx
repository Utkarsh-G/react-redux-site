import React from 'react';
import {connect} from 'react-redux';

//capital letter filename, component name. 

const Counter = ({todoCount}) =>(
    <div> You can potentially attend {todoCount} food festivals!</div>
);

const mapStateToProps = state => ({
    todoCount:state.todos.length
});

export default connect(mapStateToProps)(Counter);