import React from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, List } from "reactstrap";
import "../App.css"
     
    function RenderDish({dish})
    {
        return(
                <Card >
                    <CardImg  width="100%" src={dish.image} alt={dish.name}></CardImg>
                    <CardBody>
                        <CardTitle><h4>{dish.name}</h4></CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
    }

    function RenderComments({comments})
    {
        if(comments==null)
        {
            return (<div></div>);
        }
        else
        {
            const cmmts=comments.map((text)=>
            {
                    return (
                    <ul key={text.id} className="list-unstyled">
                        <li >{text.comment}</li>
                        <li >-- {text.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month:'short', day: '2-digit'}).format(new Date(Date.parse(text.date)))}</li>
                    </ul>
                );
            });
            return (
                <div>{cmmts}</div>
            );
        }
    }

    const DishDetail=(props) =>
    {

        if(props.dish!=null)
        {
            
        console.log(props.dish.comments);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 mt-1 m-1">
                        <RenderDish dish={props.dish}/>
                    </div>
                    <div className="col-12 col-md-5 mt-1">
                        <h4>Comments</h4>
                        <RenderComments comments={props.dish.comments}/>
                    </div>
                </div>
            </div>
        );}
        else
        {
            return (
                <div></div>
            );
        }
    }


export default DishDetail;