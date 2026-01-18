import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ContactDto } from 'src/types/dto/ContactDto'

export const contactsApiSlice = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://mocki.io/v1' }),
  endpoints(builder) {
    return {
      getContacts: builder.query<ContactDto[], void>({
        query: () => ({ url: '/91840b05-7b74-4f20-88ca-64d01a3d2cb8' }),
      }),
    }
  },
})

export const { useGetContactsQuery } = contactsApiSlice
