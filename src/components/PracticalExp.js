import React, {Component} from 'react';

class PracticalExp extends Component{
    render(){
        let {edit,changeHandle,practicalExp} = this.props;
        if(edit.edit){
            return <div>
                <input placeholder='Company Name' data-type="practicalExp" data-key="companyName" value={edit.practicalExp.companyName} onChange={changeHandle} type="text"></input>
                <input placeholder='Position Title' data-type="practicalExp" data-key="positionTitle" value={edit.practicalExp.positionTitle} onChange={changeHandle} type="text"></input>
                <input placeholder='Main Tasks' data-type="practicalExp" data-key="mainTasks" value={edit.practicalExp.mainTasks} onChange={changeHandle} type="text"></input>
                <input placeholder='date from and until when you worked for that company' data-type="practicalExp" data-key="date" value={edit.practicalExp.date} onChange={changeHandle} type="date"></input>
            </div>
        }
        return <div>
            <h3>{practicalExp.companyName}</h3>
            <h3>{practicalExp.positionTitle}</h3>
            <h3>{practicalExp.mainTasks}</h3>
            <h3>{practicalExp.date}</h3>
        </div>
    }
    }

    export default PracticalExp;