import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { SkipNavLink } from '@reach/skip-nav'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Netlify Widget */}
          <script async src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
        </Head>
        <body>
          <SkipNavLink />
          <Main />
          <NextScript />
          <script dangerouslySetInnerHTML={{
            __html: `
              if (window.netlifyIdentity) {
                window.netlifyIdentity.on("init", user => {
                  if (!user) {
                    window.netlifyIdentity.on("login", () => {
                      document.location.href = "/admin/";
                    });
                  }
                });
              }
          `}}/>
        </body>
      </Html>
    )
  }
}

export default MyDocument
