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
    },
    sitemap: 'https://eonsaway.com/sitemap.xml',
  }
}
