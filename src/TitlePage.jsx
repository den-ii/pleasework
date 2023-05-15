import React from 'react'
import PropTypes from 'prop-types'
 

export default function TitlePage(props){  
    

    
    
return (
  <div style={{ display: props.display ? 'block' : 'none'}} className = 'titlePage'>
  <div className = 'titleHolder'>Quiz Yourself!</div>
  <div className = 'description'>A quick test of your knowledge </div>
  <button onClick = {props.clickIt} className = 'startButtonHolder'><div className = 'startTextHolder'>Start Quiz</div></button>
  </div>
  )
}

TitlePage.propTypes = {
  display: PropTypes.bool.isRequired,
  clickIt: PropTypes.func.isRequired,
};