import React, { Component } from "react";
import GeneralInfo from "./components/GeneralInfo";
import EducationExp from "./components/EducationExp";
import PracticalExp from "./components/PracticalExp";
import Buttons from "./components/Buttons";
class App extends Component {
  constructor() {
    super();

    this.state = {
      edit: {
        edit: true,
        general: { name: "", email: "", phoneNumber: "" },
        educationExp: { schoolName: "", titleOfStudy: "", dateOfStudy: "" },
        practicalExp: {companyName: "", positionTitle: "", mainTasks: "", date: "",}},
      general: { name: "", email: "", phoneNumber: "" },
      educationExp: { schoolName: "", titleOfStudy: "", dateOfStudy: "" },
      practicalExp: {companyName: "", positionTitle: "",mainTasks: "", date: "",},
    };
    this.onEditButton = this.onEditButton.bind(this);
    this.onSubmitButton = this.onSubmitButton.bind(this);
    this.onCancelButton = this.onCancelButton.bind(this);
    this.changeHandle = this.changeHandle.bind(this);
  }

  onEditButton(e) {
    this.setState({edit:{
      edit:true,
      general:Object.assign({},this.state.general),
      educationExp:Object.assign({},this.state.educationExp),
      practicalExp:Object.assign({},this.state.practicalExp),
    }})
  }
  onSubmitButton(e) {
    this.setState({
      edit:{edit:false,
        general:this.state.edit.general,
        educationExp:this.state.edit.educationExp,
        practicalExp:this.state.edit.practicalExp,},
        general:this.state.edit.general,
        educationExp:this.state.edit.educationExp,
        practicalExp:this.state.edit.practicalExp,
    })
  }
  onCancelButton(e) {
    this.setState({
      edit:{edit:false,
        general:this.state.general,
        educationExp:this.state.educationExp,
        practicalExp:this.state.practicalExp,},
    })
  }
  changeHandle(e) {
    const type = e.target.getAttribute("data-type");
    const key = e.target.getAttribute("data-key");
    const value = e.target.value;
    this.setState((state,props)=>{
      let obj = {edit:{
        edit:true,
        general:this.state.edit.general,
        educationExp:this.state.edit.educationExp,
        practicalExp:this.state.edit.practicalExp,
      },
};
      obj.edit[type][key] = value;
        return obj;
    })
  }

  render() {
    return (
      <div>
        <GeneralInfo
          edit={this.state.edit}
          changeHandle={this.changeHandle}
          general={this.state.general}
        />
        <EducationExp
          edit={this.state.edit}
          educationExp={this.state.educationExp}
          changeHandle={this.changeHandle}
        />
        <PracticalExp
          edit={this.state.edit}
          practicalExp={this.state.practicalExp}
          changeHandle={this.changeHandle}
        />
        <Buttons
          edit={this.state.edit.edit}
          onEditButton={this.onEditButton}
          onCancelButton={this.onCancelButton}
          onSubmitButton={this.onSubmitButton}
        />
      </div>
    );
  }
}
export default App;
