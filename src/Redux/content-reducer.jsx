import { contentAPI } from '../api/api';
import photo1 from '../images/photo1.jpg'
import photo2 from '../images/photo2.png'
import photo3 from '../images/photo3.jpg'
import photo4 from '../images/photo4.jpg'
import photo5 from '../images/photo5.jpg'
import photo6 from '../images/photo6.jpg'
import photo7 from '../images/photo7.jpg'
import photo8 from '../images/photo8.jpeg'
import photo9 from '../images/photo9.jpg'
import photo10 from '../images/photo10.jpg'

export const setUsers = (users) =>({ type: 'userSeach-reducer/SET-USERS', users: users})



const SET_USERS = 'userSeach-reducer/SET-USERS';


let defaultState = {
    users: [ ],
    pageSize: 4,
    numberPage: 1,
    photos: [
        <img src={photo1}/>,
        <img src={photo2}/>,
        <img src={photo3}/>,
        <img src={photo4}/>,
        <img src={photo5}/>,
        <img src={photo6}/>,
        <img src={photo7}/>,
        <img src={photo8}/>,
        <img src={photo9}/>,
        <img src={photo10}/>,
    ]
}

export const contentReducer = (state = defaultState, action) => {
   
    switch (action.type) {
        case SET_USERS: {
            return {
                ...state,
                users: action.users.map(u =>{
                    return u
                })
            }
        };
        default:
            return state;
    }
};

export const contentThunkCreator = () => async (dispatch) =>{
        let response = await contentAPI.getUsers()
            dispatch(setUsers(response.data.results));    
}


