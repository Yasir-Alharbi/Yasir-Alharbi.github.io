# Cybersecurity and AI Portfolio Starter

This folder contains a simple static portfolio site for a SOC analyst who is growing into DFIR and AI security research.

## Best Platform Choice

Use GitHub as the main portfolio hub.

1. Create a GitHub profile README so visitors immediately understand who you are.
2. Create one repository for each strong university project or research paper.
3. Publish this site with GitHub Pages as your polished CV link.
4. Keep LinkedIn as the professional networking page that points back to GitHub.

This is better than starting with a complicated personal website because GitHub shows both your technical work and your writing. For cybersecurity and AI, evidence matters more than decoration.

## Files

- `index.html`: the portfolio page.
- `styles.css`: the visual design.
- `script.js`: project filtering.
- `assets/portfolio-visual.svg`: the main visual asset.
- `github-profile-README-template.md`: copy for your GitHub profile README.

## How To Publish On GitHub Pages

1. Create a GitHub account if you do not have one.
2. Create a public repository named `your-username.github.io`.
3. Upload these files to that repository.
4. In the repository, go to Settings, then Pages.
5. Choose "Deploy from a branch".
6. Select the main branch and the root folder.
7. After GitHub finishes publishing, your site will be available at `https://your-username.github.io`.

## How To Organize Your 7 Course Projects

For each course project, create one repository with this structure:

```text
project-name/
  README.md
  report/
  notebooks/
  src/
  data-sample/
  images/
```

Each project README should include:

- Problem statement
- What you built or researched
- Tools and methods
- Dataset source, or a note that data is synthetic or sanitized
- Key results
- Screenshots or diagrams
- Limitations
- What you would improve next

## Important For SOC And DFIR Work

Never publish employer data, customer data, internal screenshots, real indicators from private cases, credentials, logs, ticket IDs, email headers from real users, or anything covered by company policy. Use public datasets, synthetic examples, lab machines, or intentionally sanitized screenshots.

## What To Replace Next

- `Your Name`
- GitHub, LinkedIn, and email links
- Project titles and descriptions
- Real repository links
- Your strongest 3 projects at the top
