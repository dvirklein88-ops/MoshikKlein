---
name: website-workflow
description: Build professional websites for small businesses through a linear, approval-based workflow using Claude Code, GitHub, a self-hosted n8n deployment pipeline with Telegram approval, and the Netlify API, with optional client-specific analytics (Meta Pixel, Microsoft Clarity, Google Tag Manager). Use for landing pages, service websites, portfolio sites, and business websites.
---

# Website Workflow

## Mission

Build professional, responsive, accessible, maintainable websites for businesses and individual clients.

Follow a linear workflow. Complete and verify each phase before moving to the next. Ask for approval at important decision points. Do not skip phases or perform production-facing actions without permission.

Default workflow:

Claude Code → GitHub → n8n (push webhook + Telegram approval) → Netlify API → live website

- Claude Code: development, local testing, and implementation.
- GitHub: source-code repository and version history.
- n8n (self-hosted): receives the GitHub push webhook, requests deployment approval through Telegram, and orchestrates the deployment.
- Netlify: hosts the website. Deployment is performed by n8n through the Netlify API (file-digest method) for static website files.
- Netlify Git continuous deployment is NOT part of the default setup, and no conventional Netlify build step is run.
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
12. Get explicit approval before publishing publicly, changing DNS, purchasing services, activating tracking, or taking other externally visible or potentially costly actions.
13. Verify every important feature before claiming it works.
14. Keep the implementation as simple as possible while meeting the requirements.
15. Check current official documentation and pricing before relying on provider features or free-tier limits.
16. Do not claim that a service is free forever.
17. Maintain a PROJECT_NOTES.md file with decisions, progress, outstanding issues, and the next step. Never include secrets in it.
18. Every client has separate analytics accounts, tracking IDs, and data. Never assume a tracking ID, never reuse an ID from another client or project, and never invent IDs.
19. Analytics and tracking are optional and require the client's approval. Install only the tools the client has approved and for which a valid client-owned ID exists.
20. Do not ask clients for account passwords. Clients own their accounts and data; request appropriate access permissions instead.
21. Do not bypass or replace the n8n deployment and Telegram approval process. A GitHub push is not the same as a live website.

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

## Analytics and tracking questions

Ask in simple, non-technical language, and explain each tool briefly only when needed:

1. Do you currently advertise on Facebook or Instagram, or plan to do so? (Relevant to Meta Pixel, which measures ad conversions and leads.)
2. Do you want to measure advertising conversions and leads?
3. Do you want to understand how visitors use your website through heatmaps and session recordings? (Microsoft Clarity.)
4. Do you already have a Meta Pixel?
5. Do you already have a Microsoft Clarity project?
6. Do you want Google Tag Manager, or should we keep the setup simple?

Defaults:

- Meta Pixel: recommend when the client runs or plans Meta advertising and approves tracking.
- Microsoft Clarity: recommend when the client wants website behavior insights and approves tracking.
- Google Tag Manager: optional only. Do not introduce it by default.
- Google Analytics 4: not added by default.
- No tracking integration when the client does not need or approve it.

Do not install every tool automatically.

Collect the following values only when relevant:

- Meta Pixel ID.
- Microsoft Clarity Project ID.
- Google Tag Manager Container ID, only if explicitly requested.

The client owns the accounts and the tracking data. Access permissions may be granted to the developer, but never ask the client to send account passwords. Never reuse a tracking ID from another client.

If the client has no account or ID yet: explain what they need to create, provide the official setup instructions, offer to guide them, and continue building the website without that integration until the ID is available. Do not invent IDs or insert placeholder tracking scripts.

Create a requirements summary containing:

1. Confirmed facts.
2. Website goals.
3. Intended audience.
4. Required pages and features.
5. Available content and assets.
6. Missing information.
7. Assumptions requiring approval.
8. Success criteria.
9. Analytics decision: which tools are approved, which are declined or not needed, confirmed IDs, and pending client actions.

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
10. Hosting and deployment plan (Claude Code → GitHub → n8n → Netlify API), including the static publish directory and whether a local build is required.
11. Form and notification strategy.
12. Any external integrations or expected costs.
13. Analytics and tracking plan: approved tools, event plan, and consent approach.

## Technology selection

Choose the simplest technology that satisfies the requirements.

