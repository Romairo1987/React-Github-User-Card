import React from "react";
import {Data,Followers,Image,H5,Div,H1} from "./styledWidgets"



function Card(props){
    
    return (
        <div>
            <H1>Lambda Github Students</H1>
            
          <Data className="Data">
            <Image src={props.data.avatar_url} alt="user"/>
            <Div>
                <h1>Login: {props.data.login}</h1>
                <H5>Location: {props.data.location}</H5>
                <H5>Company: {props.data.company}</H5>
                <H5>Biography: {props.data.bio}</H5>
                <H5>Followers: {props.data.followers}</H5>
            </Div>
           
          </Data>

          <Followers className="Followers">
              {props.followers.map(follower=>{
                  return(
                      <div>
                        <Image src={follower.avatar_url} alt="user"/>
                        <H5>Login: {follower.login}</H5>
                        <H5>User Id: {follower.id}</H5>
                        <H5>Company: {follower.company}</H5>
                        <H5>Biography: {follower.bio}</H5>
                        <H5>Location: {follower.location}</H5>
                      </div>
                 
                  )
              })}
          </Followers>
        </div>
       
    )
}

export default Card;