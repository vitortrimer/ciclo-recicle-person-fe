import {useEffect, useState } from "react"

const Form = (props) => {
    const [username, setUsername] = useState("")

    useEffect(() => {
        console.log("props  ", props)
        setUsername(props.username)
    }, [])

    return(
        <div> usuario {
            username === "" ? (<div>Sem usuario</div>) : username} </div>
    )
}

export default Form