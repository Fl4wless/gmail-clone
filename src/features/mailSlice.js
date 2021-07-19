import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentSelectedMail: null,
    sendMessageIsOpen: false,
};

export const mailSlice = createSlice({
    name: "mail",
    initialState,
    reducers: {
        selectedMail(state, action) {
            state.currentSelectedMail = action.payload;
        },
        openSendMessage: (state) => {
            state.sendMessageIsOpen = true;
        },
        closeSendMessage: (state) => {
            state.sendMessageIsOpen = false;
        },
    },
});

export const { openSendMessage, closeSendMessage, selectedMail } =
mailSlice.actions;

export const selectMail = (state) => state.mail.sendMessageIsOpen;
export const getSelectedMail = (state) => state.mail.currentSelectedMail;

export default mailSlice.reducer;