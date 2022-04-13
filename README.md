# Energy Infrastructure API Documentation
This is a website to document the [Energy Infrastructure API](https://github.com/bkleeman/energy-infrastructure-api).

Built with GatsbyJS and this starter: https://www.jannikbuschke.de/gatsby-antd-docs/

Edit files in `/content/docs` and see live updates.
Sidebar items are added by adding a directory to `content/docs/template` and pages are created by adding a markdown file to that directory.

# Hosting

In order to host the site the **sites path** needs to be put into gatsby-config.js export object on to the property _pathPrefix_. Then run

```bash
npm run build
```

and copy the content of the public folder to the webspace.

# License

MIT
