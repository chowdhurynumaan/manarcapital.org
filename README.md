<div align="center">

# ✦ Manar Capital

### *Guiding Light in Finance*

[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![Turborepo](https://img.shields.io/badge/Turborepo-Monorepo-EF4444?logo=turborepo&logoColor=white)](https://turbo.build/)
[![pnpm](https://img.shields.io/badge/pnpm-10-F69220?logo=pnpm&logoColor=white)](https://pnpm.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-gold.svg)](./LICENSE)

---

*Illuminating the path to financial excellence.*

*Your trusted partner in navigating the complexities of modern finance with wisdom, integrity, and innovation.*

</div>

---

## 🌟 Vision

**Manar** (منار) means "lighthouse" or "guiding light" in Arabic. Just as a lighthouse guides ships safely to shore through the darkest nights, Manar Capital aims to be the beacon of clarity and trust in the complex world of finance.

We believe in:
- 🎯 **Clarity** — Cutting through financial complexity
- 🤝 **Trust** — Building lasting relationships through transparency
- 💡 **Innovation** — Embracing technology to serve our clients better
- 🌍 **Impact** — Creating value that extends beyond the balance sheet

---

## 🏗️ Architecture

This repository is a **Turborepo monorepo** designed for scale, speed, and maintainability.

```
manarcapital.org/
├── apps/
│   └── portal/              # Main Next.js web application
├── packages/
│   ├── api-contract/        # Shared tRPC API contracts
│   └── config/              # Shared TypeScript configurations
├── infrastructure/          # Terraform IaC definitions
├── turbo.json               # Turborepo configuration
├── pnpm-workspace.yaml      # PNPM workspace definition
└── vercel.json              # Vercel deployment configuration
```

---

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) >= 20
- [pnpm](https://pnpm.io/) >= 10

### Installation

```bash
# Clone the repository
git clone https://github.com/chowdhurynumaan/manarcapital.org.git
cd manarcapital.org

# Install dependencies
pnpm install

# Start development
pnpm dev
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start all apps in development mode |
| `pnpm build` | Build all apps and packages |
| `pnpm lint` | Lint all apps and packages |
| `pnpm clean` | Clean all build artifacts |
| `pnpm format` | Format code with Prettier |

---

## 📦 Packages

### `@manarcapital/portal`
The main web portal built with **Next.js 15** and the App Router. Features:
- ⚡ React 19 with Server Components
- 🎨 Modern, responsive design
- 🔐 Type-safe API integration via tRPC

### `@manarcapital/api-contract`
Shared **tRPC** API contracts ensuring type safety across the entire stack:
- 📋 Zod schema validation
- 🔄 End-to-end type inference
- 📡 Client/server contract definitions

### `@manarcapital/config`
Shared configurations:
- 📝 Base TypeScript configuration
- ⚛️ Next.js-specific TypeScript settings

---

## 🛠️ Infrastructure

The `/infrastructure` directory contains **Terraform** configurations for Infrastructure as Code (IaC):

```bash
cd infrastructure
terraform init
terraform plan
terraform apply
```

See [infrastructure/README.md](./infrastructure/README.md) for detailed documentation.

---

## 🌐 Deployment

This project is configured for deployment on **Vercel** with monorepo support:

- Automatic deployments on push to `main`
- Preview deployments for pull requests
- Optimized caching with Turborepo

---

## 🤝 Contributing

We welcome contributions! Please read our contributing guidelines and code of conduct before submitting pull requests.

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

---

<div align="center">

**Built with ❤️ by the Manar Capital team**

*Let us be your guiding light.*

✦

</div>