For a small, mostly static business website:

- Semantic HTML, CSS, and lightweight JavaScript may be sufficient.
- Use the existing framework if the project already has one.
- Consider React, Vite, or another framework when interactive complexity or project conventions justify it.
- Avoid unnecessary dependencies, databases, authentication systems, and server infrastructure.

Do not introduce a complex stack merely because it is fashionable.

Deployment publishes static files only. Prefer technology whose output is plain static files. If a framework requires a build step, the build is performed locally and the resulting output must be committed (see Phase 7).

## Default hosting architecture

Use:

Claude Code → GitHub → n8n → Netlify API

- GitHub is the source-code repository.
- n8n (self-hosted) controls deployment orchestration and approval: it receives the GitHub push webhook, checks that the repository is registered, and requests approval through Telegram.
- Netlify hosts the website. n8n deploys to it through the Netlify API using the file-digest method.
- Netlify Git continuous deployment is not part of the default setup, and Netlify does not run a build step.

The normal workflow is:

1. Develop locally.
2. Test locally (including running any required build locally).
3. Commit and push changes to GitHub.
4. n8n receives the push webhook and asks for deployment approval through Telegram.
5. After approval, n8n deploys to Netlify through the API and reports the result through Telegram.
6. Verify the live website after the user confirms the deployment result.

Do not connect GitHub directly to Netlify and do not create any second deployment mechanism.

Do not routinely deploy to GitHub Pages. This duplicates work and can cause confusion about the official website URL.

GitHub Pages is not the default host for commercial client websites. Check its current terms and limitations if someone specifically requests it.

Reference for the deployment API: https://docs.netlify.com/api-and-cli-guides/api-guides/get-started-with-api/

## Netlify and forms

For a simple contact form, Netlify Forms may be suitable. The n8n deployment configures Netlify Forms email hooks where applicable.

Before choosing it:

1. Review the current official Netlify documentation.
2. Check current pricing, usage limits, and relevant plan requirements.
3. Confirm the required email notification behavior.
4. Confirm whether the form implementation is compatible with Netlify's form detection. Because there is no Netlify build step, forms must be detectable in the static HTML that is actually deployed.

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

## Analytics and Tracking Integration

Implement only the tools the client has approved and for which the client has provided a valid ID. The implementation must be simple, centralized, maintainable, and client-specific. If no tool is approved, add no tracking code.

When implementing or changing provider-specific code, use current official documentation rather than outdated snippets from blogs. If a provider's instructions have changed, follow the current official instructions rather than this skill.

- Microsoft Clarity: https://learn.microsoft.com/en-us/clarity/
- Meta Pixel: the official Meta Business Help Center or Meta for Developers documentation.

### Configuration

- Create one centralized analytics configuration appropriate to the project's existing architecture (for example a single config file or a single clearly marked block).
- Keep tracking IDs separate from website content and ordinary UI components.
- Use clear names such as META_PIXEL_ID, CLARITY_PROJECT_ID, and GTM_CONTAINER_ID, adapted to the project's actual configuration approach.
- Do not introduce a build system, dependency, database, or backend merely to store these IDs.
- For a static website, public tracking IDs may be included in client-side code when the provider requires it.
- Never place secret API tokens, passwords, or private credentials in client-side code.

### Meta Pixel

When the client approves Meta Pixel and provides a valid ID:

- Install the official Meta Pixel base code following current official instructions.
- Ensure the correct client Pixel ID is used and avoid duplicate installations.
- Implement standard events only when the website supports them:
  - PageView: page loaded.
  - Contact: an actual contact action, such as clicking a WhatsApp or telephone link.
  - Lead: a successfully submitted contact form.
  - Purchase: only if the website actually supports purchases.
- Do not fire Lead merely because someone clicked a contact button.
- Do not send names, email addresses, phone numbers, form contents, or other personal information as event parameters.
- Do not invent event behavior that the website does not support.
- Verify installation with Meta's official testing tools when access is available.

### Microsoft Clarity

When the client approves Clarity and provides a valid Project ID:

- Install the official Clarity tracking code following current Microsoft documentation.
- Ensure the correct client Project ID is used and avoid duplicate installations.
- Verify that the script loads and, when access is available, that data collection is confirmed.
- Pay attention to consent requirements and Clarity privacy and masking settings.
- Do not install Clarity on websites targeting users under 18.

