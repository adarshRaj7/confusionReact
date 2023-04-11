import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';
import {FadeTransform, Fade,Stagger} from 'react-animation-components';
function RendertheLeaders({leader})
{
    console.log("Leaders accepte are "+JSON.stringify(leader));
    return(
        <div className='col-12'>
            <ul>
                <Stagger in>
                    {leader.map((leader)=>{
                        return (
                            <Fade in>
                                <div className='col-12 mt-4'>
                                    <li className='' key={leader.id}>
                                        <div className='row'>
                                            <div className='col-auto  photo'>
                                                <a ><img className=' media-photo' 
                                                    src={baseUrl+leader.image}
                                                   alt={leader.name} 
                                                /></a>
                                            </div>
                                            <div className=" col-12 col-md " >
                                                <h4 className='' >{leader.name}</h4>
                                                <p>{leader.designation}</p>
                                                <p className='mt-2'>
                                                {leader.description}
                                                </p>
                                            </div>
                                        </div>
                                    </li>
            {/* <Media list>{leader.name}</Media> */}
            
                                </div>
                            </Fade>
                        );
                    })}
                </Stagger>
                {/* {leaders} */}
            </ul>
        </div>
    );

}
// function RenderLeader({leader})
// {
//     return (
        
//     );
// }

function About(props) {

    // const leaders = props.leaders.leaders.map((leader) => {
    //     return (
    //         // {this:RenderLeader leader={leader}}
    //         <div>
    //             <RenderLeader leader={leader}></RenderLeader>
    //         </div>// <p>{leader.name }</p>
    //         // <p>Leader {leader.name}</p>
    //     );
    // });

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Our History</h2>
                    <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
                    <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">3 Feb. 2013</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">HK Fine Foods Inc.</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$1,250,375</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">40</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 mt-2">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote ">
                                <p className="mb-0">You better cut the pizza in four pieces because
                                    I'm not hungry enough to eat six.</p>
                                <footer className="blockquote-footer">Yogi Berra,
                                <cite title="Source Title">The Wit and Wisdom of Yogi Berra,
                                    P. Pepe, Diversion Books, 2014</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Corporate Leadership</h2>
                </div>
                <div className="col-12">

                    <RendertheLeaders leader={props.leaders.leaders}></RendertheLeaders>
                    
                
                </div>
            </div>
        </div>
    );
}

export default About;    