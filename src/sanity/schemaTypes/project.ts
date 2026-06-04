import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Built', value: 'Built'},
          {title: 'In progress', value: 'In progress'},
          {title: 'Planned', value: 'Planned'},
        ],
        layout: 'radio',
      },
      initialValue: 'In progress',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required().min(40).max(300),
    }),

    defineField({
      name: 'featured',
      title: 'Featured on homepage',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'stack',
      title: 'Technology Stack',
      type: 'array',
      of: [{type: 'string'}],
      validation: (rule) => rule.min(1),
    }),

    defineField({
      name: 'sections',
      title: 'Case Study Sections',
      type: 'array',
      initialValue: [
        {heading: 'Project Goals', body: ''},
        {heading: 'Core Features', body: ''},
        {heading: 'Technical Challenges', body: ''},
        {heading: 'Future Plans', body: ''},
      ],
      of: [
        {
          type: 'object',
          title: 'Section',
          fields: [
            defineField({
              name: 'heading',
              title: 'Heading',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'body',
              title: 'Body',
              type: 'text',
              rows: 5,
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'heading',
              subtitle: 'body',
            },
          },
        },
      ],
      validation: (rule) => rule.required().min(1),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'status',
    },
  },
})