'use client'
import Script from 'next/script'
import { useEffect, useState } from 'react'
export default function GoogleAnalytics() {
  const [shouldLoadGA, setShouldLoadGA] = useState<boolean>(false)
  useEffect(() => {
    const hostname = window.location.hostname
    const allowedDomains = ['789bet22.biz', '789bet23.net', '789eg.net', '789eh.net']
    const isAllowedDomain = allowedDomains.includes(hostname)
    setShouldLoadGA(isAllowedDomain)
  }, [])

  if (!shouldLoadGA) {
    return null
  }

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-KVXQ3Z7K94"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-KVXQ3Z7K94');
        `}
      </Script>
    </>
  )
}
