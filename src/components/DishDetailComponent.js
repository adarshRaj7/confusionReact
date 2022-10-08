import React,{ Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, List } from "reactstrap";
import App from "../App";
import "../App.css"
class DishDetail extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            selectDish: this.props.dish
        }

    }
        
    renderDish(dish)
    {
        return(
                <Card >
                    <CardImg  width="100%" src={this.props.dish.image} alt={this.props.dish.name}></CardImg>
                    <CardBody>
                        <CardTitle><h4>{this.props.dish.name}</h4></CardTitle>
                        <CardText>{this.props.dish.description}</CardText>
                    </CardBody>
                </Card>
        );
    }

    renderComments(commentsprm)
    {
        if(commentsprm==null)
        {
            return (<div></div>);
        }
        else
        {
        const cmmts=this.props.dish.comments.map((text)=>
        {
            return (
                <List className="list-unstyled">
                    <li>{text.comment}</li>
                    <li>-- {text.author} , {text.date}</li>
                </List>
            );
        });
        return (
            <div>{cmmts}</div>
        );
    }}

    render()
    {
        
        if(this.props.dish!=null)
        {
        return (
            <div className="row">
            <div className="col-12 col-md-5 mt-1 m-1">
                {this.renderDish(this.props.dish)}
            </div>
            <div className="col-12 col-md-5 mt-1">
                <h4>Comments</h4>
                {this.renderComments(this.props.dish.comments)}
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
}

export default DishDetail;