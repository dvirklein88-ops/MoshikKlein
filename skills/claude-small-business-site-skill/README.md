# Claude Code skill: `/business-site`

This skill guides Claude Code through building, checking, versioning, and deploying a small-business website with GitHub and Netlify. It is designed for repeatable client websites, especially Hebrew/RTL service-business sites.

## Install in one project

1. Unzip this package.
2. Copy the included `.claude/skills/business-site/` folder into the root of the website project.
3. Open Claude Code in that project.
4. Run:

   `/business-site`

   Optionally add a brief, for example:

   `/business-site אתר תדמית בעברית למטפלת במגע; שירותים, מחירים, גלריה, טופס פנייה ו-WhatsApp`

## Install for all projects (user-level)

Copy `SKILL.md` into the user-level Claude Code skills folder:

- Windows: `%USERPROFILE%\.claude\skills\business-site\SKILL.md`
- macOS/Linux: `~/.claude/skills/business-site/SKILL.md`

Create the directories if they do not exist. If Claude Code was already open, start a new session if the skill does not appear. Verify with `/skills`.

## What it does

- Inspects the current project before changing files.
- Collects client facts and creates saved planning/status notes.
- Explicitly asks for design instructions, reference websites, logos, real photos, and other client assets; if none are available, it uses a suitable default design.
- Confirms the correct GitHub account/organization, repository, authentication, and commit author identity for each client rather than reusing the previous client's setup.
- Builds a responsive site, including RTL when needed.
- Adds WhatsApp and configures a Netlify form when possible.
- Runs QA checks.
- Helps connect GitHub and Netlify and deploys a preview.
- Pauses before production deployment, public repositories, DNS changes, billing, or other consequential actions.
- Creates a handover guide.

## Requirements and limitations

- Claude Code needs terminal/file access in the project.
- Git is recommended. GitHub CLI (`gh`) and Netlify CLI (`netlify`) are optional but can make setup easier.
- You must authenticate to GitHub/Netlify yourself in their official login flows. For client-owned repositories, the client should authorize access or invite you as a collaborator; never share passwords or tokens.
- The skill does not bypass permissions, create accounts, or guarantee deployment without working credentials and configuration.
- Review account permissions before approving integrations.
- Netlify Forms must be enabled/configured and verified on a deployed site; a form that merely renders is not proof that submissions work.
- Keep all credentials out of source files and Git history.

## Official documentation

- Claude Code skills: https://code.claude.com/docs/en/skills
- Netlify CLI: https://docs.netlify.com/api-and-cli-guides/cli-guides/get-started-with-cli/
- Netlify continuous deployment: https://docs.netlify.com/deploy/create-deploys/
- Netlify Forms: https://docs.netlify.com/manage/forms/setup/
