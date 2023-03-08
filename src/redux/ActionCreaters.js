import * as ActionTypes from './ActionTypes';
import {DISHES} from '../shared/dishes';

export const addComment = (dishId, rating, author, comment) => (
    console.log("In addComment, details passed are dishId : "+dishId+" rating : "+rating+" author : "+author+" comment : "+comment),{
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }   
});

export const fetchDishes=() => (dishpatch) => {  //this is a thunk returning a function
    //dispatchEvent(dishesLoading(true));

    setTimeout(()=>{
        dishpatch(addDishes(DISHES));
    },2000);
}

export const dishesLoading=()=> ({       //this action creator returns an action object
    type:ActionTypes.DISHES_LOADING
});

export const dishesFailed= (errmess) => ({       //this action creator returns an action object
    type: ActionTypes.DISHES_FAILED,
    payload:errmess
});

export const addDishes=(dishes) => ({       //this action creator returns an action object
    type:ActionTypes.ADD_DISHES,
    payload: dishes
});
