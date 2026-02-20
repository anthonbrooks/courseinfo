const Header = (props) => {
  return (
    <h2>{props.course.name}</h2>
  )
}

const Content = ({parts}) => {
  return (
    <div>
      {parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)}
    </div>
  )
}

const Total = ({parts}) => {
  const total = parts.reduce((sum, current) => sum += current.exercises, 0);
  return (
    <p>Number of exercises {total}</p>
  )
}

const Course = ({course}) => {
  return (
    <>
      <Header course={course} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </>
  )
}

export default Course