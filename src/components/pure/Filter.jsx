import React from 'react';
import PropTypes from 'prop-types';

function Filter({active, onClick, children}) {
    if(active){
        return (<span className='active'>{children}</span>)
    }

  return (
    <button className='filter' onClick={(ev)=>{
        ev.preventDefault();
        onClick();
    }}>
        {children}
    </button>
  )
}

Filter.propTypes = {
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
}

export default Filter;
