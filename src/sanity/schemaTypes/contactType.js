import { defineArrayMember, defineField, defineType } from 'sanity'
import { DocumentTextIcon } from '@sanity/icons'

export default defineType({
  name: 'contact',
  title: 'Contact',
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
          name: 'heading',
          title: 'Heading',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'string',
        }),
       
      ],
    }),
    defineField({
        name: 'videoContent',
        title: 'Video Content',
        type: 'object',
        fields: [
         defineField({
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'image',
          options: { hotspot: true },
        }),
        ],
      }),
      defineField({
        name: 'contactForm',
        title: 'Contact Form',
        type: 'object',
        fields: [
          defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
          }),
          defineField({
            name: 'address',
            title: 'Address',
            type: 'string',
          }),
          defineField({
            name: 'phone',
            title: 'Phone',
            type: 'string',
          }), 
          defineField({
            name: 'heading',
            title: 'Form Heading',
            type: 'string',
          }),
          defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
          }),
          defineField({
            name: 'Uemail',
            title: 'User Email',
            type: 'string',
          }),
          defineField({
            name: 'Uphone',
            title: 'User Phone Number',
            type: 'string',
          }),
          defineField({
            name: 'message',
            title: 'Message',
            type: 'string',
          }),
        ],
      }),
  ],
})
