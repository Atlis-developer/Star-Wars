import './Contents.css';
import React from 'react';
import Content from './Content';
import Paginator from '../../utils/Paginator';


const Contents = (props) => {

  return (
    <div className="content">
      <h1 className='content-h1 font-face-hr'>People</h1>
     <Content contentPage={props.contentPage}/>
     
    </div>
  );
}

export default Contents;
/*<Paginator contentPage={props.contentPage}/>*/