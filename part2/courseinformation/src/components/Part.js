import React from 'react'

const partStyle = {
  display: 'flex',
  flexDirection:'row',
};
const Part = ({name, exercises})=>
    <div style={partStyle}>
      <p>{name}</p>
      <p>{exercises}</p>
    </div>;
export default Part;