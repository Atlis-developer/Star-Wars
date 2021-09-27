import React, { useEffect } from 'react';
import Contents from './Contents';
import { connect } from 'react-redux';
import { contentThunkCreator } from '../../Redux/content-reducer';

const ContentContainer = (props) => {

  useEffect( () => {
    props.contentThunkCreator()
}, [])

  return ( 
    <div className='Content-Container'>
      <Contents contentPage={props.state.contentPage}/>
    </div>
  );
}



let mapStateToProps = (state) =>{
  return {
    state: state,
  }
}



export default connect (mapStateToProps, { contentThunkCreator }) (ContentContainer)


