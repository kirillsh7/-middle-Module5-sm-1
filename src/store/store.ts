import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { contactsApiSlice, favoriteContactReducer, groupContactsApiSlice } from './slice'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'

const rootReducer = persistReducer(
  { key: 'redux', storage: storage, throttle: 100000 },
  combineReducers({
    favorite: favoriteContactReducer,
    [contactsApiSlice.reducerPath]: contactsApiSlice.reducer,
    [groupContactsApiSlice.reducerPath]: groupContactsApiSlice.reducer,
  }),
)

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REGISTER, REHYDRATE, PAUSE, PERSIST, PURGE],
      },
    }).concat([contactsApiSlice.middleware, groupContactsApiSlice.middleware])
  },
})
export default store

export type RootState = ReturnType<typeof store.getState>

export const persistor = persistStore(store)

// @ts-ignore
window.persistor = persistor
