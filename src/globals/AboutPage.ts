import type { GlobalConfig } from 'payload'

export const AboutPage: GlobalConfig = {
  slug: 'about-page',
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
          label: 'Our Story',
          fields: [
            { name: 'storyImage', type: 'upload', relationTo: 'media', required: true },
            { name: 'storyText', type: 'richText', required: true },
            { name: 'visionText', type: 'textarea', required: true },
            { name: 'missionText', type: 'textarea', required: true },
          ],
        },
        {
          label: 'Objectives',
          fields: [
            {
              name: 'objectivesList',
              type: 'array',
              fields: [
                { name: 'icon', type: 'upload', relationTo: 'media' },
                { name: 'label', type: 'text', required: true },
              ],
            },
          ],
        },
        {
          label: 'Trust',
          fields: [
            {
              name: 'trustReasons',
              type: 'array',
              fields: [
                { name: 'text', type: 'text', required: true },
              ],
            },
          ],
        },
        {
          label: 'Leadership Team',
          fields: [
            {
              name: 'teamMembers',
              type: 'array',
              fields: [
                { name: 'name', type: 'text', required: true },
                { name: 'title', type: 'text', required: true },
                { name: 'bio', type: 'richText', required: true },
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
      ],
    },
  ],
}
