import { useEffect, useMemo, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { ContactDto } from 'src/types/dto/ContactDto'
import { ContactCard } from 'src/components/ContactCard'
import { Empty } from 'src/components/Empty'
import { contactStore } from 'src/store'

export const ContactPage = () => {
  const contactsState = contactStore.contacts
  const { contactId } = useParams<{ contactId: string }>()
  const [contact, setContact] = useState<ContactDto>()

  const foundContact = useMemo(() => {
    return contactsState.find(({ id }) => id === contactId)
  }, [contactId, contactsState])

  useEffect(() => {
    setContact(foundContact)
  }, [contactId])

  return (
    <Row xxl={3}>
      <Col className={'mx-auto'}>{contact ? <ContactCard contact={contact} /> : <Empty />}</Col>
    </Row>
  )
}
