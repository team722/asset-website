import type { GlobalConfig } from 'payload'

export const ResourcesPage: GlobalConfig = {
  slug: 'resources-page',
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
            { name: 'title', type: 'text', required: true, defaultValue: 'Resources' },
            { name: 'subtitle', type: 'text', required: true, defaultValue: 'Every Tribe Deserves Justice and Equality.' },
          ],
        },
      ]
    }
  ],
}
