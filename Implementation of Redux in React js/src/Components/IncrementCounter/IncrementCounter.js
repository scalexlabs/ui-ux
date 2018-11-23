import React from 'react';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {actions} from '../../constants/actions'
const IncrementCounter =(props)=>{
    return(
        <Button bsStyle="primary" onClick={props.OnIncrementHandler} style={{padding:"10px",width:"150px",margin: "10px"}}>Increment Counter</Button>
    );
}

/* const mapStateToProps =(state)=>{

} */

const mapDispatchToProps=(dispatch)=>{
    return{
        OnIncrementHandler : ()=> dispatch({type: actions.INCREMENT_COUNTER})
    };
}

export default connect(null,mapDispatchToProps)(IncrementCounter);