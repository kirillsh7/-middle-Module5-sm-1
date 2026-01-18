import { ContactDto } from 'src/types/dto/ContactDto'
import { DATA_CONTACT } from '../../__data__'
import { FavoriteContactsDto } from 'src/types/dto/FavoriteContactsDto'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface FAVORITE_STATE {
  favorite: FavoriteContactsDto
}
const initialState: FAVORITE_STATE = {
  favorite: [DATA_CONTACT[0].id, DATA_CONTACT[1].id, DATA_CONTACT[2].id, DATA_CONTACT[3].id],
}

const favoriteContactSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<ContactDto['id']>) {
      state.favorite.push(action.payload)
    },
    removeFavorite(state, action: PayloadAction<ContactDto['id']>) {
      state.favorite.filter(id => id !== action.payload)
    },
  },
})

export const favoriteContactReducer = favoriteContactSlice.reducer

export const { addFavorite, removeFavorite } = favoriteContactSlice.actions
