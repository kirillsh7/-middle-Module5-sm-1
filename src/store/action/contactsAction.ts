import { ContactDto } from 'src/types/dto/ContactDto'

export const ADD_FAVORITE = 'ADD_FAVORITE'
export const REMOVE_FAVORITE = 'ADD_FAVORITE'

interface AddFavorite {
  type: typeof ADD_FAVORITE
  payload: ContactDto['id']
}
interface RemoveFavorite {
  type: typeof ADD_FAVORITE
  payload: ContactDto['id']
}

export function addFavorite(id: ContactDto['id']): AddFavorite {
  return { type: ADD_FAVORITE, payload: id }
}

export function removeFavorite(id: ContactDto['id']): RemoveFavorite {
  return { type: REMOVE_FAVORITE, payload: id }
}

export type ProjectActions = AddFavorite | RemoveFavorite
