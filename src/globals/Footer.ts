import type { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'contactInfo',
      type: 'group',
      fields: [
        { name: 'communication', type: 'text' },
        { name: 'phone', type: 'text' },
        { name: 'email', type: 'text' },
      ],
    },
    {
      name: 'socialLinks',
      type: 'array',
      labels: {
        singular: 'Social Media Link',
        plural: 'Social Media Links',
      },
      fields: [
        { name: 'platform', type: 'text', required: true, label: 'Platform Name' },
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          label: 'Icon/Image Upload',
        },
        { name: 'url', type: 'text', required: true, label: 'URL' },
        { name: 'altText', type: 'text', label: 'Alt Text' },
      ],
    },
    {
      name: 'getInvolvedLinks',
      type: 'array',
      labels: {
        singular: 'Get Involved Link',
        plural: 'Get Involved Links',
      },
      fields: [
        { name: 'linkTitle', type: 'text', required: true, label: 'Link Title' },
        { name: 'linkUrl', type: 'text', required: true, label: 'Link URL' },
        { name: 'displayOrder', type: 'number', label: 'Display Order' },
      ],
    },
  ],
}
