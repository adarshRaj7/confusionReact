import React,{ Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { connect } from 'react-redux';
import { postComment ,fetchComments,fetchDishes,fetchPromos,fetchLeaders} from '../redux/ActionCreaters';
import { actions } from 'react-redux-form';
import {TransitionGroup,CSSTransition} from 'react-transition-group';

const mapStateToProps=state=>{
  return {
    dishes:state.dishes,
    comments:state.comments,
    promotions:state.promotions,
    leaders:state.leaders
  }
}

const mapDishpachToProps= (dispatch) =>({
  postComment: (dishId,rating,author,comment) => dispatch(postComment(dishId, rating,author,comment)),
  fetchDishes:()=>{dispatch(fetchDishes())},
  resetFeedbackForm: () => {dispatch(actions.reset('feedback'))},
  fetchComments:()=>{dispatch(fetchComments())},
  fetchPromos:()=>{dispatch(fetchPromos())},
  fetchLeaders:()=>{dispatch(fetchLeaders())}

});

class Main extends Component {

constructor(props)
{
  super(props);
}
componentDidMount(){
  this.props.fetchDishes();
  this.props.fetchComments();
  this.props.fetchPromos();
  this.props.fetchLeaders();

}

  render(){
    const Homepage=()=>{
      console.log("maa chuda:",this.props.dishes.dishes.filter((dish)=>dish.featured)[0])
      console.log("In main component, promotions are :",this.props.promotions.promotions.filter((promotion)=>promotion.featured)[0])
      
      return (
        <>
        {console.log("maa ka bhosda")}
        <Home dish={this.props.dishes.dishes.filter((dish)=>dish.featured)[0]}
              dishesLoading={this.props.dishes.isLoading}
              dishesErrMess={this.props.dishes.errMess}
              promotion={this.props.promotions.promotions.filter((promotion)=>promotion.featured)[0]}
              promosLoading={this.props.promotions.isLoading}
              promosErrMess={this.props.promotions.errMess}
              leader={this.props.leaders.leaders.filter((leader)=>leader.featured)[0]}
              leadersLoading={this.props.leaders.isLoading}
              leadersErrMess={this.props.leaders.errMess}>
        </Home>
        </>
      );
    }

    console.log("In Main component, props recieved are "+this.props.dishes.dishes);
    const DishWithId=({match}) =>{
      return(
        <DishDetail 
        dish={this.props.dishes.dishes.filter((dish)=> dish.id===parseInt(match.params.dishId,10))[0]}
        isLoading={this.props.dishes.isLoading}
        errMess={this.props.dishes.errMess}
        comments={this.props.comments.comments.filter((comment)=>comment.dishId=== parseInt(match.params.dishId,10))}
        CommentsErrMess={this.props.comments.errMess}
        postComment={this.props.postComment}></DishDetail>
        ) ;
    };

    return (
      <div>
        <Header/>
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>          
          <Switch>
            <Route path="/home" component={Homepage}></Route>
            <Route exact path="/menu" component={()=><Menu dishes={this.props.dishes}/>}></Route>
            <Route path="/menu/:dishId" component={DishWithId}></Route>
            <Route exact path='/contactus' component={()=><Contact resetFeedbackForm={this.props.resetFeedbackForm}></Contact>}></Route>
            <Route exact path='/aboutus' component={()=><About leaders={this.props.leaders}></About>}></Route>
            <Redirect to="/home"></Redirect>
          </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer/>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDishpachToProps)(Main));
