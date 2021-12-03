import React, { ComponentType } from 'react'

export default function App({ Page, pageProps }: { Page: ComponentType<any>, pageProps: any }) {
  return (
    <main>
      <head>
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <Page {...pageProps} />
    </main>
  )
}
