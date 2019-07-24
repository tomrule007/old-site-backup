module.exports = {
  siteMetadata: {
    title: `Thomas J. Herzog - Blog & Portfolio`,
    author: {
      name: "Thomas J. Herzog",
      image: "/img/me.png",
      biography: "Frontend JavaScript React Developer (in-training). Follow along as I become a self taught software developer :)",
    },
    // for a list of supported networks take a look at https://jaketrent.github.io/react-social-icons/
    networks: [
      "https://github.com/tomrule007",
      "https://www.linkedin.com/in/thomas-herzog-409ab573/",
      "mailto:mail@tomrule007@gmail.com",
    ],
    about: '<p>A lightweight, mobile first blog starter with infinite scroll \
    and Material-UI design elements for \
    <a href="https://github.com/gatsbyjs/gatsby" target="_blank">Gatsby</a>. </p> \
    <p>For a quick start with this starter checkout the \
    <a href="/posts/get-started/get-started/">Get Started</a> guide. For \
    an overview of plugins used in this starter have a look at \
    <a href="/posts/gatsby-plugins/gatsby-plugins/">Plugins</a>. \
    To see a markdown blog entry in action click \
    <a href="/posts/markdown/markdown-test/">here</a>. \
    </p> \
    '
  },
  plugins: [
    `gatsby-plugin-tslint`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-emoji-unicode`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 750,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/styles/typography`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-haezl",
        short_name: "haezl",
        start_url: "/",
        background_color: "#eeeeee",
        theme_color: "#0c9ed1",
        display: "standalone",
        icon: "static/img/me.png",
        include_favicon: true,
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        // Don't cache-bust JS or CSS files, and anything in the static directory,
        // since these files have unique URLs and their contents will never change
        dontCacheBustUrlsMatching: /(\.js$|\.css$|static\/)/,
        runtimeCaching: [{
          // Use networkFirst
          urlPattern: /(\.js$|\.css$|static\/)/,
          handler: `networkFirst`,
        },
        {
          // Add runtime caching of various other page resources
          urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
          handler: `staleWhileRevalidate`,
        },
        {
          // Google Fonts CSS (doesn't end in .css so we need to specify it)
          urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css/,
          handler: `staleWhileRevalidate`,
        },
        ],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        theme: {
          primaryColor: "#0c9ed1",
        },
      },
    },
  ],
  pathPrefix: "/img",
}
