
import React , { Component} from 'react';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }

    componentWillUpdate() {
        console.log('component will update')
    }
    render(){
        return(
            <div className="modal">
       <p> Modalcomponent </p> 

        </div>
    
        )
        }

} 

export default Modal;