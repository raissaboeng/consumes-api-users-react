import React from 'react';
import PersonItem from '../PersonItem';
import {List} from './styled';

export default function PersonList(props){
   
   return (
   <List>
       { !props.listUsers ? 
       (
        <div> Loading ... </div>
      ) : (
        props.listUsers.map(item => <PersonItem key={item.id} user= {item} deleteUser={props.deleteUser}/>) 
      )}
    </List>
   );
 }
     