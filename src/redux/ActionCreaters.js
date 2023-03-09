import * as ActionTypes from './ActionTypes';
import {DISHES} from '../shared/dishes';
import { baseUrl } from '../shared/baseUrl';

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

export const fetchDishes=() => (dispatch) => {  //this is a thunk returning a function
    //dispatchEvent(dishesLoading(true));

    return fetch(baseUrl+'dishes')
        .then(response=> response.json())
        .then(dishes=>dispatch(addDishes(dishes)));
        
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

export const fetchComments=() => (dispatch) => {  //this is a thunk returning a function
  
    return fetch(baseUrl+'comments')
        .then(response=> response.json())
        .then(comments=>dispatch(addComments(comments)));
        
}

export const commentsFailed= (errmess) => ({       //this action creator returns an action object
    type: ActionTypes.COMMENTS_FAILED,
    payload:errmess
});

export const addComments=(comments) => ({       //this action creator returns an action object
    type:ActionTypes.ADD_COMMENTS,
    payload: comments
});


export const fetchPromos=() => (dispatch) => {  //this is a thunk returning a function
    //dispatchEvent(promosLoading(true));

    return fetch(baseUrl+'promotions')
        .then(response=> response.json())
        .then(promos=>dispatch(addPromos(promos)));
        
}

export const promosLoading=()=> ({       //this action creator returns an action object
    type:ActionTypes.PROMOS_LOADING
});

export const promosFailed= (errmess) => ({       //this action creator returns an action object
    type: ActionTypes.PROMOS_FAILED,
    payload:errmess
});

export const addPromos=(promos) => ({       //this action creator returns an action object
    type:ActionTypes.ADD_PROMOS,
    payload: promos
});

