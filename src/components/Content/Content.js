import './Content.css';
import React, { useEffect, useState } from 'react';




const Content = (props) => {
  let [eyeColor, setEyeColor] = useState(null);
  let [height, setHeight] = useState(null);
  let [age, setAge] = useState(null);
  let [sort, setSort] = useState(null);


  
  

  let users = props.contentPage.users;
  let photos = props.contentPage.photos;

  for (let i = 0; i < users.length; i++) {
    users[i].img = photos[i]
  }

  let changeSelectEyeColor = (e) => {
    return (
      setEyeColor(e.target.value)
    )
  }
  let changeSelectHeigt = (e) => {
    return (
      setHeight(e.target.value)
    )
  }
  let changeSelectAge = (e) => {
    return (
      setAge(e.target.value)
    )
  }
  let changeSelectSort = (e) => {
    return (
      setSort(e.target.value)
    )
  }

let param = users.filter(u=> u.height == height)




  console.log(param)



  return (
    <div className='content'>
      <div className='filter'>
        <div className='filter-search'>
          <select name="eye_color" onChange={changeSelectEyeColor} className="form-control font-face-hr">
            <option>Eye color</option>
            {props.contentPage.users.map(user =>
              <option key={user.url} value={user.eye_color}>
                {user.eye_color}
              </option>)}
          </select>
          <select name="heigt" onChange={changeSelectHeigt} className="form-control-heigt font-face-hr">
            <option>Heigt</option>
            {props.contentPage.users.map(user =>
              <option key={user.url} value={user.height}>
                {user.height}
              </option>)}
          </select>
          <select name="age" onChange={changeSelectAge} className="form-control-age font-face-hr">
            <option>Age</option>
            {props.contentPage.users.map(user =>
              <option key={user.url} value={user.birth_year}>
                {user.birth_year}
              </option>)}
          </select>
        </div>
        <div className='filter-grand'>
          <select name="sort_by" onChange={changeSelectSort} className="form-control-sort_by font-face-hr">
            <option>Sort by</option>
            <option key={1} value='Eye color'>
              Eye color
            </option>
            <option key={2} value='Heigt'>
              Heigt
            </option>
            <option key={3} value='Age'>
              Age
            </option>
          </select>
        </div>
      </div>
      <div className='content-person'>
        {users.map(u =>
          <div className='content-container'>
            {u.img}
            <span>
              Name: {u.name}<br />
              Eye color: {u.eye_color}<br />
              Heigt: {u.height}<br />
              Age: {u.birth_year}<br />
            </span>
          </div>)}
      </div>
    </div>

  )

}

export default Content;
