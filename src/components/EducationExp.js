import React, {Component} from 'react';

class EducationExp extends Component{
    render(){
        let {edit,changeHandle,educationExp} = this.props;
        if(edit.edit){
            return <div>
                <input placeholder='School name' data-type="educationExp" data-key="schoolName" value={edit.educationExp.schoolName} onChange={changeHandle} type="text"></input>
                <input placeholder='Title of Study' data-type="educationExp" data-key="titleOfStudy" value={edit.educationExp.titleOfStudy} onChange={changeHandle} type="text"></input>
                <input placeholder='date of study' data-type="educationExp" data-key="dateOfStudy" value={edit.educationExp.dateOfStudy} onChange={changeHandle} type="date"></input>
            </div>
        }
        return <div>
            <h3>{educationExp.schoolName}</h3>
            <h3>{educationExp.titleOfStudy}</h3>
            <h3>{educationExp.dateOfStudy}</h3>
        </div>
    }
    }

    export default EducationExp;