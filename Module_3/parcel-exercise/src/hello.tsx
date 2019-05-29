import * as React from 'react';

interface Props {
    greet: string;
}

export const HelloWorldComponent = (props: Props) => {
    return  <h2>{props.greet}</h2>
}