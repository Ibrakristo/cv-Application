import React,{Component} from 'react';

class Buttons extends Component{
    render(){
        let {edit,onEditButton,onCancelButton,onSubmitButton} = this.props;
        if(edit){
        return <div><button type='submit' >Submit</button>
        <button onClick={onCancelButton}>Cancel</button></div>
        }
        return <button onClick={onEditButton}>Edit</button>
    }

}

export default Buttons;