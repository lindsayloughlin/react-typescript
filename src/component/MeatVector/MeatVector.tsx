import * as React from 'react'


export interface IVectorProps {
    name: string;
}


function MeatVector({name}: IVectorProps) {
    return (  <svg viewBox="0 0 100 100">
    <path d="M25 7l28 36 40-18-36 25 19 44-27-37L8 74l36-26z" fill="#cfc" />
    <ellipse
      cx={50}
      cy={50}
      rx={32}
      ry={30}
      stroke="#fc0"
      fill="none"
      strokeWidth={11}
    />    
  </svg>)
}

export default MeatVector