
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config",
  unstable_flexsearch: true,
  unstable_staticImage: true,
})

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')
const withVanillaExtract = createVanillaExtractPlugin()
  // from https://github.com/seek-oss/vanilla-extract

// eslint-disable-next-line @typescript-eslint/no-var-requires
//const MiniCssExtractPlugin = require("mini-css-extract-plugin")

// @FIXME: css-loader pode estar colidindo com o outro loader. style-loader? abrir rules para ver
module.exports = withVanillaExtract(withNextra({
  webpack: (
    // for more info see https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
    config
  ) => {
    // config.module.rules.push({
    //   test: /\.css$/i,
    //   use: [
    //     "css-loader",
    //     "postcss-loader",
    //   ],
    // })
    // config.plugins.push(new VanillaExtractPlugin())
    // config.plugins.push(new MiniCssExtractPlugin())
    // config.module.rules.push({
    //   test: /\.vanilla\.css$/i,
    //   use: [
    //     MiniCssExtractPlugin.loader, 
    //     {
    //       loader: require.resolve('css-loader'),
    //       options: {
    //         url: false
    //       },
    //     }
    //   ],
    // })
    console.dir(config, { depth: null })
    return config
  },
  i18n: {
    locales: [ "en-US", "pt-BR" ],
    defaultLocale: "pt-BR",
  },
  redirects: () => {
    return [
      {
        source: "/docs",
        destination: "/docs/getting-started",
        statusCode: 301,
      },
      {
        source: "/advanced/performance",
        destination: "/docs/advanced/performance",
        statusCode: 301,
      },
      {
        source: "/advanced/cache",
        destination: "/docs/advanced/cache",
        statusCode: 301,
      },
      {
        source: "/docs/cache",
        destination: "/docs/advanced/cache",
        statusCode: 301,
      },
      {
        source: "/change-log",
        destination: "/docs/change-log",
        statusCode: 301,
      },
      {
        source: "/blog/swr-1",
        destination: "/blog/swr-v1",
        statusCode: 301,
      },
      {
        source: "/docs",
        destination: "/docs/getting-started",
        statusCode: 302,
      },
      {
        source: "/examples",
        destination: "/examples/basic",
        statusCode: 302,
      },
    ]
  },
}))

