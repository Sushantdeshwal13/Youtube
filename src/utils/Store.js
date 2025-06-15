import {configureStore} from '@reduxjs/toolkit';
import Appslice from './Appslice';
import searchslice from './searchslice';
import chatslice from './Chatslice';

const store= configureStore({
    reducer: {
        app:Appslice,
        search: searchslice,
        chat:chatslice,
    },
});

export default store;