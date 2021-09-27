import './Content.css';
import React from 'react';




const Content = (props) => {

console.log(props)

let changeSelect =(e) =>{
  
    return(
      console.log(e.target.value)
    )
}

  return (
    <div>
    <select name="eye_color" onChange={changeSelect} className="form-control font-face-hr">
      <option>Eye color</option>
      {props.contentPage.users.map(user =>
        <option key={user.url} value={user.eye_color}>
          {user.eye_color}
        </option>)}
    </select>
    <select name="heigt" onChange={changeSelect} className="form-control-heigt font-face-hr">
      <option>Heigt</option>
      {props.contentPage.users.map(user =>
        <option key={user.url} value={user.height}>
          {user.height}
        </option>)}
    </select>
    <select name="age" onChange={changeSelect} className="form-control-age font-face-hr">
      <option>Age</option>
      {props.contentPage.users.map(user =>
        <option key={user.url} value={user.birth_year}>
          {user.birth_year}
        </option>)}
    </select>
    </div>
    
    )

}

export default Content;
