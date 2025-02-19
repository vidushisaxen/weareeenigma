import { defineArrayMember, defineField, defineType } from 'sanity'
import {DocumentTextIcon} from '@sanity/icons'


export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon:DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
        name: 'projectDetail',
        title: 'ProjectDetail',
        type: 'text',
      }),
    defineField({
      name: 'link',
      title: 'Project Link',
      type: 'url',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
        name:'categories',
        type:'array',
        of:[defineArrayMember({ type: 'reference', to: [{ type: 'projectCategory' }] })]
    })
  
  ],
})
