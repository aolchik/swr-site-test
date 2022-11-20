
import dynamic from 'next/dynamic'
import config from '../cms/config'
import Head from 'next/head'
import React from 'react'

const CMS = dynamic(() => { 
    window.CMS_MANUAL_INIT = true;

    return import('netlify-cms-app').then((cms) => { 
      cms.init({ config });

      import('@emotion/react').then(() => {
        import('../modules/netlify-cms/components/widgets').then((widget) => {
          cms.registerPreviewStyle('/styles-preview.css')
          cms.registerWidget('mdx', widget.MdxControl)
          cms.registerPreviewTemplate('blog', widget.NextraPagePreviewTemplate)
        })
      })
    }) 
}, { ssr: false, loading: () => <h1>Loading</h1> })


export default function CMSPage() {
  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <CMS />
    </>
  )
}
