import { makeAutoObservable } from 'mobx'
import { makePersistable } from 'mobx-persist-store'
import { DATA_CONTACT } from '../__data__'

class FavoriteContactStore {
  favoriteContact = [DATA_CONTACT[0].id, DATA_CONTACT[1].id, DATA_CONTACT[2].id, DATA_CONTACT[3].id]

  constructor() {
    makeAutoObservable(this)

    makePersistable(this, {
      name: 'ContactFavoriteContactStoreStore',
      properties: ['favoriteContact'],
      storage: window.localStorage,
    })
  }
}

export const favoriteContactStore = new FavoriteContactStore()
