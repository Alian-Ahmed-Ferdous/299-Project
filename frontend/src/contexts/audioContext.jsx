import { createContext, useReducer } from "react";

export const audioContext = createContext()

export const audioReducer = (state, action) => {
    switch (action.type) {
        case 'SET_AUDIO':
            return {
                song: [action.payload]
            }
        case 'QUEUE_AUDIO':
            return {
                song: [...state.song, action.payload]
            }
        default:
            return state
    }
}

export const AudioContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(audioReducer, {
        song: null
    })

    return(
        <audioContext.Provider value={{...state,dispatch}}>
            {children}
        </audioContext.Provider>
    )
}
