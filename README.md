# Enigm Documentation

Public technical documentation for the Enigm ecosystem.

Enigm documentation is written for security auditors, enterprise customers, technical partners, developers, privacy reviewers, and procurement teams. It describes the public architecture, product boundaries, security model, privacy model, governance posture, and operational limitations of Enigm without exposing internal infrastructure, providers, secrets, private endpoints, operational procedures, or attack-surface details.

Documentation site: [docs.enigm.io](https://docs.enigm.io)

## Documentation Principles

The documentation follows a privacy-first and security-focused model:

- Privacy is a foundational design principle, not an optional feature.
- Security controls exist to support privacy, content confidentiality, and user control.
- Product documentation must be precise, public-facing, vendor-neutral, and auditor-readable.
- Architecture descriptions must preserve trust-boundary clarity.
- Administrative workflows must remain separate from message plaintext, private key material, secure call content, and protected user communications.
- Metadata language must be careful: metadata is minimized, purpose-limited, access-controlled, and partially encrypted according to the applicable product and storage domain.
- Public documentation must not expose infrastructure providers, internal service names, internal endpoints, bucket names, database names, tokens, secrets, IPs, operational topology, or implementation-sensitive details.

## Product Coverage

The documentation is organized around Enigm products and supporting trust domains:

- **Enigm**: private messaging, secure calls, account model, key management, Active Defense, multi-device trust, and network privacy.
- **Enigm Command**: web control panel for account, device, session, product lifecycle, payments, Enyra Product Assistant, and administrative workflows.
- **Enigm Link**: Command-governed official USB secure environment with desktop apps, Boot OS, VPN validation, protected browser environment, and controlled updates.
- **Enigm Server**: dedicated private messaging environments, membership, administration boundaries, encrypted content lifecycle, regions, and server lifecycle.
- **Enigm OS**: secure operating system, Device Trust, Trust Security Center, network policy, OTA Architecture, OTA Security, and production gates.
- **Enigm Key**: physical emergency key device, hardware model, emergency workflow, security model, and privacy/data lifecycle.
- **Enigm eSIM**: global data-only eSIM connectivity, lifecycle/compliance boundaries, carrier-layer separation, and country-level data rates.
- **Security & Trust**: security model, privacy model, cryptography, governance, transparency, intelligence, infrastructure, legal, and disclosure pages.

## Repository Structure

```text
app/                 Enigm private messaging documentation
command/             Enigm Command documentation
link/                Enigm Link documentation
server/              Enigm Server documentation
os/                  Enigm OS documentation
key/                 Enigm Key documentation
esim/                Enigm eSIM documentation
security/            Security, privacy, cryptography, governance
intelligence/        Enigm Intelligence and Enyra security AI
infrastructure/      SDLC, operations, resilience
legal/               Legal governance, retention, limitations, disclosure
support/             FAQ and support entry points
quickstarts/         User-facing quickstart guides
assets/              Public documentation assets
docs.json            Documentation navigation and site configuration
llms.txt             Public machine-readable documentation index
style.css            Enigm visual styling overrides
```

## Public Documentation Boundaries

This repository intentionally excludes:

- Provider names and infrastructure vendors.
- Internal service names, namespaces, routes, endpoints, IPs, and topology.
- Bucket names, database names, tokens, secrets, keys, or private identifiers.
- Operational runbooks, detection rules, internal workflows, and attack-surface details.
- Protocol internals, private cryptographic parameters, private key formats, and implementation-sensitive request formats.
- Hardware PCB layouts, routing, exact component part numbers, manufacturing files, bill of materials, and supplier details.

When a page discusses sensitive systems, it should explain the trust boundary and security objective without making the system easier to attack.

## Editorial Standard

Use careful technical language.

Preferred wording:

- designed to
- intended to
- supports
- reduces risk
- minimizes exposure
- metadata-reducing
- identity-minimizing
- privacy-oriented

Avoid absolute or exaggerated claims:

- unbreakable
- fully secure
- guaranteed anonymity
- anonymous by default
- untraceable
- impossible to compromise
- military-grade

## Local Validation

Validate the documentation from the repository root:

```bash
npx mint@latest validate --disable-openapi --telemetry false
```

Preview locally with the Mintlify CLI when reviewing visual changes.

## Documentation Image Standard

Store documentation images under `assets/images/` and render them with the shared Enigm image frame:

```mdx
<div className="enigm-doc-image-frame">
  <img className="enigm-doc-image" src="/assets/images/banner-enigm.jpg" alt="Descriptive image text" />
</div>
```

This keeps attached documentation images consistent with the Enigm visual system: subtle border, rounded corners, full-width responsive rendering, and light/dark theme compatibility.

Product-specific images must live directly under `assets/images/<product>/` using only the product folder name, such as `link`, `os`, `key`, `esim`, `server`, or `command`. Do not create workflow-specific subfolders such as `setup-wizard`, `screens`, or similar names; keep workflow context in the image filename instead.

## Maintenance Notes

- Keep `docs.json` updated whenever pages are added, removed, renamed, or reorganized.
- Keep `llms.txt` aligned with the public navigation.
- Prefer splitting long overview pages into focused product pages when a product has multiple security or lifecycle responsibilities.
- Do not add vendor-specific or implementation-sensitive details to public documentation.
- Run validation before publishing changes.
