import React, {Component} from 'react';

class GeneralInfo extends Component{
    render(){
        let {edit,changeHandle,general} = this.props;
        if(edit){
            return <div>
                <input data-type="general" data-key="name" value={edit.general.name} onChange={changeHandle}></input>
                <input data-type="general" data-key="email" value={edit.general.name} onChange={changeHandle}></input>
                <input data-type="general" data-key="phoneNumber" value={edit.general.name} onChange={changeHandle}></input>
            </div>
        }
        return <div>
            <h3>{general.name}</h3>
            <h3>{general.email}</h3>
            <h3>{general.phoneNumber}</h3>
        </div>
    }
}

export default GeneralInfo;