import React, { Component } from "react";
import {Badge,Modal, Button, ModalHeader, ModalBody, Navbar,NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, FormGroup, Label, Input, Form, Row, Col } from 'reactstrap';
import { addComment } from "../redux/ActionCreaters";
import {Control, LocalForm, Errors} from 'react-redux-form'
import "../App.css";
const required=(val)=>val&&val.length;
const maxLength=(len)=> (val)=>!(val) || (val.length<=len) ;
const minLength=(len)=>(val)=>(val) && (val.length>=len) ;
const value={rating:0,author:"testauthor", comment:"testcomment"};

class Comment extends Component{
    constructor(props)
    {
        super(props); 
        this.state=
        {
            isModalOpen : false
        };
        this.handleSubmit=this.handleSubmit.bind(this);
        this.toggleModal=this.toggleModal.bind(this);
    }
    handleSubmit(values){
        this.toggleModal();
        console.log("handleSubmit called from inside CommentForm component with values : ")
        console.log(values);
        this.props.addComment(this.props.dishId,values.rating, values.author,values.comment);
    }
    toggleModal(){
        console.log(this.state.isModalOpen);
        console.log("Button clicked");
        this.setState(
        {   
            isModalOpen:!this.state.isModalOpen
        });

    }
    
    render()
    {
        return (
            <div>
                <Button className="submit-btn " onClick={this.toggleModal}>
                    <span className="fa fa-lg fa-pencil"></span><span className="submit"> Submit Comment</span>
                </Button>

                <Modal fade={false} className="commentModal" isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <div className="col-12">
                            <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                                <Row className="form-group">
                                    <Label htmlFor="rating" className="ml-3 col-form-label">Rating</Label>
                                    <Col xs={12}>
                                        <Control.select
                                            model=".rating"
                                            className="form-control"
                                            name="rating">
                                                <option>5</option>
                                                <option>4</option>
                                                <option>3</option>
                                                <option>2</option>
                                                <option>1</option>
                                            </Control.select>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="author" className="ml-3 col-form-label">Your Name</Label>
                                    <Col xs={12}>
                                        <Control.text 
                                            model=".author"
                                            className="form-control"
                                            id="author"
                                            name="author"
                                            placeholder="Your Name"
                                            validators={{
                                                required,
                                                minLength:minLength(3),
                                                maxLength:maxLength(15)
                                            }}></Control.text>
                                            <Errors
                                                className="text-danger"
                                                model=".author"
                                                show="touched"
                                                messages={{
                                                    required: "Required",
                                                    minLength:"Must be greater than 2 characters",
                                                    maxLength:"Must be less than 16 characters"
                                                }}></Errors>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="comment" className="ml-3 col-form-label">Comment</Label>
                                    <Col xs={12}>
                                    <Control.textarea 
                                        model=".comment"
                                        className="form-control"
                                        id="comment"
                                        name="comment"
                                        rows={6}></Control.textarea>
                                    </Col>
                                </Row>
                            </LocalForm>
                            <Button type="submit" color="primary" onClick={(value)=>this.handleSubmit(value)}>Submit</Button>
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}
export default Comment;