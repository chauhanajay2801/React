import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError();
    
    return(
        <>
        <div>OOPS ran into problem</div>
        <div>{err.status}</div>
        </>
    )
}

export default Error