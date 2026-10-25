---
name: website-workflow
description: Build professional websites for small businesses through a linear, approval-based workflow using Claude Code, GitHub, and Netlify. Use for landing pages, service websites, portfolio sites, and business websites.
---

# Website Workflow

## Mission

Build professional, responsive, accessible, maintainable websites for businesses and individual clients.

Follow a linear workflow. Complete and verify each phase before moving to the next. Ask for approval at important decision points. Do not skip phases or perform production-facing actions without permission.

Default workflow:

Claude Code → GitHub → Netlify

- Claude Code: development and implementation.
- GitHub: source-code repository and version history.
- Netlify: hosting, deployment, preview deployments, and form handling when suitable.
- GitHub Pages is NOT part of the default deployment workflow.
- Do not deploy the same website to multiple hosting providers without a specific reason.
- Do not introduce additional services or infrastructure unless the project requires them.

This skill must work for different industries, languages, website types, and clients. Never assume the project is for a particular business.

# General Rules

1. Work in phases and keep the workflow linear.
2. Do not jump directly to coding before understanding the project.
3. Ask concise questions when important information is missing.
4. Do not ask questions that have already been answered.
5. Never invent business facts, prices, testimonials, qualifications, addresses, opening hours, or contact details.
6. Clearly identify assumptions and unconfirmed content.
7. Use genuine client assets when available and approved.
8. Never copy another website wholesale. Use reference sites for inspiration.
9. Prioritize mobile usability, accessibility, speed, and clarity.
10. Protect credentials, private information, and customer submissions.
11. Never commit secrets, passwords, API keys, access tokens, or .env files.
12. Get explicit approval before publishing publicly, changing DNS, purchasing services, or taking other externally visible or potentially costly actions.
13. Verify every important feature before claiming it works.
14. Keep the implementation as simple as possible while meeting the requirements.
15. Check current official documentation and pricing before relying on provider features or free-tier limits.
16. Do not claim that a service is free forever.
17. Maintain a PROJECT_NOTES.md file with decisions, progress, outstanding issues, and the next step. Never include secrets in it.

# Phase 0 — Inspect the Project

Before doing any work:

1. Inspect the current working directory.
2. Identify whether this is a new website or an existing project.
3. Inspect the existing code, project structure, dependencies, scripts, and Git status.
4. Read the README and PROJECT_NOTES.md if they exist.
5. Preserve existing functionality unless the user approves changes.
6. Identify unfinished work from previous sessions.
7. If the project is already in progress, continue from the current state instead of starting over.

Do not overwrite or delete existing files without understanding their purpose.

Exit condition: You understand the current project and know what needs to happen next.

# Phase 1 — Discover the Client and Website Requirements

Understand the business, audience, goals, and scope before implementation.

Gather relevant information such as:

- Business or project name.
- Industry and business description.
- Target audience.
- Main website goal.
- Services or products.
- Confirmed prices, if applicable.
- Location or service area, if relevant.
- Required pages or sections.
- Desired languages.
- Preferred visual style.
- Primary call to action.
- Contact methods.
- Existing domain.
- Existing logo, photos, copy, and brand assets.
- Reference websites.
- Required functionality.
- Budget and hosting constraints.
- Account ownership and deployment preferences.
- Deadline and approval process.

Possible website features include:

- Services and pricing.
- Image gallery or portfolio.
- Contact form.
- Email notifications.
- WhatsApp contact button.
- Phone and email links.
- Maps and directions.
- Booking links.
- FAQ.
- Blog.
- Testimonials.
- Social media links.
- Analytics.
- Multilingual content.
- Payments or other integrations.

Do not assume every project needs every feature.

Ask only the questions necessary to define the project. If multiple independent details are missing, group the questions into a short, organized request.

Create a requirements summary containing:

1. Confirmed facts.
2. Website goals.
3. Intended audience.
4. Required pages and features.
5. Available content and assets.
6. Missing information.
7. Assumptions requiring approval.
8. Success criteria.

Present the summary to the user and request corrections or approval before substantial implementation.

# Phase 2 — Research References and Collect Assets

## Website references

If the user supplies reference websites, inspect them and identify useful design patterns.

If references are missing and research would help:

1. Search for relevant examples.
2. Prefer websites in the same industry or serving a similar audience.
3. Inspect their structure, visual hierarchy, typography, colors, imagery, calls to action, and mobile layout.
4. Identify what works and why.
5. Suggest an original direction inspired by the research.

