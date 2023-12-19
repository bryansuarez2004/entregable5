import { createSlice } from "@reduxjs/toolkit";

const trainerNameSlice = createSlice({
    name: 'trainerName',
    initialState: {
        name: '',
    },
    reducers:{
           setTrainerName: (state, action) => {
                 const newTrainerName = action.payload;
                 state.name = newTrainerName;
           }
    }
})

export const {setTrainerName} = trainerNameSlice.actions

export default trainerNameSlice.reducer