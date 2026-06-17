import type { CollectionConfig } from 'payload'
import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    // In production, save directly to Hostinger's persistent public_html folder
    // Locally, save to the Next.js public folder
    staticDir: process.env.NODE_ENV === 'production'
      ? '/home/u132651874/domains/darkslategray-whale-933394.hostingersite.com/public_html/media'
      : path.resolve(dirname, '../../public/media'),
  },
}