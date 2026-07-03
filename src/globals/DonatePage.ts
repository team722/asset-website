import type { GlobalConfig } from 'payload'

export const DonatePage: GlobalConfig = {
  slug: 'donate-page',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Introduction',
          fields: [
            { name: 'pageTitle', type: 'text', required: true, defaultValue: 'Your Contribution Changes Lives' },
            { name: 'introImage', type: 'upload', relationTo: 'media', required: true },
            { name: 'introText', type: 'richText', required: true },
          ],
        },
        {
          label: 'Payment Details',
          fields: [
            { name: 'qrCode', type: 'upload', relationTo: 'media', required: true },
            {
              name: 'bankDetails',
              type: 'group',
              fields: [
                { name: 'bankName', type: 'text', required: true },
                { name: 'accountNumber', type: 'text', required: true },
                { name: 'accountName', type: 'text', required: true },
                { name: 'accountType', type: 'text', required: true },
                { name: 'branchName', type: 'text', required: true },
                { name: 'ifscCode', type: 'text', required: true },
              ],
            },
          ],
        },
        {
          label: 'Support Areas',
          fields: [
            { name: 'supportTitle', type: 'text', required: true, defaultValue: 'What Will Your Donation Support' },
            {
              name: 'supportAreasList',
              type: 'array',
              fields: [
                { name: 'icon', type: 'upload', relationTo: 'media', required: true },
                { name: 'title', type: 'text', required: true },
              ],
            },
          ],
        },
        {
          label: 'FAQs',
          fields: [
            { name: 'faqTitle', type: 'text', required: true, defaultValue: 'Frequently Asked Questions' },
            {
              name: 'faqs',
              type: 'array',
              fields: [
                { name: 'question', type: 'text', required: true },
                { name: 'answer', type: 'richText', required: true },
              ],
            },
          ],
        },
      ]
    }
  ],
}
