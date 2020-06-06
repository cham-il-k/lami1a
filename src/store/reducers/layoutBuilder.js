import { connect } from 'react-redux';
import Redux from 'redux';
import * as actiontypes from '../actions/actionTypes';
import {addUser, signUser, loginUser} from '../actions/index';

const initialUers = {
    profil : {  name:"hicham",
                email:'hicham@gmail.com',
                phone:'121212454',
                tablets:[1,33,54]
              },
    tablets: [1,33,54],
    programs: [ {
                name: "om1",
                description: "apprendre des mots des sourat",
                tags: ["om","apprendre des mots"],
                niveau: 1,
                contact: "kazdhicham@gmail.com",
             },
            {
              name: "om2",
              description: "apprendre des mots des soura waki3a",
              tags: ["om","apprendre des mots"],
              niveau: 1,
              contact: "om@gmail.com",
              }
            ],
            error:false,
    
    
    userData: null,
    users: null,   
    totalUsers: 100,
    loading: false,    
    error: false,
    }




const profilReducer = (state = initialState, action) => {
    
    switch(action.type) {

        case actiontypes.ADD_USER_SUCCESS:
            return {
                ...state,
                loading:false,
                userData:action.formData
            };
            break;
        
        case actiontypes.LOGIN_USER_SUCCESS:
            return {
                ...state,
                loading:false,
               userData:action.formData
                };
                break;
    
            case actiontypes.ADD_USER_FAIL:
            return {
                ...state,
                failed: true
            }
            break;
        case actiontypes.LOGIN_USER_FAIL:
        return {
            ...state,
            failed: false
        }
    }
     return state
}

export default reducer;