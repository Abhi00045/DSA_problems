import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./index.css"

const Propsday = (props)=>{
    useGSAP(()=>{
        gsap.to(".box",{
            x:1000,
            duration:2,
            rotate:100,
            delay:1
        })
        gsap.from(".box",{
            y:1000,
            duration:2,
            rotate:10,
            delay:1
        })
    })

    return(
        <>
        {/* <h1>{props.name}and {props.age}</h1>
        <h2>Boolean {props.bool ? "yes" : "no"}</h2> */}
        <div className="box" id="box">

        </div>

        </>
    )
}
export default Propsday;