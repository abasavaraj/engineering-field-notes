# Engineering Field Notes

A personal technical writing site built with [Docusaurus](https://docusaurus.io/).
It is separate from any employer repository or production system.

## Work locally

```bash
npm install
npm run start
```

Essays live in `blog/`; shorter reference notes live in `docs/`. The site has room for
AI systems, Integration Engineering, and design-pattern articles. Tag future posts with
`ai-agents`, `integration-engineering`, or `design-patterns` as appropriate.

Add a post as `blog/YYYY-MM-DD-topic.md` with a title, description, author, and tags in
front matter. Build and review it locally before committing. Site deployment is manual;
committing a post does not publish the website, but source in a public repository is
still public. Never commit sensitive drafts, even with `draft: true`.

## Check before publishing

- Use only invented examples and information you are authorized to share.
- Do not paste internal code, documents, screenshots, customer data, metrics, or infrastructure details.
- Review the rendered site, metadata, and `git diff` before making the repository public.
- Check any employer policy that applies to public writing.

## Build

```bash
npm run build
```

This produces the static site in `build/`. The Docusaurus configuration currently targets
`abasavaraj/engineering-field-notes` on GitHub Pages. Publishing is a separate step after review.
