import { getPayload } from 'payload'
import config from './src/payload.config'

async function seed() {
  console.log('Starting Payload CMS content update...')
  const payload = await getPayload({ config })
  
  console.log('Updating Header...')
  await payload.updateGlobal({
    slug: 'header',
    data: {
      navLinks: [
        { label: 'Home', url: '/' },
        { label: 'About Us', url: '/about' },
        { label: 'Our Work', url: '/work' },
        { label: 'Get Involved', url: '/involved' },
        { label: 'Resources', url: '/resources' },
        { label: 'Contact', url: '/contact' },
      ],
    },
  })

  console.log('Updating Footer...')
  await payload.updateGlobal({
    slug: 'footer',
    data: {
      contactInfo: {
        communication: '7358274670',
        phone: '+1 234 567 8900',
        email: 'info@organization.org'
      },
      socialLinks: [
        { platform: 'facebook', url: '#', altText: 'Facebook' },
        { platform: 'instagram', url: '#', altText: 'Instagram' },
        { platform: 'youtube', url: '#', altText: 'YouTube' },
        { platform: 'twitter', url: '#', altText: 'Twitter' },
      ],
      getInvolvedLinks: [
        { linkTitle: 'Our causes', linkUrl: '#', displayOrder: 1 },
        { linkTitle: 'Our events', linkUrl: '#', displayOrder: 2 },
        { linkTitle: 'Donate now', linkUrl: '#', displayOrder: 3 },
        { linkTitle: 'Join as A Volunteer', linkUrl: '#', displayOrder: 4 },
      ],
    },
  })

  console.log('Updating HomePage...')
  await payload.updateGlobal({
    slug: 'home-page',
    data: {
      heroHeadline: 'YOUR EDUCATION, EMPOWERING YOUR COMMUNITY',
      heroSubheadline: 'You can format positive, lasting change. Choose the non-profit working for your community.',
      heroCtaText: 'DONATE',
      heroCtaLink: '#donate',
      
      journeySubtitle: 'A glimpse of the moments that shaped us and our impact',
      featuredVideo: {
        title: 'Accessing Government Schemes Made Easy',
        duration: '8 years',
        videoUrl: 'https://youtube.com'
      },
      sideVideos: [
        { title: 'A key that Unlocks Success', duration: '4 years', videoUrl: 'https://youtube.com' },
        { title: 'Empowering Tribal Art & Culture', duration: '7 years', videoUrl: 'https://youtube.com' }
      ],
      
      impactSubtitle: 'Changing lives every day',
      impactStats: [
        { number: '10+', label: 'Government schemes unleashed' },
        { number: '2000+', label: 'Youths trained & benefited' },
        { number: '15000+', label: 'Women artisans benefiting from SHG scheme grants' },
        { number: '3+', label: 'Awards across panchayats in different villages' },
        { number: '10+', label: 'Unorganized sector workers' },
        { number: '15000+', label: 'Tribal Rights Beneficiaries' },
      ],
      
      programmesSubtitle: "Solutions to the world's pressing issues",
      programmesItems: [
        { title: 'Rural Development', description: 'Creating integral paths for tomorrow' },
        { title: 'Education, Health, Child and Women Development', description: 'Transforming community spaces to empower' },
        { title: 'Tribal Development', description: 'Empowering communities globally without borders' },
        { title: 'Culture Development', description: 'Fostering cultural roots and networks' },
        { title: 'Tribal Rights', description: 'Advocating those in need by legal aide clinics' },
        { title: 'Accessing Government Schemes', description: 'Accessing governance that rights assures' },
      ],
      
      partnersSubtitle: 'Collaborating for Collective Impact',
      
      goalsSubtitle: 'Driving SDG aligned Initiatives',
      goalsItems: [
        { title: 'No Poverty' }, { title: 'Good Health and Well-being' },
        { title: 'Quality Education' }, { title: 'Gender Equality' },
        { title: 'Decent Work and Economic Growth' }, { title: 'Reduced Inequality' },
        { title: 'Climate Action' }, { title: 'Peace and Justice Strong Institutions' }
      ],
      
      fieldWorkSubtitle: 'Commitment to Ethical actions',
      fieldWorkImages: [
        { caption: 'Area visit' },
        { caption: 'Village people meeting' },
        { caption: 'Field Work' },
        { caption: 'Field Work' },
        { caption: 'Field Work' }
      ],
      
      awardsSubtitle: 'Recognizing Excellence and Service',
      
      testimonialsSubtitle: 'VOICES THAT INSPIRE US',
      testimonialsItems: [
        { quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', author: 'Donor Name' },
        { quote: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', author: 'Donor Name' },
        { quote: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.', author: 'Donor Name' }
      ]
    },
  })
  
  console.log('Content update complete!')
  process.exit(0)
}

seed()
