import React from "react";
import { Card, CardImg, Breadcrumb, BreadcrumbItem,  CardImgOverlay, CardText, CardBody, CardTitle, List } from "reactstrap";
import "../App.css";
import {Link} from 'react-router-dom';
import Comment from "./CommentFormComponent";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";

    function RenderDish({dish})
    {
        return(
            <div className="col-12 col-md m-1">
                    <Card >
                        <CardImg  src={baseUrl+dish.image} alt={dish.name}></CardImg>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
     }
    // const renderComments=(props) => {

    
    //     // const renderComments=props.comments.map((dish)=> {
    //         return (
    //             // <li key={comment.id} className="col-12 col-md-5 mt-1">
    //             //     <p>{comment.comment}</p>
    //             //     <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month:'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
    //             // </li>
    //             <ul className="list-unstyled">
    //                      {this.props.comment.map((comment)=>{
    //                         return (
    //                             <div>
    //                             <h4>sdf</h4>
    //                             <li key={comment.id}>
    //                                 <p>{comment.comment}</p>
    //                                 <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month:'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
    //                             </li></div>
    //                         );
    //                     })}
    //                 </ul>
    //         );
    //     // });
    // }

    function RenderComments({comments,postComment,dishId})
    {
            return (
                // <div>{cmmts}</div>
                <div className="col-12 m-1">
                    <ul className="list-unstyled">
                        {comments.map((comment)=>{
                            return (
                                <div>
                                <li key={comment.id}>
                                    <p>{comment.comment}</p>
                                    <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month:'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                </li></div>
                            );
                        })}
                    </ul>
                    <Comment dishId={dishId} postComment={postComment}/>
                </div>
            );
        }

    const DishDetail=(props) =>
    {console.log(props.dish);
        console.log("Inside DishDetail Component");
        if(props.isLoading)
        {
            return (
                <div className="container">
                    <div className="row">
                        <Loading/>
                    </div>
                </div>
            );
        }
        else if(props.errMess)
        {
            
            return (
                <div className="container">
                    <div className="row">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if(props.dish!=null)
        {
        return (
            <div className="container">
                <div className="row ">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to='/menu'>Menu</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr/>
                    </div>
                </div>
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <RenderDish dish={props.dish}/>
                        </div>
                        
                        <div className="col-12 col-lg-6">
                            <h4> Comments </h4>
                              <RenderComments comments={props.comments}
                                    postComment={props.postComment}
                                    dishId={props.dish.id}/> 
                        </div>
                    </div>
            </div>
        );}
        else
        {
            return (
                <div><h1>vbhsbhubu</h1></div>
            );
        }
    }


export default DishDetail;