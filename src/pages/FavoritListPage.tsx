import { memo, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ContactCard } from 'src/components/ContactCard'
import { ContactDto } from 'src/types/dto/ContactDto'
import { useAppSelector } from 'src/hooks/hooks'

export const FavoritListPage = memo(() => {
  const contactsState = useAppSelector(state => state.contacts)
  const favoriteContactsState = useAppSelector(state => state.favorite)
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
