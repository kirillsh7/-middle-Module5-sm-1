import { memo, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ContactCard } from 'src/components/ContactCard'
import { FilterForm, FilterFormValues } from 'src/components/FilterForm'
import { ContactDto } from 'src/types/dto/ContactDto'
import { useGetContactsQuery, useGetGroupContactsQuery } from 'src/store/slice'

export const ContactListPage = memo(() => {
  const { data: contactsState = [], isLoading: isLoadingContacts } = useGetContactsQuery()
  const { data: groupContactsState = [], isLoading: isLoadingGroups } = useGetGroupContactsQuery()
  const [contacts, setContacts] = useState<ContactDto[]>([])

  useEffect(() => {
    setContacts(contactsState)
  }, [])

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
  if (isLoadingContacts || isLoadingGroups) {
    return (
      <Row xxl={1}>
        <Col>
          <div className='text-center p-5'>Загрузка контактов...</div>
        </Col>
      </Row>
    )
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
