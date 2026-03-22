import Header from "./components/Header"
import Content from "./components/Content"
import Total from "./components/Total"

import Header2 from "./components/Header2"
import Content2 from "./components/Content2"
import Content3 from "./components/Content3"

const App = () =>{
  // 1.1-1.2
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  
  // 1.3
  const Course = 'Half Stack application development'
  const Part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const Part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const Part3 = {
    name: 'State of a component',
    exercises: 14
  }

  // 1.4
   const Parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  return (
    <>
    <div className="container">
      <p>Simple props components</p>
      <Header course={course} />
      <Content 
        part1={part1} exercises1={exercises1} 
        part2={part2} exercises2={exercises2} 
        part3={part3} exercises3={exercises3}  
      />
      <Total 
        exercises1={exercises1} 
        exercises2={exercises2} 
        exercises3={exercises3} 
      />
    </div>
    <div className="container">
      <p>Objects props components</p>
      <Header2 name = {Course} />
      <Content2 name={Part1.name} exercises={Part1.exercises} />
      <Content2 name={Part2.name} exercises={Part2.exercises} />
      <Content2 name={Part3.name} exercises={Part3.exercises} />
    </div>
    <div className="container">
      <p>Arrays props components</p>
      <Header2 name = {Course} />
      {Parts.map((part1, index) =>(
        <Content3 
            key = {index}
            name = {part1.name}
            exercises = {part1.exercises}
        />
      ))}
    </div>
    </>
  )
}

export default App;