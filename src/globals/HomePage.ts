import type { GlobalConfig } from 'payload'

export const HomePage: GlobalConfig = {
  slug: 'home-page',
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
            { name: 'heroHeadline', type: 'text', required: true },
            { name: 'heroSubheadline', type: 'text', required: true },
            { name: 'heroBackgroundImage', type: 'upload', relationTo: 'media', required: true },
            { name: 'heroCtaText', type: 'text', required: true },
            { name: 'heroCtaLink', type: 'text', required: true },
          ],
        },
        {
          label: 'Journey',
          fields: [
            {name: 'journeyHeadline', type: 'text' },
            { name: 'journeySubtitle', type: 'text' },
            {
              name: 'featuredVideo',
              type: 'group',
              fields: [
                { name: 'title', type: 'text' },
                { name: 'duration', type: 'text' },
                { name: 'thumbnail', type: 'upload', relationTo: 'media' },
                { name: 'videoUrl', type: 'text' },
              ]
            },
            {
              name: 'sideVideos',
              type: 'array',
              maxRows: 2,
              fields: [
                { name: 'title', type: 'text' },
                { name: 'duration', type: 'text' },
                { name: 'thumbnail', type: 'upload', relationTo: 'media' },
                { name: 'videoUrl', type: 'text' },
              ]
            }
          ]
        },
        {
          label: 'Impact',
          fields: [
            { name: 'impactHeadline', type: 'text' },
            { name: 'impactSubtitle', type: 'text' },
            { name: 'impactMainImage', type: 'upload', relationTo: 'media' },
            {
              name: 'impactStats',
              type: 'array',
              maxRows: 6,
              fields: [
                { name: 'number', type: 'text', required: true },
                { name: 'label', type: 'text', required: true },
              ]
            }
          ]
        },
        {
          label: 'Programmes',
          fields: [
            { name: 'programmesHeadline', type: 'text' },
            { name: 'programmesSubtitle', type: 'text' },
            {
              name: 'programmesItems',
              type: 'array',
              fields: [
                { name: 'icon', type: 'upload', relationTo: 'media' },
                { name: 'title', type: 'text', required: true },
                { name: 'description', type: 'text' },
              ]
            }
          ]
        },
        {
          label: 'Partners',
          fields: [
            { name: 'partnersHeadline', type: 'text' },
            { name: 'partnersSubtitle', type: 'text' },
            {
              name: 'partnersLogos',
              type: 'array',
              fields: [
                { name: 'logo', type: 'upload', relationTo: 'media', required: true }
              ]
            }
          ]
        },
        {
          label: 'Goals',
          fields: [
            { name: 'goalsHeadline', type: 'text' },
            { name: 'goalsSubtitle', type: 'text' },
            {
              name: 'goalsItems',
              type: 'array',
              fields: [
                { name: 'icon', type: 'upload', relationTo: 'media' },
                { name: 'title', type: 'text', required: true }
              ]
            }
          ]
        },
        {
          label: 'Field Work',
          fields: [
            { name: 'fieldWorkHeadline', type: 'text' },
            { name: 'fieldWorkSubtitle', type: 'text' },
            {
              name: 'fieldWorkImages',
              type: 'array',
              maxRows: 5,
              fields: [
                { name: 'image', type: 'upload', relationTo: 'media', required: true },
                { name: 'caption', type: 'text' }
              ]
            }
          ]
        },
        {
          label: 'Awards',
          fields: [
            { name: 'awardsHeadline', type: 'text' },
            { name: 'awardsSubtitle', type: 'text' },
            {
              name: 'awardsItems',
              type: 'array',
              fields: [
                { name: 'image', type: 'upload', relationTo: 'media', required: true }
              ]
            }
          ]
        },
        {
          label: 'Testimonials',
          fields: [
            { name: 'testimonialsHeadline', type: 'text' },
            { name: 'testimonialsSubtitle', type: 'text' },
            {
              name: 'testimonialsItems',
              type: 'array',
              fields: [
                { name: 'image', type: 'upload', relationTo: 'media', required: true },
                { name: 'quote', type: 'textarea', required: true },
                { name: 'author', type: 'text', required: true }
              ]
            }
          ]
        }
      ]
    }
  ],
}
