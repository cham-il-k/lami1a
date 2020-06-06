import {
    SIGNIN_START, SIGNIN_FAIL, SIGNIN_SUCCESS,
    GOOGLE_SIGNIN_START,GOOGLE_SIGNIN_FAIL,GOOGLE_SIGNIN_SUCCESS,
    SIGNUP_START,SIGNUP_FAIL,SIGNUP_SUCCESS,
    
    LOGOUT,
    SET_CURRENT_PROFIL,
    ADD_TO_COLLECTION,
    GET_COLLECTION,
    REMOVE_FROM_COLLECTION,
  
} from '../actions/profil'
import collection from '../../pages/collection/collection';
//import { signin, signup, fetchProfil,fetchUsers, initUser } from '../actions'

const initialState = {

    currentProfil: '',
    collection: '',
    /* {
        title: "cheikh",
        imageUrl: "/img/01.jpg",
        linkUrl: '/cheikh',
        products: [{
                id: 11,
                name: " tafsir",
                imageUrl: "/img/01.jpg",
                tags: ['fath1var4', "word1", "word1", "word2", 'fath1var5', 'fath6var4'],
                desc: "tab_ charh , mot ayat / resumé7a",
                edition: "qq hose edition",
                price: "11",

            },
            {
                id: 12,
                name: " tafsir2",
                imageUrl: "/img/02.jpg",
                tags: ["word1", "word1", 'fath1var4', 'fath2var5', "word2", "word3", "word5"],
                desc: "tab_ charh , mot ayat / resumé7a / les aquipeds le suivie",
                edition: "qq hose edition",
                price: "21",

            },
            {
                id: 13,
                name: "tafsir 4",
                imageUrl: "/img/03.jpg",
                tags: ["word1", 'fath3var4', 'fath3var5', 'fath3__6var4', "word1", "word2", "word3", "word5"],
                desc: "tab_ fath 3 charh , de sxpliactaion exercices recomandation , girftsmot ayat / resumé7a",
                edition: "qq edigtion 2",
                price: "21",

            }
        ]
    } */
    /* 
    
    {
         currentProfil:{
        login: 'hicham',
        email:'hicham@hicham.com',
        password:'hicham',
        identite : {
            location :'maison blanche',
            adress: '140 rue qq chose',    
            bio:  'm'  ,
            website : 'https://lami1a.org'  ,
            status :'org',
            skills :[ 'lecture','autre chose' ,'velo' ,'programmation' ]     
            },
        articles: [
            '33434','3343434', '34343'        
        ],
        messages: [
            '33434','3343434', '34343'
        ],
        instagram: '@insta',
        isAdmin: true,
        loading:false
        login: '',
        email:'',
        password:'',
        collection:{
            title: "cheikh",
            imageUrl: "/img/01.jpg",
            linkUrl: '/cheikh',
            products:
            [{
        id: 11,
        name: " tafsir",
        imageUrl: "/img/01.jpg",
        tags: ['fath1var4', "word1", "word1", "word2", 'fath1var5', 'fath6var4'],
        desc: "tab_ charh , mot ayat / resumé7a",
        edition: "qq hose edition",
        price: "11",

    },
    {
        id: 12,
        name: " tafsir2",
        imageUrl: "/img/02.jpg",
        tags: ["word1", "word1", 'fath1var4', 'fath2var5', "word2", "word3", "word5"],
        desc: "tab_ charh , mot ayat / resumé7a / les aquipeds le suivie",
        edition: "qq hose edition",
        price: "21",

    },
    {
        id: 13,
        name: "tafsir 4",
        imageUrl: "/img/03.jpg",
        tags: ["word1", 'fath3var4', 'fath3var5', 'fath3__6var4', "word1", "word2", "word3", "word5"],
        desc: "tab_ fath 3 charh , de sxpliactaion exercices recomandation , girftsmot ayat / resumé7a",
        edition: "qq edigtion 2",
        price: "21",

    }]}}, */
    loading: false,
    error:null
}

const profilReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNIN_SUCCESS:
        case GOOGLE_SIGNIN_SUCCESS:    
            return {
            ...state,
            loading: false,
            error:null,
            currentProfil: action.payload
            };

        case SIGNIN_FAIL:
        case GOOGLE_SIGNIN_FAIL:    
            return {
            ...state,
            loading: false,
            error: action.payload
            };
    
            case SET_CURRENT_PROFIL:
            return {
                ...state,
                loading: false,
                currentProfil: action.payload,
            };
        case GET_COLLECTION:
            return {
                ...state,
            };
        case ADD_TO_COLLECTION:
            return {
                ...state,
                collection: [...collection, action.payload]
            };

        case REMOVE_FROM_COLLECTION:
            return {
                ...state,
                collection: [...action.payload]
            };

        case LOGOUT:
            return {
                loading: false,
                currentProfil: null
            };
        default:
            return state;
    }
}

export default profilReducer;