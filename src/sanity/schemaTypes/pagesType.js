import { defineArrayMember, defineField, defineType } from 'sanity'
import { DocumentTextIcon } from '@sanity/icons'

export default defineType({
  name: 'homepage',
  title: 'HomePage',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    }),
    defineField({
      name: 'heroContent',
      title: 'Hero Content',
      type: 'object',
      fields: [
        defineField({
          name: 'firstheading',
          title: 'T1',
          type: 'string',
        }),
        defineField({
          name: 'secondheading',
          title: 'T2',
          type: 'string',
        }),
        defineField({
          name: 'thirdheading',
          title: 'T3',
          type: 'string',
        }),
        defineField({
          name: 'subheading',
          title: 'Subtitle',
          type: 'string',
        }),
        defineField({
          name: 'backgroundVideo',
          title: 'Background Video',
          type: 'file', // Upload video to Sanity CDN
          options: {
            accept: 'video/*', // Accept any video type
          },
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({
      name: 'about',
      title: 'About Content',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'H2',
          type: 'string',
        }),
        defineField({
          name: 'subheading',
          title: 'subtitle',
          type: 'string',
        }),
        defineField({
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'image',
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({
      name: 'faq',
      title: 'FAQ Section',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'faqItem',
          title: 'FAQ Item',
          fields: [
            defineField({
              name: 'question',
              title: 'Question',
              type: 'string',
            }),
            defineField({
              name: 'answer',
              title: 'Answer',
              type: 'text',
            }),
          ],
        },
      ],
    }),


  ],
})
