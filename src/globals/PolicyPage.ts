import type { GlobalConfig } from 'payload'

export const PolicyPage: GlobalConfig = {
  slug: 'policy-page',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Area Visit – Field Observation & Community Assessment',
    },
    {
      name: 'introText',
      type: 'textarea',
      required: true,
      defaultValue: 'Our field team conducts regular Area Visits to understand the living conditions, challenges, and development needs of tribal communities. Each visit is planned to gather accurate insights that help us design effective programs.',
    },
    {
      name: 'sections',
      type: 'array',
      labels: {
        singular: 'Policy Section',
        plural: 'Policy Sections',
      },
      fields: [
        {
          name: 'heading',
          type: 'text',
          required: true,
        },
        {
          name: 'content',
          type: 'richText',
          required: true,
        },
      ],
    },
  ],
}
