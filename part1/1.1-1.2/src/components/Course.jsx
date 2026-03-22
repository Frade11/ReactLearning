const Course = (props) =>{
    return(
        <>
        <h1>{props.course.name}</h1>
        {props.course.parts.map((part, index)=>(
            <p key={index}>
                {part.name} {part.exercises}
            </p>
        ))}
        </>
    )
}   

export default Course;