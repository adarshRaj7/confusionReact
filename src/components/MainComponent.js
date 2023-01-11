import React,{ Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Switch, Route, Redirect} from 'react-router-dom';
import Contact from './ContactComponent';

class Main extends Component {

constructor(props)
{
  super(props);
  this.state={
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
  };
}




  render(){
    const Homepage=()=>{
      return (
        <Home dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
              promotion={this.state.promotions.filter((promo)=>promo.featured)[0]}
              leader={this.state.leaders.filter((leader)=>leader.featured)[0]}>

        </Home>
      );
    }

    const DishWithId=({match}) =>{
      return(
        <DishDetail 
        dish={this.state.dishes.filter((dish)=> dish.id===parseInt(match.params.dishId,10))[0]}
        comments={this.state.comments.filter((comment)=>comment.dishId=== parseInt(match.params.dishId,10))}></DishDetail>
        ) ;
    };

    return (
      <div>
        <Header/>
        <Switch>
          <Route path="/home" component={Homepage}></Route>
          <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}/>}></Route>
          <Route path="/menu/:dishId" component={DishWithId}></Route>
          <Route exact path='/contactus' component={Contact}></Route>
          <Redirect to="/home"></Redirect>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default Main;
