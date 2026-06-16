import type { GlobalConfig } from 'payload'

export const ProgrammesPage: GlobalConfig = {
  slug: 'programmes-page',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          fields: [
            { name: 'heroBackgroundImage', type: 'upload', relationTo: 'media', required: true },
            { name: 'title', type: 'text', required: true },
            { name: 'subtitle', type: 'text', required: true },
          ],
        },
        {
          label: 'Programmes List',
          fields: [
            {
              name: 'programmes',
              type: 'array',
              fields: [
                { name: 'title', type: 'text', required: true },
                { name: 'description', type: 'richText', required: true },
                { name: 'image', type: 'upload', relationTo: 'media', required: true },
                { 
                  name: 'layoutDirection', 
                  type: 'radio', 
                  options: [
                    { label: 'Image Left', value: 'left' },
                    { label: 'Image Right', value: 'right' }
                  ],
                  defaultValue: 'left',
                  required: true
                },
              ],
            },
          ],
        },
        {
          label: 'Call To Action',
          fields: [
            { name: 'ctaText', type: 'text', required: true, defaultValue: 'Donate' },
            { name: 'ctaLink', type: 'text', required: true, defaultValue: '/donate' },
          ],
        },
      ],
    },
  ],
}
