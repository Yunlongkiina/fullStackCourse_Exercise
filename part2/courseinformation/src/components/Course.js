import Header from './Header';
import Content from './Cotent';
import TotalExercise from './TotalExercise';

const Course = ({courses})=>
  <div>
    {courses.map(course =><div key = {course.id}>
      <Header couseName = {course.name}/>
      <Content parts = {course.parts}/>
      <TotalExercise parts = {course.parts}/>
    </div>)}
  </div>;
export default Course;