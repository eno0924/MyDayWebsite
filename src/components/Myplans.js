import React, { Component } from 'react'
import PropTypes from "prop-types";

//Myplans Class
export class Myplans extends Component {

 //styles
myStyle = () =>{
 return {
  background:"Whitesmoke",
  padding: "10px",
  borderBottom: "2px #ccc dotted",
  textDecoration: this.props.plan.completed ? "line-through" : "none", 
  fontSize: "25px",
  color: "black"
 }
}

 render() {

  //deconstruct
  const {id, title} = this.props.plan;

  return (
   <div style={this.myStyle()}>
     <p>
      <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}
       /> {" "}
      {title}
      <button className="btnDelete"  onClick={this.props.delPlan.bind(this,id)}>Delete</button>
      </p>
   </div>
  )
 }
}

//PropTypes
Myplans.propTypes = {
 //passing object
 plan: PropTypes.object.isRequired
};
//Style for the delete button need to be outside the class but not using atm
// const btnStyle = {
//  background: "Tomato",
//  color: "black",
//  border: "none",
//  padding: "5px 10px",
//  cursor: "pointer",
//  float: "right"
// }
export default Myplans
