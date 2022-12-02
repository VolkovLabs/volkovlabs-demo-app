# Volkov Labs Application for Grafana

![Application](https://raw.githubusercontent.com/volkovlabs/volkovlabs-app/main/img/app.png)

[![Grafana 9](https://img.shields.io/badge/Grafana-9.3.1-orange)](https://www.grafana.com)
[![YouTube](https://img.shields.io/badge/YouTube-Playlist-red)](https://youtube.com/playlist?list=PLPow72ygztmTm_zY_PYqJtRYpMPpZglYC)
![CI](https://github.com/volkovlabs/volkovlabs-app/workflows/CI/badge.svg)
[![codecov](https://codecov.io/gh/VolkovLabs/volkovlabs-app/branch/main/graph/badge.svg?token=2W9VR0PG5N)](https://codecov.io/gh/VolkovLabs/volkovlabs-app)
[![CodeQL](https://github.com/VolkovLabs/volkovlabs-app/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/VolkovLabs/volkovlabs-app/actions/workflows/codeql-analysis.yml)

## Introduction

The Volkov Labs Application includes Docker image and Application plugin with information about Volkov Labs supported Grafana plugins.

### Requirements

- Grafana 9.0+ is required.

## Docker image

We use custom build Docker image for all our projects and keep it up-to-date with the latest version of Grafana.

```bash
docker pull ghcr.io/volkovlabs/app:latest
```

## Bundle

Application plugin includes:

- [RSS/Atom data source](https://github.com/volkovlabs/volkovlabs-rss-datasource)
- [Dynamic text panel](https://github.com/volkovlabs/volkovlabs-dynamictext-panel)

## Feedback

We love to hear from users, developers, and the whole community interested in this plugin. These are various ways to get in touch with us:

- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/volkovlabs-app/issues/new/choose).
- Sponsor our open-source plugins for Grafana with [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).
- Star the repository to show your support.

## License

- Apache License Version 2.0, see [LICENSE](https://github.com/volkovlabs/volkovlabs-app/blob/main/LICENSE).
