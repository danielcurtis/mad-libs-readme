# Hi there, I'm Curtis 👋

This is an example pinned README for my GitHub.

## Dynamically loaded DEV Articles:

- [Learn React by Recreating this Dev.to Article](https://dev.to/curtiscodes/learn-react-by-recreating-this-dev-to-article-1pfm)
- [Learn to UseContext() with Hooks in 3 Minutes](https://dev.to/curtiscodes/learn-to-usecontext-with-hooks-in-3-minutes-4c4g)

[mad-libs-readme](https://github.com/danielcurtis/mad-libs-readme) explains how I built this readme.

![Build README](https://github.com/danielcurtis/mad-libs-readme/workflows/Build%20README/badge.svg)

## Prerequisites:

- GitHub Actions
- NodeJS

## Installation:

1. Copy the following files from the mad-libs-readme repo:

- personal/updateReadme.js
- personal/README.md
- .github/workflows/build.yml

2. Add the files to your namespace repo. The repo should match your GitHub username, for me it's "danielcurtis"
3. Replace the URL endpoint in the updateReadme.js file with your DEV username
4. If you make changes to the README text, be sure to update the regex in the updateReadme.js file

## Development:

I demonstrate how to fetch DEV articles in updateReadme.js

You could in theory display all kinds of data from an API in your README. Cat facts, GitHub user data, etc.

1. Fetch data with a NodeJS file (updateReadme.js)
2. Add environment variables for secret APIs (I don't do this currently, but it's easy to do in settings)
3. Use GitHub Actions to run the file (build.yml)

## License

[MIT](https://github.com/danielcurtis/mad-libs-readme/main/LICENSE)
