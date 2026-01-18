import { memo, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ContactCard } from 'src/components/ContactCard'
import { ContactDto } from 'src/types/dto/ContactDto'
import { useGetContactsQuery } from 'src/store/slice'
import { useFavoriteSelector } from 'src/store/selector/useFavoriteSelector'

export const FavoritListPage = memo(() => {
  const { data: contactsState = [] } = useGetContactsQuery()
  const favoriteContactsState = useFavoriteSelector()
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
