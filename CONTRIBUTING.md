# Contributing to Zerticraft

Thank you for your interest in contributing to Zerticraft! We appreciate your effort to make this project better. Please read through this document to understand how you can contribute.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Style Guides](#style-guides)
- [Commit Messages](#commit-messages)

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [INSERT CONTACT].

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report for Zerticraft. Following these guidelines helps maintainers and the community understand your report, reproduce the behavior, and find related reports.

Before creating bug reports, please check the [issues](https://github.com/your-repo/issues) as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible.

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When you create an enhancement suggestion, please include as many details as possible.

### Your First Code Contribution

Unsure where to begin contributing to Zerticraft? You can start by looking through these `beginner` and `help-wanted` issues:

- [Beginner issues](https://github.com/your-repo/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) - issues which should only require a few lines of code, and a test or two.
- [Help wanted issues](https://github.com/your-repo/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22) - issues which should be a bit more involved than `beginner` issues.

### Pull Requests

The process described here has several goals:

- Maintain Zerticraft's quality
- Fix problems that are important to users
- Engage the community in working toward the best possible product
- Enable a sustainable system for Zerticraft's maintainers to review contributions

Please follow these steps to have your contribution considered by the maintainers:

1. Follow all instructions in the pull request template
2. After you submit your pull request, verify that all status checks are passing
3. Participate in the code review process

## Development Setup

### Prerequisites

- Node.js (v18 or higher)
- pnpm (v8 or higher)

### Getting Started

1. Fork the repository on GitHub
2. Clone your fork locally
```bash
git clone https://github.com/YOUR_USERNAME/zerticraft.git
cd zerticraft
```

3. Install dependencies
```bash
pnpm install
```

4. Create a branch for your changes
```bash
git checkout -b feature/your-feature-name
```

5. Start the development server
```bash
pnpm dev
```

6. Make your changes and test them

7. Commit your changes following the commit message guidelines

8. Push to your fork and submit a pull request

## Pull Request Process

1. Ensure any install or build dependencies are removed before the end of the layer when doing a build.
2. Update the README.md with details of changes to the interface, this includes new environment variables, exposed ports, useful file locations and container parameters.
3. Increase the version numbers in any examples files and the README.md to the new version that this Pull Request would represent. The versioning scheme we use is [SemVer](http://semver.org/).
4. You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

## Style Guides

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line
* When only changing documentation, include `[ci skip]` in the commit title

### JavaScript Style Guide

All JavaScript must adhere to [JavaScript Standard Style](https://standardjs.com/).

* Use semicolons
* 2 spaces for indentation (no tabs)
* Prefer `'` over `"`
* ES6 syntax when possible

### React Component Guidelines

* Use functional components with React Hooks
* Use descriptive variable and function names
* Follow the existing component structure and naming conventions
* Use Tailwind CSS utility classes for styling
* Maintain consistent color palette using primary color (#0cc0df)
* Write JSDoc-style comments for complex functions

### Testing

* Write tests for new features
* Update existing tests if your changes affect existing functionality
* Ensure all tests pass before submitting a pull request

## Commit Messages

This project uses semantic commit messages to streamline the release process. Every commit message should be matched by this regex:

```
/^((feat|fix|docs|style|refactor|test|chore)(\(.+\))?(\!)?\: (.*))|Merge.*/
```

Examples:
* `feat: Add email status tracking`
* `fix: Resolve PDF generation issue`
* `docs: Update API configuration documentation`
* `refactor: Improve state management`
* `test: Add unit tests for certificate generation`

## Questions?

If you have any questions about contributing, feel free to reach out by opening an issue with the `question` label.

Thank you for contributing to Zerticraft!