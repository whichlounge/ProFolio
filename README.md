# ProFolio - Resume Builder

ProFolio is a responsive resume builder built with Next.js, React and TypeScript for **CS4032 Web Programming** (Assignment 3, Group 06). Users browse resume templates, fill in their details in a validated editor, preview the result, and print it as a PDF. Everything runs in the browser with sample data and local storage. There is no backend or login.

- **Live site:** `<paste your Vercel link>`
- **Repository:** https://github.com/whichlounge/ProFolio

## Team

Rollnumber|Name    |
|         |
| i242103 | zuha   |
| i246109 | Minhal |
| i242124 | Ezzah  |

## Work division

The work is split equally by feature area. Each member designed, built and tested their own area, and each page was reviewed by the other two members.

| Member | Area | What they built | Main files |
| --- | --- | --- | --- |
| Ezzah (i242124) | **A. Layout, navigation, home and about** | Root layout, responsive navbar and footer, home page, about page, shared button and heading components, global styles and print-safe base styles, loading screens and the 404 page | `app/layout.tsx`, `app/page.tsx`, `app/about/page.tsx`, `app/loading.tsx`, `app/not-found.tsx`, `app/globals.css`, `components/Navbar.tsx`, `components/Footer.tsx`, `components/Button.tsx`, `components/SectionHeading.tsx` |
| Minhal (i246109) | **B. Listing, search/filter and detail pages** | Dashboard with stats, search, status filter and sorting; template gallery with search and category filter; sample resume data; sample resume details page with a dynamic route and not-found handling | `app/dashboard/`, `app/templates/page.tsx`, `app/resume/[id]/page.tsx`, `components/DashboardContent.tsx`, `components/ResumeCard.tsx`, `components/SearchBar.tsx`, `components/TemplateGallery.tsx`, `components/TemplateCard.tsx`, `data/`, `types/resume.ts` |
| Zuha (i242103) | **C. Form and stateful feature** | Resume editor with controlled inputs, add/remove sections and validation; shared resume state with local storage (save, reopen, delete); resume preview and print; contact form with validation. Zuha also made the Git commits and managed the GitHub repository | `app/editor/page.tsx`, `app/preview/page.tsx`, `app/contact/page.tsx`, `components/ResumeEditor.tsx`, `components/ResumePreview.tsx`, `components/PrintButton.tsx`, `components/ContactForm.tsx`, `context/ResumeContext.tsx` |

Everyone worked on README and testing, and no one only recorded the video or wrote documents.

## Features

- **Dashboard:** list of your saved resumes plus four sample resumes, with search, a status filter (All, Completed, Draft), sorting (most recent or name), and counts of total, completed and draft resumes.
- **Template gallery:** six templates (Modern Professional, Classic Executive, Creative Portfolio, Minimal Elegance, Corporate Standard, Bold Creative) with search and a category filter. An empty search shows a message and a "Clear filters" button.
- **Resume editor:** controlled form for name, email, phone, address, job title and summary, with a template selector. Education, experience, skills and projects are lists where entries can be added and removed. The Creative and Bold templates also accept a profile photo.
- **Validation:** name and email are required and the email must be in a valid format. The error message appears in the form and your input is kept.
- **Save and reopen:** resumes are saved to the browser's local storage, so they stay on the dashboard after a refresh. You can create a new resume, reopen one to edit it, or delete it.
- **Sample resumes:** each sample opens on its own details page, and "Use This Example" loads it into the editor.
- **Preview and print:** the preview renders in the chosen template. The Print button prints only the resume, on A4, using a print stylesheet.
- **Contact form:** validates required fields and the email format, then shows a confirmation. No message is sent, because it is a frontend demo.
- **Extras:** custom loading screens, a 404 page, and a shared navbar and footer.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home page |
| `/dashboard` | Saved and sample resumes with search, filter and sort |
| `/templates` | Template gallery with search and category filter |
| `/editor` | Create or edit a resume (`?template=` and `?sample=` preselect a template or sample) |
| `/preview` | Preview and print the current resume |
| `/resume/[id]` | Details page for a sample resume (ids 1 to 4). Unknown ids show the 404 page |
| `/about` | About the project |
| `/contact` | Contact form |

## Tech stack

- Next.js 16 (App Router) and React 19
- TypeScript
- Tailwind CSS 4
- ESLint
- React Context for shared resume state, and `localStorage` for persistence

## Project structure

```
app/          routes (page.tsx, layout.tsx, loading.tsx, not-found.tsx, globals.css)
components/   Navbar, Footer, ResumeEditor, ResumePreview, DashboardContent, TemplateGallery, ...
context/      ResumeContext.tsx (resume state, saved resumes, local storage)
data/         templates, sample resumes and sample resume details
types/        shared TypeScript types
public/       static assets
```

## Run it locally

Requires Node.js 20 or later.

```bash
npm install
npm run dev        # development server at http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
npm run lint       # ESLint
```

## Deploy

1. Push the project to a public GitHub repository.
2. Go to [vercel.com](https://vercel.com), sign in with GitHub, choose **Add New > Project**, and import the repository.
3. Keep the defaults. Vercel detects Next.js (build command `npm run build`) and no environment variables are needed.
4. Click **Deploy**. Every later push to `main` redeploys the site.

After deploying, check these links: `/dashboard`, `/templates`, `/resume/1`, `/editor`, `/preview`, and `/resume/999` (it should show the 404 page).

## Data and limitations

- Resumes are stored per browser in local storage (keys `profolio-resumes` and `profolio-resume`). Clearing site data removes them, and they are not shared between devices.
- A profile photo is stored in local storage as an image string, so a very large photo may exceed the browser's storage limit.
- The four sample resumes and six templates are built-in data. There is no real authentication or database.
- Printing uses the browser's print dialog, so choose "Save as PDF" to get a file.
- `npm run lint` reports some React hook warnings and errors that are not yet fixed. They do not affect the build or the running site.

## Course

CS4032 Web Programming, BS Cyber Security, Fall 2026.