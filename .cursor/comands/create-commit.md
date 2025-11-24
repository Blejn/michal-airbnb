# Create Commit

## Overview

Create well-structured commits following conventional commit standards and project conventions. AI should automatically stage changes, run a code review using the `@code-review.md` checklist for each commit, and create appropriate commits.

## Commit Message Format

### Structure

```
type(scope): description
```

### Types (from commitlint.config.js)

- `feat` - New features
- `fix` - Bug fixes
- `docs` - Documentation changes
- `style` - Code style changes (formatting, semicolons, etc.)
- `refactor` - Code refactoring without changing functionality
- `perf` - Performance improvements
- `test` - Adding or updating tests
- `build` - Build system or external dependencies
- `ci` - CI/CD configuration and scripts
- `chore` - Maintenance tasks
- `revert` - Reverting previous commits

### Scopes (from commitlint.config.js)

- `repo` - Repository-wide changes
- `foto` - Foto app specific changes
- `dashboard` - Dashboard specific changes
- `openapi` - API documentation changes
- `auth` - Authentication related changes
- `actions` - GitHub Actions or CI/CD changes

## Examples

```
feat(foto): add age verification blocker component
fix(foto): resolve mobile navigation layout issues
docs(repo): update development guidelines
refactor(auth): simplify user authentication flow
perf(foto): optimize image loading performance
test(foto): add unit tests for age blocker component
chore(repo): update dependencies
build(ci): configure GitHub Actions workflow
```

## Commit Creation Process

1. **AI automatically stages changes**

   ```bash
   git add .
   ```

2. **AI reviews staged changes**

   ```bash
   git status
   git diff --cached
   ```

3. **AI runs code review for staged changes (required)**
   Use `@code-review.md` and verify the staged diff against the checklist:

   - Functionality: intent correct, edge cases handled, errors handled
   - Code Quality: readability, small focused functions, no duplication, conventions
   - Security: inputs validated, no secrets, safe handling
   - Performance: avoid unnecessary work, reasonable bundle impact, cleanups
   - Project Guidelines: follows `AGENTS.md` rules and feature patterns

4. **AI creates atomic commits**
   ```bash
   git commit -m "type(scope): description"
   ```

## Best Practices

- Keep the subject line under 50 characters
- Use imperative mood ("add" not "added" or "adds")
- Capitalize the first letter of the description
- Don't end the subject line with a period
- **Make atomic commits** - split multiple changes into separate commits
- Use descriptive but concise descriptions
- **No body descriptions** - keep commits simple and focused
- **Run the code review checklist** from `@code-review.md` before every commit
- **AI should handle staging, review, and commit creation automatically**
- **Do not use --no-verify** - pre-commit/prepare-commit hooks must run and pass. If hooks require interaction, configure non-interactive modes or fix issues; never bypass hooks.

## Multiple Changes Strategy

When multiple logical changes are made, AI should:

1. **Identify distinct logical changes**
2. **Stage each change separately**
3. **Run the code review checklist for the staged change**
4. **Commit using appropriate type/scope**
5. **Ensure each commit is atomic and focused**

Example for multiple changes:

```bash
git add src/features/about-us/
# Review staged changes using @code-review.md before committing
git commit -m "feat(foto): add about us page components"

git add apps/foto/messages/
# Review staged changes using @code-review.md before committing
git commit -m "feat(foto): add about us translations"

git add AGENTS.md
# Review staged changes using @code-review.md before committing
git commit -m "docs(repo): update development guidelines"
```
