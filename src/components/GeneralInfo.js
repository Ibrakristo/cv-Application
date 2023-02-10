import React, {Component} from 'react';

class GeneralInfo extends Component{
    render(){
        let {edit,changeHandle,general} = this.props;
        if(edit.edit){
            return <div>
                <input placeholder='name' data-type="general" data-key="name" value={edit.general.name} onChange={changeHandle} type="text"></input>
                <input placeholder='email' data-type="general" data-key="email" value={edit.general.email} onChange={changeHandle} type="email"></input>
                <input placeholder='phone number' data-type="general" data-key="phoneNumber" value={edit.general.phoneNumber} onChange={changeHandle} type="tel"></input>
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