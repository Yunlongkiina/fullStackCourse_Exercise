import React, { useState } from 'react';

const Button = ({onClick, text})=><button onClick = {onClick}>{text}</button>;
const Header = ({text})=><h1>{text}</h1>;

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ];
  const [selected, setSelected] = useState(0);

  const randomAne = () => {
    let randomNumber = Math.floor(Math.random() * Math.floor(anecdotes.length));
    setSelected(randomNumber);
  };

  // fill an an array with the length of the anecdotes array with zeros
  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0));

  const voteAnec = ()=>{
    let anceCopy = [...vote];
    anceCopy[selected] += 1;
    setVote(anceCopy);
  };

  const highestVote = Math.max(...vote);
  const highestAnce = anecdotes[vote.indexOf(highestVote)];

  return (
    <div>
      <Header text = 'Anecdote of the day' />
      <div>
        {anecdotes[selected]}
      </div>
      <Button onClick={randomAne} text={'next anecdotes'}/>
      <Button onClick = {voteAnec} text ={'vote'}/>
      <p>{highestAnce}</p>
      <Header text = 'Anecdote with most votes'/>
    </div>
  )
}

export default App