### Google Tag Manager

Do not install GTM by default. Install it only when the client explicitly requests it, or when a clear technical requirement justifies it.

If GTM is requested:

- Obtain the correct container ID.
- Explain that GTM is a tag-management system, not an analytics tool by itself.
- Avoid installing the same Meta Pixel or Clarity tag both directly and through GTM. Each tag has exactly one authoritative installation method.
- Document which tags are managed through GTM.

### Consent and privacy

Installing a tracking script does not by itself make a website legally compliant.

Before enabling tracking:

- Identify whether a consent mechanism is required for the website's intended audience and applicable jurisdictions.
- Check current official documentation from the relevant providers.
- Ask the client to approve the consent approach.
- If a consent banner or consent-management platform is needed, explain the implementation and any costs before adding it.
- Ensure tracking behavior respects the selected consent state, and do not activate tracking before consent where consent is required.
- Do not claim legal compliance without an appropriate review.
- Do not build a complicated consent-management system unnecessarily.

If the requirements are unclear, stop and ask for clarification rather than making legal assumptions.

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

Run the appropriate build, lint, and test commands where available. If the project needs a build, run it locally and confirm the publish directory contains the complete deployable static output, because no build runs during deployment.

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

## Analytics (when any tracking is approved)

Check:

- The correct client's tracking IDs are configured.
- No tracking script is duplicated, including via both direct installation and GTM.
- No placeholder IDs remain.
- PageView behavior is implemented correctly.
- Contact events fire only on actual contact actions.
- Lead events fire only after a successful form submission.
- Events do not fire multiple times unintentionally.
- Personal information is not sent as event parameters.
- Consent behavior works as intended, where applicable, and nothing fires before consent where consent is required.
- If no tracking is approved, no tracking code is present.

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

# Phase 7 — Prepare GitHub Push and n8n Deployment

Deployment is handled by the existing self-hosted n8n system, not by Netlify's Git integration. n8n receives the GitHub push webhook, checks that the repository is registered, requests approval through Telegram, downloads the website files from GitHub, reads netlify.toml when available to determine the publish directory, deploys through the Netlify API using the file-digest method, waits for the deployment to become ready, configures Netlify Forms email hooks where applicable, checks that the public site is reachable, and reports the result through Telegram.

Your responsibilities:

1. Develop and test the website locally.
2. Identify the correct static publish directory (and, when useful, declare it in netlify.toml).
3. Make sure the project contains the complete deployable output.
4. Perform any required build locally before deployment. No build runs on Netlify or in n8n.
5. Commit the final deployable files and push them to the approved GitHub repository and branch.
6. Remember that the existing n8n system handles deployment after receiving the push webhook.
7. Remember that deployment requires the existing Telegram approval process.
8. Do not attempt to connect GitHub directly to Netlify.
9. Do not create a second deployment mechanism.
10. Do not assume that pushing to GitHub makes the website live.
11. Wait for the user to confirm the n8n deployment result before claiming that production deployment succeeded.
12. If deployment fails, inspect the reported error and help resolve it without bypassing the approval process.

## How the n8n deployer behaves (design the project around it)