Do not copy a reference website's content, branding, code, or distinctive design wholesale.

When using factual information from the web, prefer official and reliable sources and provide citations when appropriate.

## Client assets

Determine which assets are required:

- Logo.
- Brand guidelines.
- Business photographs.
- Product or service photographs.
- Team or staff photographs.
- Portfolio images.
- Approved text.
- Service descriptions.
- Confirmed prices.
- Contact details.
- Social media links.
- Approved testimonials.
- Relevant documents or downloadable files.

Ask the client to provide the necessary assets.

If assets are unavailable, propose alternatives such as properly licensed stock imagery, simple illustrations, or a design that works without photographs.

Never present stock photos as actual employees, clients, premises, or products.

Never fabricate testimonials, reviews, qualifications, certifications, awards, or customer numbers.

## Content

Write clear, concise, audience-focused content.

Do not make unsupported claims, particularly in medical, financial, legal, or other sensitive areas.

Mark missing facts clearly and obtain confirmation before publishing them.

Exit condition: The design direction, content sources, and required assets are understood.

# Phase 3 — Plan the Website and Choose the Technology

Before coding, prepare a short implementation plan.

Include:

1. Sitemap or section structure.
2. User journey.
3. Main calls to action.
4. Visual design direction.
5. Typography and color palette.
6. Image requirements.
7. Responsive layout strategy.
8. Accessibility considerations.
9. SEO requirements.
10. Hosting and deployment plan.
11. Form and notification strategy.
12. Any external integrations or expected costs.

## Technology selection

Choose the simplest technology that satisfies the requirements.

For a small, mostly static business website:

- Semantic HTML, CSS, and lightweight JavaScript may be sufficient.
- Use the existing framework if the project already has one.
- Consider React, Vite, or another framework when interactive complexity or project conventions justify it.
- Avoid unnecessary dependencies, databases, authentication systems, and server infrastructure.

Do not introduce a complex stack merely because it is fashionable.

## Default hosting architecture

Use:

Claude Code → GitHub → Netlify

GitHub is the source-code repository. Netlify is the primary deployment and hosting provider.

The normal workflow is:

1. Develop locally.
2. Test locally.
3. Commit and push changes to GitHub.
4. Let Netlify build and deploy from the connected repository.
5. Review the preview deployment.
6. Publish to production after approval.

Do not routinely deploy to GitHub Pages before deploying to Netlify. This duplicates work and can cause confusion about the official website URL.

GitHub Pages is not the default host for commercial client websites. Check its current terms and limitations if someone specifically requests it.

## Netlify and forms

For a simple contact form, Netlify Forms may be suitable.

Before choosing it:

1. Review the current official Netlify documentation.
2. Check current pricing, usage limits, and relevant plan requirements.
3. Confirm the required email notification behavior.
4. Confirm whether the form implementation is compatible with Netlify's form detection.

If requirements exceed the built-in solution, compare appropriate form providers or server-side options.

Explain tradeoffs and possible costs before adding a paid service.

## Cloudflare and alternatives

Do not use Cloudflare Pages or Workers by default simply because they are available.

Consider them when the project has a clear requirement that makes them a better fit, such as existing Cloudflare infrastructure or specific edge/server-side functionality.

Compare deployment complexity, form handling, email notifications, maintenance, ownership, and current pricing.

Choose one primary host unless the user explicitly approves a more complex architecture.

Exit condition: The user has approved the proposed plan, or has explicitly asked you to proceed without another approval step.

# Phase 4 — Build the Website

Implement the approved design and functionality.

## Design principles

- Make the website feel tailored to the business rather than like an untouched generic template.
- Establish a clear visual hierarchy.
- Use consistent typography, spacing, colors, and components.
- Make the primary call to action easy to find.
- Use whitespace intentionally.
- Choose images that support the business and its audience.
- Avoid unnecessary animations, clutter, and decorative effects.
- Optimize for mobile first, then tablet and desktop.
- Ensure text is readable at small screen sizes.
- Use appropriate RTL layout for Hebrew and other right-to-left languages.
- Support the languages explicitly requested by the client.

## Content and semantics

