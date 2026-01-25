import { memo, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ContactCard } from 'src/components/ContactCard'
import { contactStore, favoriteContactStore } from 'src/store'
import { ContactDto } from 'src/types/dto/ContactDto'

export const FavoritListPage = memo(() => {
  const contactsState = contactStore.contacts
  const favoriteContactsState = favoriteContactStore.favoriteContact
  const [contacts, setContacts] = useState<ContactDto[]>([])
  const filteredContactState = contactsState.filter(({ id }) => favoriteContactsState.includes(id))

  useEffect(() => {
    setContacts(filteredContactState)
  }, [contactsState, favoriteContactsState])

  return (
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
  )
})
