# Enigm Documentation

This repository contains the public Mintlify documentation project for Enigm.

## Product sections

- Enigm
- Enigm Command
- Enigm Server
- Enigm eSIM
- Enigm Key
- Enigm OS
- Security
- Intelligence
- Infrastructure
- Legal

## Local preview

Use the Mintlify CLI to preview the documentation from the repository root.

## Documentation image standard

Store documentation images under `assets/images/` and render them with the shared Enigm image frame:

```mdx
<div className="enigm-doc-image-frame">
  <img className="enigm-doc-image" src="/assets/images/example.jpg" alt="Descriptive image text" />
</div>
```

This keeps attached documentation images consistent with the Enigm visual system: subtle border, rounded corners, full-width responsive rendering, and light/dark theme compatibility.
