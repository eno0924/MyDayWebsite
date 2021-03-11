import React, { Component } from 'react'

export class AddPlan extends Component {

state = {
 title: ""
}

onSubmit = (e) => {
e.preventDefault();
this.props.AddPlan(this.state.title);
// this.setState({title: e.target.value});
this.setState({title: ""});
};

onChange = (e) =>{
 this.setState({[e.target.name]: e.target.value })
}
 render() {
  return (
   <form onSubmit={this.onSubmit} className="addPlanForm">
     <input type="text" name="title" placeholder="Got a new plan today?" onChange={this.onChange} className="txtAddPlan" value={this.state.title}/>
     <input type="submit" value="Create Plan" className="btnAddPlan"/>
   </form>
  )
 }
}

export default AddPlan
