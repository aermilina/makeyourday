import React from "react";

interface Props{
    children:React.ReactNode;
}

export default function Container({children}:Props){
    return(
        <div className="container flex flex-col items-center h-full justify-center">
            {children}
        </div>
    )
}