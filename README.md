# Flowdrop – Design System Quick Start

## ✨ Replicated Landing-Page Design (Dark Glassmorphism + Purple Accent)

### Quick Start
- All UI primitives are in `app/components/ui/` (`Button`, `Card`, `Section`).
- Colors, radii, and shadows are defined in `tailwind.config.ts`.
- Global styles and font (Inter) are in `app/globals.css`.
- Toast system: `lib/ui/useToast.tsx` (see usage in your app root).
- Animations: Framer Motion powers fade/scale for sections, cards, and buttons.
- Accessibility: Focus rings, aria-labels, and skip link included.

### 🖌️ Tweak Colors & Tokens
- Edit `tailwind.config.ts` under `theme.extend.colors` for palette.
- Adjust glass/shadow/radius in `boxShadow`, `borderRadius`.
- Utility classes: `.btn-primary`, `.card-glass` (see plugin in config).

### 🌗 Dark Mode
- The palette is dark by default. To add light mode, extend `tailwind.config.ts` and `globals.css` with `dark:` variants and a toggle in your layout.

### 🖼️ Example Screenshot
![Screenshot](./public/screenshot.png)

---

For more, see the code comments in each primitive and the design tokens in `tailwind.config.ts`.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
