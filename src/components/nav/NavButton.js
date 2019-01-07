import React from 'react';


const scrollTo = (kind) => {
  document.getElementById(kind);
}

const NavButton = ({kind}) => {
  return(
    <button onClick={() => scrollTo(kind)}></button>
  )
}

export default NavButton
