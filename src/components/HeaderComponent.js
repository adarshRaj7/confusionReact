import React,{Component} from 'react';
import {Badge,Modal, Button, ModalHeader, ModalBody, Navbar,NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, FormGroup, Label, Input, Form } from 'reactstrap';
import '../App.css';
import {NavLink} from 'react-router-dom';

class Header extends Component{

    constructor(props){
        super(props);
        this.state={
            isModalOpen : false,
            isNavOpen : false
        };
        this.toggleNav=this.toggleNav.bind(this);
        this.toggleModal=this.toggleModal.bind(this);
        this.handleLogin=this.handleLogin.bind(this);
    }

    handleLogin(event){
        this.toggleModal();
        alert("Username: "+this.username.value+ "\nPassword: "+this.password.value+"\nRemember: "+this.remember.checked);
        event.preventDefault();
    }

    toggleNav(){
        
        // console.log(this.state.isNavOpen);
        // console.log("Nav toggle clicked");
        this.setState({
            isNavOpen : !this.state.isNavOpen
        });
        // console.log(this.state.isNavOpen);
    }

    toggleModal()
    {
        console.log(this.state.isModalOpen);
        // if(this.state.isModalOpen)
        //     console.log("Modal is open");
        // else    
        //     console.log("Modal is closed");
        console.log("Button clicked");
        this.setState({
            isModalOpen:!this.state.isModalOpen
        });
        console.log(this.state.isModalOpen);
    }
    render(){
        return(
        <React.Fragment >   
            
            <Navbar dark expand="md" >
                <div className='container'>
                    <NavbarToggler onClick={this.toggleNav}></NavbarToggler>
                    <NavbarBrand className='mr-auto' href="/">
                        <img src='assets/images/logo.png' height='30' width='41' alt='Ristorante con Fusion'></img>
                    </NavbarBrand>
                    <Collapse navbar isOpen={this.state.isNavOpen} onClick={this.toggleNav}>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className='nav-link' to='/home'>
                                    <span className='fa fa-home fa-lg'></span>Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/aboutus'>
                                    <span className='fa fa-info fa-lg'></span>About Us
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/menu'>
                                    <span className='fa fa-list fa-lg'></span>Menu
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/contactus'>
                                    <span className='fa fa-address-card fa-lg'></span>Contact Us
                                </NavLink>
                            </NavItem>
                        </Nav>
                   
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Badge  className="login-btn " pill onClick={this.toggleModal}>
                                    <span className='mt-2 mb-2 ml-4 mr-4 fa fa-sign-in fa-lg'>Login</span>
                                </Badge>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
                
            </Navbar>  
        {/* <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. U
            t enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
             est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal> */}
            <div className='jumbotron'>
                <div className=' container '>
                    <div className='row row-header '>                        
                        <div className='  col-12 col-sm-6 '>
                            <h1>Ristorante Con Fusion</h1>
                            <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                        </div>    
                    </div>    
                </div>
            </div>  
            <Modal fade={false} className="loginModal" isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                            <Label htmlFor="username">Username</Label>
                            <Input innerRef={(input)=>this.username=input} type="text" id="username" name="username"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input innerRef={(input)=>this.password=input} type="password" id="password" name="password"></Input>
                        </FormGroup>
                        <FormGroup check>
                            <Input innerRef={(input)=>this.remember=input} type="checkbox" name="remember"></Input>
                            <Label check htmlFor="remember">Remember me</Label>
                                
                        </FormGroup>
                        <Button type="submit" value="submit" color="primary">Login</Button>
                    </Form>
                </ModalBody>
            </Modal>

        </React.Fragment>
        );
    }
}
export default Header;