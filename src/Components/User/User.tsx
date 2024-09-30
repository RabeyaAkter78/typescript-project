// import {type ReactNode } from "react";

import { FC } from "react";

// type UserShape={children:ReactNode}
// interface UserShape {name:"string",age:"number"}


type Shape={
    name:string;
    age:number;
}

const User: FC<Shape> = ({name,age}) => {
    return (
        <div>
     <h1>{name}</h1>
     <h1>{age}</h1>
        </div>
    );
};

export default User;