- Use semantic HTML and meaningful heading hierarchy.
- Add page titles and meta descriptions.
- Add a favicon and suitable social sharing metadata.
- Use meaningful alt text for informative images.
- Use descriptive link text.
- Make telephone numbers clickable.
- Make email addresses usable.
- Ensure external links work.
- Do not leave accidental placeholder text in production.

## Contact and conversion features

When requested:

- Make the contact method obvious.
- Use the client-approved contact details.
- Ensure WhatsApp links use the correct phone number and an appropriately encoded message.
- Make the contact form accessible.
- Include clear validation, error messages, and success feedback.
- Collect only the information needed.
- Add spam protection appropriate to the selected service.
- Do not claim email notifications are configured until they have been tested.
- Do not collect payment-card information through a basic contact form.

## Maintainability

- Keep the code readable and organized.
- Use clear component and variable names.
- Avoid unnecessary abstractions.
- Add a README with setup, development, build, and deployment notes.
- Add an appropriate .gitignore.
- Keep secrets out of source control.
- Avoid dependencies that are not needed.

Exit condition: The site implements the approved scope and runs locally.

# Phase 5 — Test Locally

Inspect the project's actual scripts and documentation before running commands. Do not invent commands or assume a framework.

Run the appropriate build, lint, and test commands where available.

Test the following:

## Functionality

- All required pages and sections exist.
- Navigation works.
- Every button has a meaningful action.
- Every link points to the intended destination.
- Phone, email, WhatsApp, and map links work.
- Forms validate input and show useful feedback.
- Images load correctly.
- No significant browser console errors remain.

## Responsive design

Check narrow mobile screens, tablet widths, and desktop layouts.

Verify:

- No horizontal overflow.
- Text is readable.
- Images crop appropriately.
- Navigation works on mobile.
- Buttons and form controls are usable by touch.
- RTL layouts behave correctly when relevant.

## Accessibility

Check:

- Keyboard navigation.
- Visible focus states.
- Semantic landmarks.
- Heading hierarchy.
- Form labels.
- Image alt text.
- Color contrast.
- Reduced-motion behavior where relevant.

## SEO and performance

Check:

- Page titles.
- Meta descriptions.
- Favicon.
- Social metadata.
- Image optimization.
- Excessive scripts or dependencies.
- Loading behavior.
- Appropriate indexing settings for the intended environment.

## Content and security

Check:

- No fabricated facts.
- No accidental placeholders.
- No private customer data.
- No secrets in source files.
- No unnecessary collection of personal information.
- No debug output or test content intended only for development.

Use browser automation or screenshots if available.

If a test cannot be performed, report that limitation instead of claiming it passed.

Exit condition: Fix critical issues before connecting deployment infrastructure.

# Phase 6 — Set Up GitHub Safely

Before creating or pushing a repository, confirm:

- The GitHub account or organization that should own it.
- The repository name.
- Public or private visibility.
- Who should own ongoing access.
- The intended commit author name and email.
- Whether an existing repository should be reused.

Then:

1. Inspect `git status`.
2. Review the project files.
3. Confirm `.gitignore` excludes secrets and unnecessary files.
4. Review the staged changes before committing.
5. Create or connect the approved repository.
6. Verify the remote with `git remote -v`.
7. Configure repository-local commit identity if required.
8. Commit the changes.
9. Push to the correct repository and branch.
10. Verify that the expected files and commit appear on GitHub.

Do not silently change global Git identity.

Never use another person's identity without permission.

Never ask the user to paste passwords, access tokens, or private keys into chat.

If authorization is unavailable, stop and provide exact manual steps.

Exit condition: The code is safely committed and pushed to the correct repository.

# Phase 7 — Connect GitHub to Netlify

Before connecting accounts, confirm which Netlify account or team should own the website.

Then:

1. Review current official Netlify documentation.
2. Connect the approved GitHub repository.
3. Determine the correct build command and publish directory from the actual project.
4. Configure environment variables through Netlify settings when needed.
5. Never expose secrets in browser-side code.
6. Trigger a preview or deployment.
7. Inspect the build logs.
8. Resolve build failures before proceeding.
9. Open the deployed preview and repeat key functional and visual checks.
10. Confirm the preview does not expose secrets or private information.

Do not connect a custom domain or change DNS without explicit approval.

Do not promise that a plan or feature is free without checking current official pricing and limits.

Exit condition: A preview deployment builds successfully and is ready for review.

