import { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ContactCard } from 'src/components/ContactCard'
import { FilterForm, FilterFormValues } from 'src/components/FilterForm'
import { ContactDto } from 'src/types/dto/ContactDto'
import { observer } from 'mobx-react-lite'
import { contactStore, groupContactStore } from 'src/store'

export const ContactListPage = observer(() => {
  const contactsState = contactStore.contacts
  const groupContactsState = groupContactStore.groupContact

  const [contacts, setContacts] = useState<ContactDto[]>([])

  const onSubmit = (filterValues: Partial<FilterFormValues>) => {
    let findContacts: ContactDto[] = contactsState
    if (filterValues.name) {
      const fvName = filterValues.name.toLowerCase()
      findContacts = findContacts.filter(({ name }) => name.toLowerCase().indexOf(fvName) > -1)
    }

    if (filterValues.groupId) {
      const groupContacts = groupContactsState.find(({ id }) => id === filterValues.groupId)

      if (groupContacts) {
        findContacts = findContacts.filter(({ id }) => groupContacts.contactIds.includes(id))
      }
    }

    setContacts(findContacts)
  }

  return (
    <Row xxl={1}>
      <Col className='mb-3'>
        <FilterForm
          groupContactsList={groupContactsState}
          initialValues={{}}
          onSubmit={onSubmit}
        />
      </Col>
      <Col>
        <Row
          xxl={4}
          className='g-4'
        >
          {contacts.map(contact => (
            <Col key={contact.id}>
              <ContactCard
                contact={contact}
                withLink
              />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  )
})
