import React,{Component} from 'component';

class Buttons extends Component{
    render(){
        let {edit,onEditButton,onCancelButton,onSubmitButton} = this.props;
        if(edit){
        return <div><button onClick={onSubmitButton}>Submit</button>
        <button onClick={onCancelButton}>Cancel</button></div>
        }
        return <div onClick={onEditButton}>Edit</div>
    }

}