import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'

export const groupContactsApiSlice = createApi({
  reducerPath: 'groupContactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://mocki.io/v1' }),
  endpoints(builder) {
    return {
      GetGroupContacts: builder.query<GroupContactsDto[], void>({
        query: () => ({ url: '/a8553648-28b5-4f30-aeef-990efe16c0aa' }),
      }),
    }
  },
})

export const { useGetGroupContactsQuery } = groupContactsApiSlice
