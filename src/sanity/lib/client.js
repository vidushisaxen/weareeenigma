import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_KEY ,
    perspective: 'published',
    stega: { studioUrl: "http://localhost:3000/studio" },
})