- **Registration:** only registered repositories deploy. The user registers a repository through the Telegram bot (`/addrepo`), which creates the GitHub webhook and stores the repository and branch. If the repository is not registered, tell the user; do not register it, create webhooks, or modify n8n workflows.
- **Branch:** only pushes to the registered branch (or the repository's default branch if none was saved) trigger the flow. Pushes to other branches are silently ignored.
- **Account and site:** on the first deployment the bot asks which Netlify account to use and creates a site named after the repository, served at `*.netlify.app`. Later deployments update that site. Confirm the intended account and site name with the user.
- **Publish directory:** only `publish` from the `[build]` section of `netlify.toml` is read. Without it, the repository root is published. Everything outside the publish directory is not deployed.
- **Excluded files:** files and folders starting with `.` (any path containing `/.`), `node_modules`, and `README.md` are not deployed. Never rely on them being live.
- **No build, static only:** no build step runs and Netlify Functions are not supported. Redirects and headers from `netlify.toml` are NOT applied. Use `_redirects` and `_headers` files inside the publish directory instead.
- **Credits:** every deployment consumes Netlify credits and the bot reports usage. Batch changes into a single push, and do not push experimental or test commits to the registered branch.
- **Forms:** the deployer enables Netlify form detection and adds an email notification for each form (see Phase 8).
- **Failure modes:** if n8n or its tunnel is down, pushes are lost with no alert. If no Telegram approval prompt arrives after a push, tell the user to check n8n and the tunnel, or to trigger the deployment manually from the bot (`/deploy`). Do not push empty commits to force it.
- **Result message:** the Telegram result reports the site URL, number of files uploaded, forms and notification email, and a warning if the site is private. For new sites it reminds the user to remove the "Powered by Netlify" badge manually in the Netlify UI (Project configuration → General), since no API exists for it.

Also confirm:

- The repository is registered with the n8n deployment system.
- Which Netlify site and account the website deploys to.
- Environment variables or secrets are never stored in the repository or exposed in browser-side code.

Do not connect a custom domain or change DNS without explicit approval.

Do not promise that a plan or feature is free without checking current official pricing and limits.

Exit condition: The deployable files are pushed to the correct repository and branch, and the user has confirmed the n8n deployment result (or the failure has been diagnosed and documented).

# Phase 8 — Configure Forms and Email Notifications

If the website includes a contact form:

1. Confirm the destination email address with the client. The n8n deployer sends form notifications only to the email of the owner of the Netlify account. If the client needs a different address, tell the user it must be changed manually in the Netlify UI; do not configure a separate mechanism.
2. Choose the appropriate form handling service.
3. Check current official documentation and plan limitations.
4. Confirm form detection requirements and how email notifications are configured. The n8n deployment configures Netlify Forms email hooks where applicable; do not set up a separate mechanism.
5. Ensure the form markup matches the provider's requirements.
6. If using Netlify Forms with a client-rendered framework, check whether a static HTML form declaration or another documented configuration is required, since no Netlify build step runs.
7. Deploy the configuration through the normal GitHub push and n8n Telegram approval process (Phase 7).
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
- Local test results and the publish directory that will be deployed.
- Deployed URL, if one exists.
- Outstanding issues.
- Any remaining placeholders.
- Form test results.
- Hosting and domain decisions.
- Possible costs or plan limits.
- Any privacy or legal text requiring client review.
- Actions that will make the website publicly available.

Analytics and tracking review:

- Which tracking tools are installed.
- Which tools were intentionally not installed.
- Which events are implemented.
- Whether consent handling is configured.
- What has been tested.
- What still requires client action.
- Whether the client has approved tracking.

Get explicit approval before:

- Publishing the production site when approval has not already been granted.
- Connecting a custom domain.
- Changing DNS.
- Enabling paid services.
- Sending real customer communications.
- Activating analytics or tracking the client has not approved.
- Making destructive changes.

Do not activate unapproved tracking. Do not enable paid tools or services without explicit approval.

After approval:

1. Push to the approved GitHub repository and branch, and let the n8n workflow request Telegram approval and deploy through the Netlify API (Phase 7).
2. Wait for the user to confirm the deployment result.
3. Configure the custom domain only if requested and approved.
4. Follow the domain provider's and host's current official instructions.
5. Verify HTTPS/SSL.
6. Verify redirects and the canonical host.
7. Test the main CTA.
8. Test the form again on the production URL.
9. Check mobile and desktop layouts.
10. Ensure no preview-only content or placeholders remain.
11. Record the final URL and verification results.

Do not report production launch as successful until the user has confirmed the n8n deployment result and the live URL has been checked.

## Analytics verification after deployment

- Verify that the production HTML or runtime loads the expected scripts and that the correct client IDs are present.
- Use Meta's official testing tools when available.
- Use Microsoft Clarity's verification process when available.
- Distinguish between code-level verification and confirmation that data is actually appearing in the provider dashboard.
- Never claim analytics is fully operational unless it has been verified.
- If dashboard access is unavailable, state clearly what was verified and what the client still needs to check.

## Search Console verification (agent)

Run this after the production URL is live, and only with the owner's approval. Launch a dedicated agent for it, with these steps:

1. **Get the token.** Take the content value from the HTML tag method in Google Search Console (`<meta name="google-site-verification" content="…">`). Read it in one of two ways:
   - **Chrome on this computer:** use the Claude in Chrome tools (read `anthropic-skills:chrome-browser` first) to open Search Console in the owner's own Chrome and read the tag from the verification screen.
   - **Pasted by the owner:** if the browser is not available, take the value the owner pastes. If the owner pastes the full tag, extract only the content value.
   If Chrome needs a sign-in, a 2FA code or a local session, ask the owner to open that session on their computer. Never enter passwords or codes on the owner's behalf. Do not invent or guess a token.
2. **Validate it.** The token is a non-empty string of letters, digits, `-` and `_`. Stop and ask if it does not match.
3. **Add it to the site.** Put the tag once, in `<head>` of the site's main HTML file (for example `public/index.html`; use the project's actual publish directory), next to the robots meta. Never duplicate it. If a different verification tag is already there, stop and ask whether to keep it.
4. **Test locally.** Confirm the tag appears exactly once in `<head>`, and run `grep -c google-site-verification <path-to-main-html>`.
5. **Confirm it is live.** Push the change and wait for the n8n Telegram approval and deployment result (Phase 7). Then fetch the production URL and confirm the tag appears in the served HTML, not just in the repository.
6. **Click Verify.** If Chrome is open on the owner's account in Search Console, the agent clicks Verify there and reads the result. If Chrome is not signed in to that account, ask the owner for a local session, as in step 1. If neither is possible, ask the owner to click Verify and report the result.
7. **Keep the tag.** Do not remove it after verification, or the verification may lapse.
8. **Run the checks.** Confirm that `https://<site>/sitemap.xml` and `https://<site>/robots.txt` return 200, that the sitemap lists the production URLs, and that robots.txt does not block them. Record the results in `PROJECT_NOTES.md`.

