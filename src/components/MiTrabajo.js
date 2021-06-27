import React from 'react';
import {ContainerA} from './styles';

export const MiTrabajo=(props)=> {
    if (props.dark==true) {
        return (
            <ContainerA>
                <h1 id={props.id}>My Work </h1>
                <div></div>
            </ContainerA>
        )

    }

    
}


