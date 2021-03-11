import React, {Component} from "react";
import Myplans  from "./Myplans";
import PropTypes from "prop-types";

// this is called Js Component
class Myday extends Component
{
  render()
  {
   //properties
   // console.log(this.props.plans)
   //this property is from app.js
    return this.props.plans.map(plan => <Myplans key={plan.id} plan={plan} 
     markComplete ={this.props.markComplete} delPlan={this.props.delPlan}
     />);
  }
}

//PropTypes
Myplans.propTypes = {
 //passing object
 plan: PropTypes.object.isRequired
};

export default Myday;
