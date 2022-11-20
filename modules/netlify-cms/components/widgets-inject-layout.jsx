import React from 'react'
import PropTypes from 'prop-types'
import MDX from 'mdx-scoped-runtime'
import { MdxControl, MdxPreview } from 'netlify-cms-widget-mdx'
import { ThemeProvider } from 'next-themes'
import { style } from '@vanilla-extract/css'
  // from https://vanilla-extract.style/documentation/styling-api/
  // plugin for writing stylesheets in ts (does not work)
  // what about applying the same css being used in the application on NextraPagePreviewTemplate

import Authors, { Author } from '../../../components/authors'

// FIXME
//  Error: Invalid hook call
//    H1 => More than one react installed
//      Netlify-cms uses a different version of react (16.14.0)
//        pnpm why react
//      Trying to use latest version of netlify-cms, but netlify-cms from git repo does not include the version in package.json
//         Need to install package from subfolder 
//          https://stackoverflow.com/questions/39194648/npm-install-package-from-github-repo-subfolder
//      pnpm
//        pnpm is not installing node modules
//          deleted stored files in ?aolchik/Library/pnpm/store/v3 to reinstall from zero
//
//       pnpm seems not to be installing node modules from git generating module_not_found
//          https://nextjs.org/docs/messages/module-not-found
//            need to build and commit dist folder
//              https://stackoverflow.com/questions/42647387/npm-missing-dist-and-src-directories-when-trying-to-install-directly-from-a-git
//          
//          "netlify-cms": "https://gitpkg.now.sh/aolchik/netlify-cms/packages/netlify-cms?master",
//            'https://gitpkg.now.sh/api/pkg?url=aolchik/netlify-cms/packages/netlify-cms&commit=master'
//              Getting timeout error
//                https://github.com/EqualMa/gitpkg/issues/25
//
//          "netlify-cms-app": "https://gitpkg.now.sh/aolchik/netlify-cms/packages/netlify-cms-app",
//          "netlify-cms-lib-util": "https://gitpkg.now.sh/aolchik/netlify-cms/packages/netlify-lib-util",
//          "react-codemirror2": "https://github.com/scniro/react-codemirror2",
//
//        install from scoped package
//          > npm publish --access public
//          how to solve dependencies to non-scoped packages?
//            trying to use overrides
//              discussion at https://github.com/pnpm/pnpm/discussions/4604
//                article [Hosting multiple React applications on the same document](https://medium.jonasbandi.net/hosting-multiple-react-applications-on-the-same-document-c887df1a1fcd)
//                could be a possibility, but supporting package is too old
//
//              using workspaces and hoisting may solve?
//
//              single-spa architecture may be useful? https://single-spa.js.org/docs/getting-started-overview
//                seems a lot of work :(
//  
//      building netlify_cms is generating error ERR_OSSL_EVP_UNSUPPORTED
//
//      react-codemirror nested dependency is blocking upgrade to react 17
//        https://github.com/netlify/netlify-cms/issues/5376
//          fix: https://github.com/scniro/react-codemirror2/pull/224
//      
//      --legacy-peer-deps flag attempt
//        https://github.com/netlify/netlify-cms/issues/5376
//        https://stackoverflow.com/questions/66239691/what-does-npm-install-legacy-peer-deps-do-exactly-when-is-it-recommended-wh
//        seems to be the default behaviour for pnpm (strict-peer-dependencies: false)
//
//      following thread in multiple instances of react
//        https://github.com/facebook/react/issues/13991
//          aliasing react in webpack
//            does nextra has a different webpack loader?
//
//      how to debug NextraLayout utilization?
//        trying to link package locally using pnpm link https://pnpm.io/cli/link
//        module not found when importing
//
//      Global styles not applied
//        Trying to load styles through registerPreviewStyle
//          
//
//
//    REFERENCES
//      Invalid hook call in 9.0.6 - https://github.com/vercel/next.js/issues/9022
//   
//  PENDING
//    remove cloned netlify-cms repo


//import __nextra_withLayout__ from 'nextra-theme-docs'
//import { withSSG as __nextra_withSSG__ } from 'nextra/ssg'
import __nextra_layoutConfig__ from '../../../theme.config'


// const NextraPage = __nextra_withSSG__(__nextra_withLayout__({
//   filename: 'preview_page',
//   route: '/admin/preview_page',
//   meta: { title: 'Preview Page' },
//   pageMap: [
//     {
//       name: 'index',
//       route: '/',
//       frontMatter: undefined,
//       locale: 'en-US'
//     },
//     { name: 'meta.json', meta: undefined, locale: 'en-US' }
//   ],
//   titleText: undefined,
//   headings: [ ],
//   hasH1: false,
//   timestamp: 1655889782000
// }, __nextra_layoutConfig__ ))


// const NextraLayout = ( { children } ) => {
//   console.log(children.type.getLayout)
//   //({ Component, pageProps }) => {
//   //const getLayout = Component.getLayout || ((page) => page);
//   //return getLayout(<Component {...pageProps} />);
//   const getLayout = children.type.getLayout || ((page) => page)
//   //return children
//   return getLayout(children)
// }

const ThemeConfigContext = React.createContext()
//const useConfig = () => React.useContext(ThemeConfigContext)

const NextraPagePreviewTemplate = ({ entry }) => {
  console.dir(__nextra_layoutConfig__, { depth: null })
 
  return (
    <ThemeConfigContext.Provider value={__nextra_layoutConfig__}>
      <ThemeProvider
          attribute="class"
          disableTransitionOnChange={true}
          {...{
            defaultTheme: __nextra_layoutConfig__.nextThemes.defaultTheme,
            storageKey: __nextra_layoutConfig__.nextThemes.storageKey,
            forcedTheme: __nextra_layoutConfig__.nextThemes.forcedTheme
          }}
      >
        <MDX
          scope={
            {
              Author,
              Authors
            }
          }
          onError={(error) => console.log(error)}
        >
          {entry.getIn(['data', 'body'])}
        </MDX>
      </ThemeProvider>
    </ThemeConfigContext.Provider>
  )
}

//NextraPagePreviewTemplate.getLayout = NextraLayout.getLayout

NextraPagePreviewTemplate.propTypes = {
  entry: PropTypes.object.isRequired,
}

export { MdxControl, MdxPreview, NextraPagePreviewTemplate }