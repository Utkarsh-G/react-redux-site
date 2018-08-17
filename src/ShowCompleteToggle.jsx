import React from "react";
import {connect} from "react-redux";
import {mutations} from "./store";

const ShowCompleteToggle = ({showComplete, changeShowComplete, shuffle, todos})=>(
    <div className="form-group">
        <label>
            Show completed items? <input type="checkbox" checked={showComplete} onChange={changeShowComplete}/>
        </label>
        <label>
            <button className="btn btn-primary" onClick={()=>shuffle(todos)}> Shuffle the Fests! </button>
        </label>
    </div>
)

//mstp : map state to props
const mstp = state =>({showComplete:state.showComplete}, {todos: state.todos});

const mdtp = (dispatch)=>({
    changeShowComplete(e){
        const checked = e.target.checked;
        const action = mutations.toggleShowComplete(checked);
        console.log(checked);
        dispatch(action);
    },
    shuffle(todos){
        dispatch(mutations.shuffle(todos));
    }
});

export default connect(mstp,mdtp)(ShowCompleteToggle);