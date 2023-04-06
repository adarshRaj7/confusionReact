import React  from "react";
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";
import lead from "../../src/alberto.png";
import { leadersLoading } from "../redux/ActionCreaters";
function RenderCard({item,isLoading,errMess})
{
    if(isLoading)
    {
        return (
            <Loading/>
        );
    }
    else if(errMess)
    {
        return(
            <h4>{errMess}</h4>
        );
    }
    else
        return (
            <Card>
                {console.log("item",item)}
                <CardImg src={baseUrl+item.image} alt={item.name}></CardImg>
                
                <CardBody >
                    <CardTitle>{item.name}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle>:null}
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        );
}

function Home({dish,dishesLoading,dishesErrMess,promotion,promosLoading,promosErrMess,leader,leadersLoading,leadersErrMess})
{
    console.log("In Home Component , props recieved is ",dish);
    console.log("in Hoem component, promos recieved are ",promotion)
    return (
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md mt-3">
                    <RenderCard item={dish} 
                                isLoading={dishesLoading}
                                errMess={dishesErrMess}></RenderCard>
                </div>
                <div className="col-12 col-md mt-3">
                    <RenderCard item={promotion}
                    isLoading={promosLoading}
                    errMess={promosErrMess}></RenderCard>
                </div>
                <div className="col-12 col-md mt-3">
                    <RenderCard item={leader}
                                isLoading={leadersLoading}
                                errMess={leadersErrMess}></RenderCard>
                </div>
            </div>
        </div>
    );
}
export default Home;