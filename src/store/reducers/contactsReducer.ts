import { ContactDto } from 'src/types/dto/ContactDto'
import { DATA_CONTACT, DATA_GROUP_CONTACT } from '../../__data__'
import { FavoriteContactsDto } from 'src/types/dto/FavoriteContactsDto'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'
import { ADD_FAVORITE, ProjectActions, REMOVE_FAVORITE } from '../action/contactsAction'

interface INITIAL_STATE {
  contacts: ContactDto[]
  groups: GroupContactsDto[]
  favorite: FavoriteContactsDto
}
const InitialState: INITIAL_STATE = {
  contacts: DATA_CONTACT,
  groups: DATA_GROUP_CONTACT,
  favorite: [DATA_CONTACT[0].id, DATA_CONTACT[1].id, DATA_CONTACT[2].id, DATA_CONTACT[3].id],
}

function contactsReducer(state = InitialState, action: ProjectActions) {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
      }
    case REMOVE_FAVORITE:
      return {
        ...state,
      }
    default:
      return state
  }
}

export default contactsReducer
