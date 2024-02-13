export const HELLO = 'HELLO';

export const updateHelloText = (dispatch) => {
    return {
        type: HELLO,
        payload: "Hello You!"
    }
}