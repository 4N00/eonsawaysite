import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  const isVercelPreview = process.env.VERCEL_URL && !process.env.VERCEL_URL.includes('eonsaway.com')
  
  if (isVercelPreview) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    }
  }
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/assets/img/Leave1 (1).png',
        '/assets/img/leave2 (1).png',
        '/assets/img/leave3 (1).png',
        '/assets/img/leave4 (1).png',
        '/assets/img/leave5 (1).png',
        '/assets/img/dot (1).png',
      ],
    },
    sitemap: 'https://eonsaway.com/sitemap.xml',
  }
}
