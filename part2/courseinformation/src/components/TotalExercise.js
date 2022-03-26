const TotalExercise =({parts})=>{
    const totalNum = parts.reduce((sum, part)=> sum + part.exercises, 0 );
    return(<p>{totalNum}</p>);
  }
export default TotalExercise;