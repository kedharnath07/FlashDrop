import { useState } from "react"

function Color(){
    let[Colo,setColor]=useState('btn btn-light')
    let [bg,setbg]=useState('bg-dark text-white')
function btnclick(){
    setColor((ele)=>{
        return ele=='btn btn-light'?'btn btn-dark':'btn btn-light';
    })

    setbg((ele)=>{
        return ele=='bg-dark text-white'?"bg-light text-black":'bg-dark text-white'
    })
}
    return(
        <>
        <div className={bg} >
            <h1>{Colo=="btn btn-light"?'this is black color':'this is light color'}</h1>
            <button className={Colo} onClick={btnclick}>Toggle</button>
        </div>
        </>
    )
}
export default Color