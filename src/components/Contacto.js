import React from 'react';
import {ContainerB}from './styles';
export const  Contacto=(props)=> {

    if(props.dark==false){

        return (
            <ContainerB>
                <h1 id={props.id}>Contacto</h1>
                <div></div>
            </ContainerB>
        )
    }
  
}

