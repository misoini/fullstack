import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}
const Content = (props) => {
  return (
    <div>
    <Part part={props.part} exercise={props.exercise}/>
    <Part part={props.part2} exercise={props.exercise2}/>
    <Part part={props.part3} exercise={props.exercise3}/>
    </div>
  )
}
const Part = (props) => {
  return (
    <p>{props.part} {props.exercise} </p>
  )
}
const Total = (props) => {
  return (
    <p>Number of exercises {props.part + props.part2 + props.part3}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content part={part1} exercise={exercises1} part2={part2} exercise2={exercises2} part3={part3} exercise3={exercises3}/>
      <Total part={exercises1} part2={exercises2} part3={exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
