import React from "react";

interface Props{
    handleClick: ()=>void;
}

export default function Button({handleClick}:Props){
    return(
        <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded my-5">
  Regenerate
</button>
    )

}