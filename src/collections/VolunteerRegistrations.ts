import type { CollectionConfig } from 'payload'

export const VolunteerRegistrations: CollectionConfig = {
  slug: 'volunteer-registrations',
  admin: {
    useAsTitle: 'fullName',
    defaultColumns: ['fullName', 'email', 'mobile', 'city', 'createdAt'],
  },
  access: {
    create: () => true, // Allow anyone to submit the form
    read: ({ req: { user } }) => Boolean(user), // Only logged-in admins can view
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'fullName',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'mobile',
      type: 'text',
      required: true,
    },
    {
      name: 'city',
      type: 'text',
      required: true,
    },
    {
      name: 'state',
      type: 'text',
      required: true,
    },
    {
      name: 'interest',
      type: 'textarea',
      required: true,
      label: 'Your Interest',
    },
  ],
}
