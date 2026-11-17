# Luma: Front-End Coding Challenge

Responsive landing page built for the Buzzvel Front-End Engineer coding challenge (November 2026),
based on the supplied Figma design.

**Stack:** Next.js (App Router), TypeScript, Tailwind CSS.

## Getting started

Requirements: Node.js (LTS) and npm.

```bash
git clone https://github.com/Wellington-VM/Luma-Challenge.git
cd Luma-Challenge
npm install
npm run dev
```

Open http://localhost:3000.

Other commands:

```bash
npm run lint     # lint the project
npm run build    # production build
npm run start    # serve the production build
```

`npm run lint` and `npm run build` pass with no errors or warnings.

## Project structure

```
public/          Images and SVG assets
src/app/         Page, layout and global styles
src/components/  Reusable components with typed props
src/mocks/       Local mock data
```

## Key decisions

- **Design fidelity:** typography, colors, spacing and images follow the Figma design. Colors and fonts
  are defined once as theme tokens.
- **Responsive:** built mobile first and checked from the smallest to the largest screen sizes, following
  the mobile and desktop Figma frames.
- **Components:** repeated content (cards, steps, stats, links) is data-driven from mock data. Only
  `MobileMenu` and `ContactForm` are client components, because they need state.
- **Accessibility:** semantic HTML, labelled form fields, descriptive `alt` text (empty for decorative
  images), visible keyboard focus, and a mobile menu with `aria-expanded` that closes with Esc.
- **Performance:** Images use `next/image` with responsive `sizes`, `priority` is reserved strictly for
  the header brand logo to avoid unused preload warnings.
- **Design width:** the Figma desktop frame is 1280px wide. I kept its proportions on purpose to stay
  faithful to the design.
- **Animations:** no decorative animations, only hover and focus transitions.

## Known gaps

- There is no backend or CMS. The contact form validates the fields, clears them and shows a
  confirmation message.
- Links without a matching section in the design (e.g. "Careers", "Terms") are placeholders, since the
  Figma is a static prototype.
- The three steps in "How Luma works" all read "STEP 01" in the Figma. I numbered them 01, 02 and 03.
- Photographs are stored in PNG format to preserve visual quality, while SVG is used for logos and icons.

## Time spent

Approximately three days: the first for planning and setting up the environment, the rest for building,
testing and refining the page.

## AI tools

I used Claude (Anthropic) as a learning and review assistant, since I had not used Next.js, TypeScript
or Tailwind before. It helped me understand concepts, review code, fix bugs and refine responsive
layouts. I wrote the page structure myself and reviewed every suggestion before using it. I checked the
result against the Figma Inspect panel, in browser DevTools on small and large screens, and by running
`npm run lint` and `npm run build`. I reviewed the implementation and can explain the main technical decisions and code structure.
