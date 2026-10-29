<p align="center">
  <img src="public/app-icon.png" alt="Filsy Logo" width="96" height="96" style="border-radius: 20px;" />
</p>

<h1 align="center">Filsy</h1>

<p align="center">
  <strong>Every file on your PC. One search away.</strong><br>
  A modern, private, natural-language file manager and search engine for Windows.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Platform-Windows%2010%20%7C%2011-0078D6?logo=windows&logoColor=white" alt="Windows 10 and 11" />
  <img src="https://img.shields.io/badge/Store-Microsoft%20Store%20(Coming%20Soon)-00A4EF?logo=microsoft" alt="Microsoft Store" />
  <img src="https://img.shields.io/badge/Pricing-Pay%20What%20You%20Want-10B981" alt="Pay What You Want" />
  <img src="https://img.shields.io/badge/Privacy-100%25%20Local%20%26%20Offline-7C3AED" alt="Local & Offline" />
  <img src="https://img.shields.io/badge/License-Lifetime%20License-3B82F6" alt="Lifetime License" />
</p>

---

## 💡 Why Filsy? The Problem with Modern File Systems

Over years of daily computer use, everyone accumulates tens of thousands of files: screenshots, downloaded PDFs, Slack attachments, phone camera syncs, invoices, slide decks, and code snippets scattered across arbitrary drive partitions.

Traditional file systems rely on **folder hierarchies designed in the 1970s** modeled after physical filing cabinets:
```
C:\Users\You\Downloads\Work\Clients\Acme\2024\Q3\Invoices\Final_v2_reviewed.pdf
```

### The disconnect with human memory
Human memory **does not remember paths**. When you need a file, your brain remembers context:
* *"That PDF from WhatsApp last Tuesday"*
* *"The screenshot with the router Wi-Fi password"*
* *"Videos from August over 500 MB"*
* *"The tax receipt I downloaded from Gmail"*

Default Windows search is notoriously sluggish, struggles with complex queries, and only inspects filenames. Navigating nested directories wastes **15 to 30 minutes every single day**.

**Filsy bridges this gap.** It replaces endless folder digging with a single, lightning-fast search bar that understands plain English — running **100% locally on your machine**.

---

## ✨ Key Capabilities

### 🔍 1. Natural-Language Search
Type what you remember without learning cryptic syntax:
* `pdfs from last week over 5 mb`
* `videos from my phone in august`
* `documents from whatsapp`
* `zips bigger than 1gb older than 6 months`

Filsy dynamically parses dates, file sizes, extensions, and origin tags in milliseconds.

### 🖼️ 2. On-Device OCR (Search Inside Screenshots & Photos)
Filsy uses Windows' built-in local Optical Character Recognition (OCR) engine. You can search for text contained *inside* images:
* Wi-Fi passwords scribbled on notes or router labels
* Error codes in bug screenshots
* Addresses and tracking numbers from scanned receipts

### 📄 3. Deep Document Text Indexing
Filsy indexes the actual contents of your PDFs, Microsoft Word (`.docx`), and Excel (`.xlsx`) spreadsheets. If you remember a single phrase from a 60-page contract, Filsy surfaces the exact document immediately.

### 🏷️ 4. Download Source Tracking
Filsy reads file alternate data streams and browser metadata to identify where a file came from — whether it was saved from **WhatsApp, Slack, Gmail, Chrome, or Edge**.

### 🧹 5. Duplicate Detection & Safe Cleanup
Using cryptographic SHA-256 binary hashing, Filsy identifies byte-for-byte identical duplicates regardless of their filename. Reclaim gigabytes of wasted SSD storage safely.

### 🔒 6. 100% Private & Offline Guarantee
* **No cloud processing**: Your files, filenames, and contents never leave your PC.
* **No telemetry**: Zero tracking, zero analytics, zero background uploads.
* Works seamlessly without an active internet connection.

---

## ⚖️ Filsy vs. Windows File Explorer

| Capability | Windows File Explorer | 📁 Filsy |
| :--- | :---: | :---: |
| **Natural Language Queries** (*"PDFs from last week"*) | ❌ No | **✅ Instant 0.02s queries** |
| **Search Text Inside Images / Screenshots (OCR)** | ❌ No | **✅ Built-in local OCR** |
| **Search Deep Inside Document Text (PDF, DOCX)** | ⚠️ Slow / Inconsistent | **✅ Fully indexed & instant** |
| **Download Source Memory** (*"from WhatsApp"*) | ❌ No | **✅ Automatic source detection** |
| **Binary Duplicate Detection (SHA-256)** | ❌ No | **✅ Safe duplicate cleaner** |
| **Cloud Dependency / Telemetry** | ⚠️ Microsoft Telemetry | **✅ 100% Local & Private** |
| **Folder Integration** | Native | **✅ 1-click "Show in Explorer"** |

> *Filsy is designed as a companion tool to Windows Explorer, not a destructive replacement. Whenever you find what you need, one click opens the exact folder inside Windows Explorer.*

---

## 🛒 Distribution & Licensing Model

* **Microsoft Store Release**: Filsy is currently preparing for its official launch on the **Microsoft Store** for seamless, secure installation and background updates on Windows 10 & 11.
* **Pay What You Want**: We believe in accessible, independent software. You choose whatever contribution amount you think is fair.
* **Lifetime Ownership**: No recurring monthly fees. One-time payment grants perpetual lifetime access and all future updates.
* **1 Active PC with Flexible Movement**: Deactivate and transfer your license key between PCs anytime in 1 click via the built-in Settings or the web recovery portal.

---

## 🌐 Website & License Recovery Architecture

This repository hosts the official web presence and license recovery portal for Filsy:

* **Framework**: React 19, TypeScript, Vite.
* **Styling**: Tailored light & dark CSS variable design system with auto night-mode detection.
* **Payment Processing**: Integrated with [Dodo Payments](https://dodopayments.com/) for secure international checkouts (Cards, UPI, Netbanking).
* **License Recovery Portal**: Dedicated [`/find-key`](src/pages/FindKeyPage.tsx) interface connected to encrypted Supabase Edge functions for instant email-based license retrieval.

### Project Structure
```
├── api/                   # Serverless edge endpoints (checkout, verification, webhooks)
├── public/                # Static assets, official app icons, favicons, sitemaps
├── src/
│   ├── components/        # Reusable UI components (Navbar, Footer, Comparison, Mockups)
│   ├── pages/             # Route pages (HomePage, FindKeyPage, Pricing, Help, etc.)
│   ├── services/          # Client services (paymentService, themeService)
│   ├── config.ts          # Central application configuration & metadata
│   ├── index.css          # Design tokens & responsive styles
│   └── main.tsx           # Application entry point
├── .env.example           # Environment template (API keys, endpoints)
└── vite.config.ts         # Vite bundler configuration
```

---

## 🛠️ Local Development

### Prerequisites
* **Node.js**: v18 or later
* **npm** / **pnpm** / **yarn**

### Quick Start
1. **Clone the repository:**
   ```bash
   git clone https://github.com/theYugrathee/Filsy-website.git
   cd Filsy-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```

4. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

5. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📬 Support & Community

* **Developer Email**: [support@filsy.app](mailto:support@filsy.app)
* **License Recovery**: [https://filsy.space/find-key](https://filsy.space/find-key)
* **Website**: [https://filsy.space](https://filsy.space)

---

<p align="center">
  Built with ❤️ for Windows users with too many files.
</p>
