import USer from "./USer"
import UserClass from "./UserClass"

const About = () => {
    return(
        <div>
            <h1>About</h1>
            <h2>The data of members</h2>
            <UserClass name = {"Ajay Class"}/>
            <USer name ={"Ajay"}/>
        </div>
    )
}

export default About