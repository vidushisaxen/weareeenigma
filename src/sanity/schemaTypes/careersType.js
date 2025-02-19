import { defineArrayMember, defineField, defineType } from 'sanity'
import { DocumentTextIcon } from '@sanity/icons'

export default defineType({
  name: 'careers',
  title: 'Careers',
  type: 'document', 
  icon: DocumentTextIcon,
  fields: [
    defineField({ name: 'title', title: 'Page Title', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } }),
    defineField({ name: 'para', title: 'Para', type: 'text' }),
    defineField({
      name: 'openingsContent',
      title: 'Openings Content',
      type: 'object',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'string' }),
      ],
    }),
    defineField({
      name: 'jobOpenings',
      title: 'Job Openings',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'profileImage', title: 'Profile Image', type: 'image', options: { hotspot: true } }),
            defineField({ name: 'jobTitle', title: 'Job Title', type: 'string' }),
            defineField({ name: 'slug', title: 'Job Slug', type: 'slug', options: { source: 'jobTitle', maxLength: 96 } }),
            defineField({ name: 'smallDescription', title: 'Short Description', type: 'string' }),
            defineField({ name: 'features', title: 'Features', type: 'array', of: [{ type: 'string' }] }),
            defineField({ name: 'tag', title: 'Tag', type: 'string' }),
            defineField({ name: 'body', type: 'blockContent'}),
            defineField({ name:'categories', type:'array', of:[defineArrayMember({ type: 'reference', to: [{ type: 'careersCategory' }] })]
            })
          ],
        }),
      ],
    }),
  ],
})
