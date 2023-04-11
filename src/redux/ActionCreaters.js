import * as ActionTypes from './ActionTypes';
import {DISHES} from '../shared/dishes';
import { baseUrl } from '../shared/baseUrl';

export const addFeedback=(feedback)=>({
    type:ActionTypes.ADD_FEEDBACK,
    payload: feedback
});
export const postFeedback=(firstname, lastname, telnum, email,agree ,contactType,message)=>(dispatch)=>{
    const newFeedback={
        firstname:firstname,
        lastname: lastname, 
        telnum: telnum, 
        email: email,
        agree :agree ,
        contactType:contactType,
        message:message

    }
    newFeedback.date=new Date().toISOString();
    return fetch(baseUrl+"feedback",{
                                     method:"POST",
                                     body:JSON.stringify(newFeedback),
                                     headers:{"Content-Type":"application/json"},
                                     credentials:'same-origin'
                                    }
                )
                .then(response=>{
                        console.log("In post Feedback function, response is "+response);
                        if(response.ok)
                        {
                            // alert("Thank you for your feedback! \n "+response.ok);
                            console.log("In action Creater, response of a successful post is "+response);
                            console.log(response);
                            return response;
                        }
                        else
                        {
                            var error=new Error('Error '+response.status+': '+response.statusText);
                            error.response=response;
                            throw error;
                        }
                    },
                    error=>{
                        var errmess=new Error(error.message);
                        throw errmess;
                    })
                    .then(response=>response.json())
                    .then(response=>dispatch(addFeedback(response)))
                    .catch(error=>{
                                    console.log('Post Feedbacks ',error.message);
                                    alert('Your feedback Could not be Posted. '+error.message);    
                                })
}
export const addComment = (comment) => (
{    type: ActionTypes.ADD_COMMENT,
    payload:comment 
});
export const postComment=(dishId, rating, author, comment)=>(dispatch)=>{
    const newComment={dishId:dishId,
                      rating:rating,
                      author:author,
                      comment:comment}
                      console.log(dishId+" "+rating);
    newComment.date=new Date().toISOString();
    return fetch (baseUrl+'comments',{
                  method:'POST',
                  body:JSON.stringify(newComment),
                  headers:{'Content-Type':'application/json'},
                  credentials:'same-origin'})
                  .then(response=> {
                    console.log(response);
                    if(response.ok)
                    {
                        return response;
                    }
                    else{
                        var error=new Error('Error '+response.status+': '+response.statusText);
                        error.response=response;
                        throw error;
                    }
                },
                error=>
                {
                    var errmess=new Error(error.message);
                    throw errmess;
                })        
                .then(response=> response.json())
                .then(response=>dispatch(addComment(response)))
                .catch(error=>{console.log('Post Comments',error.message);
                                alert('Your comment could not be posted \n Error: '+error.message);})

            }
            
export const fetchComments=() => (dispatch) => {  //this is a thunk returning a function
  
    return fetch(baseUrl+'comments')
        .then(response=> {
        if(response.ok)
        {
            return response;
        }
        else{
            var error=new Error('Error '+response.status+': '+response.statusText);
            error.response=response;
            throw error;
        }
    },
    error=>
    {
        var errmess=new Error(error.message);
        throw errmess;
    })
        .then(response=> response.json())
        .then(comments=>dispatch(addComments(comments)))
        .catch(error=>dispatch(commentsFailed(error.message)));
        
}
export const fetchFeedbacks=()=>(dispatch)=>{
    return fetch(baseUrl+'feedback')
    .then(response=>{
        if(response.ok)
        {
            return response;
        }
        else{
            var error=new Error('Error '+response.status+": "+response.statusText);
            error.response=response;
            throw error;
        }
    },
    error=>
    {
        var errmess=new Error(error.message);
        throw errmess;
    })
    .then(response=> response.json())
    .then(feedbacks=>dispatch(addFeedbacks(feedbacks)))
    .catch(error=>dispatch(feedbacksFailed(error.message)));
}
export const commentsFailed= (errmess) => ({       //this action creator returns an action object
    type: ActionTypes.COMMENTS_FAILED,
    payload:errmess
});
export const feedbacksFailed=(errmess)=>({
    type:ActionTypes.FEEDBACKS_FAILED,
    payload:errmess
});

export const addComments=(comments) => ({       //this action creator returns an action object
    type:ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const addFeedbacks=(feedbacks)=>({
    type:ActionTypes.ADD_FEEDBACKS,
    payload:feedbacks
});

export const fetchDishes=() => (dispatch) => {  //this is a thunk returning a function
    //dispatchEvent(dishesLoading(true));

    return fetch(baseUrl+'dishes')
        .then(response=> {
            if(response.ok)
            {
                return response;
            }
            else{
                var error=new Error('Error '+response.status+': '+response.statusText);
                error.response=response;
                throw error;
            }
        },
        error=>
        {
            var errmess=new Error(error.message);
            throw errmess;
        })
        .then(response=> response.json())
        .then(dishes=>dispatch(addDishes(dishes)))
        .catch(error=>dispatch(dishesFailed(error.message)));
        
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

export const fetchPromos=() => (dispatch) => {  //this is a thunk returning a function
    //dispatchEvent(promosLoading(true));

    return fetch(baseUrl+'promotions')
        .then(response=> {
        if(response.ok)
        {
            return response;
        }
        else{
            var error=new Error('Error '+response.status+': '+response.statusText);
            error.response=response;
            throw error;
        }
    },
    error=>
    {
        var errmess=new Error(error.message);
        throw errmess;
    })
        .then(response=> response.json())
        .then(promos=>dispatch(addPromos(promos)))
        .catch(error=>dispatch(promosFailed(error.message)));
        
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


export const fetchLeaders=() => (dispatch) => {  //this is a thunk returning a function
    //dispatchEvent(promosLoading(true));

    return fetch(baseUrl+'leaders')
        .then(response=> {
        if(response.ok)
        {
            return response;
        }
        else{
            var error=new Error('Error '+response.status+': '+response.statusText);
            error.response=response;
            throw error;
        }
    },
    error=>
    {
        var errmess=new Error(error.message);
        throw errmess;
    })
        .then(response=> response.json())
        .then(leaders=>dispatch(addLeaders(leaders)))
        .catch(error=>dispatch(leadersFailed(error.message)));
        
}

export const leadersLoading=()=> ({       //this action creator returns an action object
    type:ActionTypes.LEADERS_LOADING
});

export const leadersFailed= (errmess) => ({       //this action creator returns an action object
    type: ActionTypes.LEADERS_FAILED,
    payload:errmess
});

export const addLeaders=(leaders) => ({       //this action creator returns an action object
    type:ActionTypes.ADD_LEADERS,
    payload: leaders
});

