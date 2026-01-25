import { makeAutoObservable, runInAction } from 'mobx'
import { makePersistable } from 'mobx-persist-store'
import { ContactDto } from '../types/dto/ContactDto'

class ContactStore {
  contacts: ContactDto[] = []
  isLoading = false
  error: string | null = null
  constructor() {
    makeAutoObservable(this)

    makePersistable(this, {
      name: 'ContactStore',
      properties: ['contacts'],
      storage: window.localStorage,
    })
    this.loadContacts()
  }
  async loadContacts() {
    this.isLoading = true
    this.error = null

    try {
      const response = await fetch('https://mocki.io/v1/91840b05-7b74-4f20-88ca-64d01a3d2cb8')

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()

      runInAction(() => {
        this.contacts = data
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

export const contactStore = new ContactStore()
