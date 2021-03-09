const path = require('path');

module.exports = {
    siteMetadata: {
        title: `Mark Anthoney`,
        name: `markanthoney`,
        siteUrl: `https://gatsby-theme-novela.netlify.com`,
        description: `This is my description that will be used in the meta tags and important for search results`,

        // important to set the main text that appears in the hero
        hero: {
            heading: `Hi, I'm Mark. I'm an instructional designer.`,
            maxWidth: 652,
        },
        social: [
            {
                name: `twitter`,
                url: `https://twitter.com/narative`,
            },
            {
                name: `github`,
                url: `https://github.com/narative`,
            },
        ],
    },
    plugins: [
        {
            resolve: "@narative/gatsby-theme-novela",
            options: {
                contentPosts: "content/posts",
                contentAuthors: "content/authors",
                rootPath: "/",
                basePath: "/",
                authorsPage: true,
                mailchimp: false,
                sources: {
                    local: true,
                    contentful: false,
                },
            },
        }
    ],
};
