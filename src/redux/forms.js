import * as ActionTypes from './ActionTypes';

export const InitialFeedback=(state = {errMess:null,feedbacks:[]}, action) => {
    switch(action.type){
        case ActionTypes.ADD_FEEDBACKS:
            return {...state, isLoading:false, errMess:null, feedbacks:action.payload};

            case ActionTypes.FEEDBACKS_FAILED:
                return {...state, isLoading:false, errMess:action.payload,feebacks:[]};
    
        case ActionTypes.ADD_FEEDBACK:
                var feedback = action.payload;
                console.log("added");
                alert("Thank You for your Feedback!\n"+JSON.stringify(feedback));
                console.log(feedback);
                
                
                return {...state,feedbacks:state.feedbacks.concat(feedback)};
        default:
            return state;
    }
}