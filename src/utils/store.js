import { configureStore } from "@reduxjs/toolkit";
import sliceStore from "./sliceStore";
import cacheSlice from "./cacheSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
    reducer: {
        event: sliceStore,
        cache: cacheSlice,
        chat :chatSlice,
    }
})
export default store;