import React, { useState } from 'react'

const StatisticLine = (props)=>{
  return(<tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
  </tr>);
};
const Statistics = (props) => {

  if(props.allVote === 0){
    return(<div><p>No Feedback given</p></div>);
  }else{
    return(
      <div>
        <table>
          <tbody>
            <StatisticLine text="good" value={props.good}/>
            <StatisticLine text="neutral" value={props.neutral}/>
            <StatisticLine text="bad" value={props.bad}/>
            <StatisticLine text="all" value={props.allVote}/>
            <StatisticLine text="average" value={props.arvrageVoteScore}/>
            <StatisticLine text="positive" value={props.positiveRatio}/>
          </tbody>
        </table>
      </div>);
  }
}

const Button = ({handleClick, text})=>(  <button onClick = {handleClick}>{text}</button>
  );

const App2 = () => {
  // save clicks of each button to own state

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allVote, setAllVote] = useState(0);

  const hanldGoodClick = () =>{setGood(good + 1);setAllVote(allVote + 1)};
  const handleNeutralClick =()=>{setNeutral(neutral + 1);setAllVote(allVote + 1)};
  const handleBadClick =()=>{setBad(bad + 1);setAllVote(allVote + 1)};
  const arvrageVoteScore = (good - bad)/allVote;
  const positiveRatio = good / allVote;

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick = {hanldGoodClick} text="Good"/>
      <Button handleClick = {handleNeutralClick} text="Neutral"/>
      <Button handleClick = {handleBadClick} text="Bad"/>
      <h1>Statistics</h1>
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        allVote={allVote}
        arvrageVoteScore ={arvrageVoteScore}
        positiveRatio={positiveRatio}
      />
    </div>
  )
}

export default App2