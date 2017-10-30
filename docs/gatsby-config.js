module.exports = {
  plugins: [
    'gatsby-plugin-glamor',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: ['gatsby-remark-prismjs'],
      },
    },
  ],
};
