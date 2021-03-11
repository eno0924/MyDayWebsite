//this is the main app
import React, {Component} from "react";
import Header from "./components/layout/header";
import Myday from './components/Myday';
import AddPlan from './components/AddPlan';
// import {v4 as uuid} from "uuid";
import axios from "axios";
import './App.css';

class App extends Component
{
  //state
 state = {
   // array objects
   plans:[
     //old code
    //  {
    //    id: uuid(),
    //    title: "Finish 245 Lab ",
    //    completed:false
    //  },
    //  {
    //   id: uuid(),
    //   title: "Finish 210 Project ",
    //   completed:false
    // },
    // {
    //   id: uuid(),
    //   title: "5km Jogging after school",
    //   completed:false
    // }
   ]
 };

 componentDidMount(){
  axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5").then(res => this.setState({plans: res.data}));
 }

 delPlan = (id) =>{

  axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
  this.setState({plans: [...this.state.plans.filter(plan => plan.id !== id)]}));
 }

 AddPlan = (title) => {
   //old code website not deployed
  //  const newPlan = {
  //    id: uuid(),
  //    title,
  //    completed: false
  //  };
  //  this.setState({plans: [...this.state.plans, newPlan] });

  axios.post("https://jsonplaceholder.typicode.com/todos",{
    title,
    completed:false,

  }).then(res=> this.setState({plans: [...this.state.plans, res.data] }));
 }

 //Mark Complete
 markComplete = (id) => {
   this.setState({plans: this.state.plans.map(plan => {
    if(plan.id === id){
      plan.completed = !plan.completed
    }
    return plan;
   })
  })
 }

  render()
  {
   console.log(this.state.plans);
    // this is called Js Component
    return(
      <div className="App">
        <Header />
        <AddPlan AddPlan={this.AddPlan} />
        <Myday plans={this.state.plans} markComplete={this.markComplete} 
        delPlan={this.delPlan} />
      </div> 
    )
  }
}

export default App;
