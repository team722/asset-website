import type { GlobalConfig } from 'payload'

export const ContactPage: GlobalConfig = {
  slug: 'contact-page',
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
            { name: 'title', type: 'text', required: true, defaultValue: 'Contact Us' },
            { name: 'subtitle', type: 'text', required: true, defaultValue: 'Get in touch with us for any inquiries.' },
          ],
        },
        {
          label: 'Contact Details',
          fields: [
            {
              type: 'row',
              fields: [
                { name: 'websiteUrl', type: 'text', label: 'Website URL', admin: { width: '50%' } },
                { name: 'socialHandle', type: 'text', label: 'Social Handle', admin: { width: '50%' } },
              ],
            },
            {
              type: 'row',
              fields: [
                { name: 'phoneNumber', type: 'text', label: 'Phone Number', admin: { width: '50%' } },
                { name: 'emailAddress', type: 'text', label: 'Email Address', admin: { width: '50%' } },
              ],
            },
            { name: 'physicalAddress', type: 'textarea', label: 'Physical Address' },
          ],
        },
      ]
    }
  ],
}
