import type { Metadata } from 'next'

export const metadata_info: Metadata = {
  title: 'Perfect Shine',
  description: 'Professional Car Detailing Services',
  metadataBase: new URL('https://perfect-shine-production.up.railway.app'),
  openGraph: {
    title: 'Perfect Shine - Professional Car Detailing',
    description: 'Transform your vehicle with our expert car detailing services. Professional cleaning, polishing, and protection for your car.',
    url: 'https://perfect-shine-production.up.railway.app',
    siteName: 'Perfect Shine',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/img/og-image.png', // Make sure to add this image to your public/images folder
        width: 1200,
        height: 630,
        alt: 'Perfect Shine Car Detailing Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Perfect Shine - Professional Car Detailing',
    description: 'Transform your vehicle with our expert car detailing services. Professional cleaning, polishing, and protection for your car.',
    images: ['/images/og-image.jpg'],
  },
}