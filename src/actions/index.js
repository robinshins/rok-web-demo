// actions/index.js
export const ADD = 'ADD';
export const SUB = 'SUB';
export const LANG = 'LANG';
export const add = () => {
    return {
        type: ADD
    }
};

export const sub = () => {
    return {
        type: SUB
    }
};

export const lang = (e) => {
    return {
        type: LANG,e
    }
};