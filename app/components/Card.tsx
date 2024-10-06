//import react from "react"

interface Tprops{
    name:string,
    RollNo: number,
    Day: string
}

const Card = (Props:Tprops) => {
    return (
        <div>
    <h1>Name: {Props.name} </h1>
    <h1>Rollno: {Props.RollNo} </h1>
    <h1>Day: {Props.Day} </h1>
        </div>
    )
}

export default Card