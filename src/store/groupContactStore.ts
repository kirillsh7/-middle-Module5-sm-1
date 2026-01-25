import { makeAutoObservable, runInAction } from 'mobx'
import { makePersistable } from 'mobx-persist-store'
import { GroupContactsDto } from '../types/dto/GroupContactsDto'
import { DATA_GROUP_CONTACT } from 'src/__data__'

class GroupContactStore {
  groupContact: GroupContactsDto[] = DATA_GROUP_CONTACT
  isLoading = false
  error: string | null = null
  constructor() {
    makeAutoObservable(this)
    makePersistable(this, {
      name: 'GroupContactStore',
      properties: ['groupContact'],
      storage: window.localStorage,
    })
    this.loadGroupContacts()
  }
  async loadGroupContacts() {
    this.isLoading = true
    this.error = null

    try {
      const response = await fetch('https://mocki.io/v1/a8553648-28b5-4f30-aeef-990efe16c0aa')

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()

      runInAction(() => {
        this.groupContact = data
        this.isLoading = false
      })
    } catch (error) {
      runInAction(() => {
        this.error = error instanceof Error ? error.message : 'Unknown error'
        this.isLoading = false
      })
    }
  }
}

export const groupContactStore = new GroupContactStore()