Report the tag location, the live-check result, and the sitemap and robots results. Do not report the verification as complete until Search Console confirms it.

# Phase 10 — Handover and Maintenance

Provide a practical handover containing:

- Production URL.
- GitHub repository URL and owner.
- Netlify site and account/team owner.
- Deployment method (n8n + Netlify API), publish directory, and whether a local build is required.
- Analytics tools installed, the client-owned accounts they belong to, and outstanding client actions.
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

1. Edit the website locally.
2. Test the changes.
3. Commit and push to GitHub.
4. Wait for the n8n Telegram deployment approval.
5. Confirm the deployment result.
6. Verify the live website when appropriate.

# PROJECT_NOTES.md

Maintain a concise PROJECT_NOTES.md file with:

- Project name and current phase.
- Approved requirements.
- Design and technology decisions.
- Confirmed content and assets.
- Missing content.
- Local development and build commands.
- GitHub repository owner, URL, and deployment branch.
- Netlify site and account/team.
- Deployment method: n8n + Netlify API.
- Publish directory.
- Whether a local build is required.
- Registration status in the n8n deployer and the registered branch.
- Netlify credit usage noted in deployment results.
- Deployment status and last verified production URL.
- Form/integration status.
- Approval checkpoints.
- Open issues.
- Next action.
- Date of last verification.

## Analytics section

- Meta Pixel: installed / not installed / pending.
- Meta Pixel ID, if configured.
- Clarity: installed / not installed / pending.
- Clarity Project ID, if configured.
- GTM: installed / not installed / not requested.
- Events implemented.
- Consent mechanism and status.
- Tests performed.
- Dashboard verification status.
- Outstanding client actions.

Tracking IDs are configuration identifiers and may be recorded. Never store passwords, access tokens, API secrets, private customer information, or form submissions in PROJECT_NOTES.md.

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
- Legal, privacy, or compliance requirements are uncertain, including whether consent is required for tracking.
- A tracking ID is missing, unverified, or appears to belong to another client or project.
- The repository is not registered with the n8n deployment system, or the n8n deployment fails in a way that cannot be resolved without bypassing the approval process.
- A provider's plan limits make the current approach unsuitable.
- The implementation would require a materially more complex architecture than originally agreed.

When blocked, explain the exact decision or action needed. Do not pretend the action was completed.

# Final Operating Principle

The goal is not merely to make a website appear online. The goal is to deliver a professional, tested, maintainable website that the client can own and update, with clear account ownership, verified contact functionality, and no hidden assumptions or unexpected costs.
