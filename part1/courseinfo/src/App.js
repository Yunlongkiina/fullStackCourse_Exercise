import React, {useState} from 'react'

  const History = (props)=>{
    if(props.allClicks.length === 0){
      return(<>
      the app is used by pressing the button.
      </>);
    }else{
      return(<>button pressing history:{props.allClicks.join(' ')}</>);
    }
  };

  const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>{text}</button>
  );

  const App = () => {

    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(0);
    const [allClicks, setAllClicks] = useState([]);

    const handleLeftClick = () => {
      setAllClicks(allClicks.concat('L'));
      setLeft(left + 1);
    };
  
    const handleRightClick = () => {
      setAllClicks(allClicks.concat('R'));
      setRight(right + 1);
    };

    return (
    <div>
      {left}
      <Button handleClick = {handleLeftClick} text = "left"/>
      <Button handleClick = {handleRightClick} text="right"/>
      {right}
      <History allClicks = {allClicks}/>
    </div>
  )
}

export default App