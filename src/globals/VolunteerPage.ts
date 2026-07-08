import type { GlobalConfig } from 'payload'

export const VolunteerPage: GlobalConfig = {
  slug: 'volunteer-page',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Volunteer With Asset',
    },
    {
      name: 'introImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'introText',
      type: 'richText',
      required: true,
    },
    {
      name: 'testimonials',
      type: 'array',
      labels: {
        singular: 'Testimonial',
        plural: 'Testimonials',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'quote',
          type: 'textarea',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}
