export const ADD_PROGRAM = 'ADD_PROGRAM';
export const VALID_PROGRAM = 'VALID_PROGRAM';
//export const FETCH_PROGRAM = 'FETCH_PROGRAM';
export const INIT_PROGRAM = 'INIT_PROGRAM'; 
export const SELECT_PROGRAM = 'SELECT_PROGRAM';

export const addProgram = (program ) => {
    return {
        type:ADD_PROGRAM,
        payload : {
            program
        }
    }
}
export const validProgram = (program) => {
    return {
        type:VALID_PROGRAM,
        payload: program
    }
}

export const initProgram = (program ) => {
    return {
        type:INIT_PROGRAM,
        payload : {
            program
        }
    }
}
export const selectProgram = (id ) => {
    return {
        type:SELECT_PROGRAM,
        payload : { id
        }
    }
}
