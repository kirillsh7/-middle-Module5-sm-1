import { memo, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { ContactDto } from 'src/types/dto/ContactDto'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'
import { GroupContactsCard } from 'src/components/GroupContactsCard'
import { Empty } from 'src/components/Empty'
import { ContactCard } from 'src/components/ContactCard'
import { useGetContactsQuery, useGetGroupContactsQuery } from 'src/store/slice'

export const GroupPage = memo(() => {
  const { data: contactsState = [] } = useGetContactsQuery()
  const { data: groupContactsState = [] } = useGetGroupContactsQuery()
  const { groupId } = useParams<{ groupId: string }>()
  const [contacts, setContacts] = useState<ContactDto[]>([])
  const [groupContacts, setGroupContacts] = useState<GroupContactsDto>()

  const findGroup = groupContactsState.find(({ id }) => id === groupId)

  const foundContact = () => {
    if (findGroup) {
      return contactsState.filter(({ id }) => findGroup.contactIds.includes(id))
    }
    return []
  }

  useEffect(() => {
    setGroupContacts(findGroup)
    setContacts(foundContact())
  }, [groupId])

  return (
    <Row className='g-4'>
      {groupContacts ? (
        <>
          <Col xxl={12}>
            <Row xxl={3}>
              <Col className='mx-auto'>
                <GroupContactsCard groupContacts={groupContacts} />
              </Col>
            </Row>
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
        </>
      ) : (
        <Empty />
      )}
    </Row>
  )
})
