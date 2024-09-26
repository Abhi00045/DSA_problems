


const Propsday = (props)=>{

    return(
        <>
        <h1>{props.name}and {props.age}</h1>
        <h2>Boolean {props.bool ? "yes" : "no"}</h2>
        </>
    )
}
export default Propsday;