# Phase 8 — Configure Forms and Email Notifications

If the website includes a contact form:

1. Confirm the destination email address with the client.
2. Choose the appropriate form handling service.
3. Check current official documentation and plan limitations.
4. Configure form detection and email notifications.
5. Ensure the form markup matches the provider's requirements.
6. If using Netlify Forms with a client-rendered framework, check whether a static HTML form declaration or another documented configuration is required.
7. Deploy the configuration.
8. Submit a real test message.
9. Verify that the submission appears in the provider dashboard when supported.
10. Verify that the notification email actually arrives.
11. Check spam/junk if needed.
12. Verify success and error states.
13. Remove test submissions where appropriate.
14. Record the results in PROJECT_NOTES.md.

If an external email service, API key, DNS record, or paid plan is required, explain this before configuring it.

Store secrets in provider environment variables or an appropriate secrets manager.

Never put secret keys in client-side JavaScript or a public repository.

Do not claim the form works until an end-to-end test succeeds.

Exit condition: Form submission and notification delivery have been verified, or the remaining limitation is clearly documented.

# Phase 9 — Production Review and Approval

Before production launch, provide a concise review:

- What is complete.
- Preview URL.
- Outstanding issues.
- Any remaining placeholders.
- Form test results.
- Hosting and domain decisions.
- Possible costs or plan limits.
- Any privacy or legal text requiring client review.
- Actions that will make the website publicly available.

Get explicit approval before:

- Publishing the production site when approval has not already been granted.
- Connecting a custom domain.
- Changing DNS.
- Enabling paid services.
- Sending real customer communications.
- Adding unapproved analytics or tracking.
- Making destructive changes.

After approval:

1. Deploy to production.
2. Configure the custom domain only if requested and approved.
3. Follow the domain provider's and host's current official instructions.
4. Verify HTTPS/SSL.
5. Verify redirects and the canonical host.
6. Test the main CTA.
7. Test the form again on the production URL.
8. Check mobile and desktop layouts.
9. Ensure no preview-only content or placeholders remain.
10. Record the final URL and verification results.

Do not report production launch as successful until the live URL has been checked.

# Phase 10 — Handover and Maintenance

Provide a practical handover containing:

- Production URL.
- Preview URL, if still useful.
- GitHub repository URL and owner.
- Netlify site and account/team owner.
- How to edit text, images, services, and prices.
- How to make and deploy changes.
- Where form submissions and notification settings are managed.
- Domain registrar and renewal responsibility, if applicable.
- Current provider limits and possible costs, with official links.
- What was tested.
- What could not be tested.
- Remaining tasks.
- Suggested maintenance steps.

Never include passwords, tokens, API keys, or private form submissions.

Explain the normal update process:

1. Edit the site locally.
2. Test changes.
3. Commit and push to GitHub.
4. Check the Netlify build/deployment.
5. Verify the live site when appropriate.

# PROJECT_NOTES.md

Maintain a concise PROJECT_NOTES.md file with:

- Project name and current phase.
- Approved requirements.
- Design and technology decisions.
- Confirmed content and assets.
- Missing content.
- Local development and build commands.
- GitHub repository owner and URL.
- Hosting provider and site URL.
- Form/integration status.
- Approval checkpoints.
- Open issues.
- Next action.
- Date of last verification.

Never store secrets or credentials in PROJECT_NOTES.md.

At the end of each phase, update the notes and report:

1. What was completed.
2. What was tested.
3. What remains incomplete.
4. What decision or approval is needed next.

# Stop Conditions

Stop and ask for clarification or approval if:

- Important business facts or contact details are unconfirmed.
- The design direction is unclear enough to risk substantial rework.
- Account or repository ownership is unclear.
- Credentials or permissions are missing.
- A task could incur a cost.
- A production-facing or destructive action requires approval.
- A feature requires collecting sensitive data.
- Legal, privacy, or compliance requirements are uncertain.
- A provider's plan limits make the current approach unsuitable.
- The implementation would require a materially more complex architecture than originally agreed.

When blocked, explain the exact decision or action needed. Do not pretend the action was completed.

# Final Operating Principle

The goal is not merely to make a website appear online. The goal is to deliver a professional, tested, maintainable website that the client can own and update, with clear account ownership, verified contact functionality, and no hidden assumptions or unexpected costs.
