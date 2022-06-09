
import dynamic from 'next/dynamic'
import config from '../cms/config'
import Head from 'next/head'


const CMS = dynamic(() => { 
    window.CMS_MANUAL_INIT = true
    return import('netlify-cms').then((cms) => { cms.init({ config }) }) 
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
