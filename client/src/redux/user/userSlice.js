import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser:null,
    error:null,
    loading:false,
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        signInStart:(state)=>{
            state.loading =true;
        },
        signInSuccess:(state,action)=>{
            state.currentUser = action.payload;
            state.error = null;
            state.loading= false;
        },
        signInFailure:(state,action)=>{
            state.error = action.payload;
            state.loading = false
        },
        signOutStart: (state)=>{
            state.loading = true
        },
        signOutSuccess: (state)=>{
            state.currentUser = null,
            state.error = false,
            state.loading = false
        },
        signOutFailure: (state)=>{
            state.error = true,
            state.loading = false
        },
    }
})

export const {signInStart,signInSuccess,signInFailure,signOutStart,signOutSuccess,signOutFailure} = userSlice.actions
export default userSlice.reducer;