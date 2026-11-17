# Agent Context Notes

A personal technical writing site built with [Docusaurus](https://docusaurus.io/).
It is separate from any employer repository or production system.

## Work locally

```bash
npm install
npm run start
```

The first essay is in `blog/`; shorter reference notes are in `docs/`.

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
`abasavaraj/agent-context-notes` on GitHub Pages. Publishing is a separate step after review.
