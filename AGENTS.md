# AGENTS.md — Rules for AI changes to this Angular project

You are editing an Angular app on behalf of a non-programmer. They describe what
they want in plain language; you write correct, professional code. Follow these
rules. When a request conflicts with them, say so and propose the right way.

## Golden rules

1. **Smallest change that works.** No new dependencies, abstractions, or files
   unless the task truly needs them. Prefer editing existing code over adding.
2. **Respect the existing architecture.** Match the folder layout, naming, and
   patterns already in the repo. Don't introduce a second way of doing something
   that already has a way.
3. **Never break the build.** After any change, the app must compile with no
   TypeScript or template errors.
4. **Explain in plain language.** End every change with 1–3 sentences a
   non-programmer understands: what changed and what they'll see.

## Before you change anything

- Read the relevant files first. Don't guess at structure.
- Confirm the Angular version: `ng version` (or check `package.json`). These
  rules assume **v17+**. If it's v14–16 (NgModules, no signals), adapt and tell
  the user.
- If the request is ambiguous or could break something, ask one short question
  before coding — don't assume.

## Angular best practices (v17+)

**Components**
- Standalone components only. No `NgModule` for new code (`standalone: true`).
- One responsibility per component. If it does two unrelated things, split it.
- Use `ChangeDetectionStrategy.OnPush` on new components.
- Use the modern `inject()` function for dependencies, not constructor params,
  in new code.

**Templates**
- Use the new control flow: `@if`, `@for`, `@switch`. Not `*ngIf` / `*ngFor`.
- Every `@for` needs a `track` (e.g. `track item.id`).
- Keep logic out of templates. No complex expressions inline — compute in the
  component.

**State & reactivity**
- Prefer **signals** for component state (`signal`, `computed`, `effect`).
- Use the `async` pipe for observables in templates; don't manually subscribe.
- If you do subscribe in code, unsubscribe (use `takeUntilDestroyed()`).

**TypeScript**
- `strict` mode stays on. No `any` — use real types or `unknown` + narrowing.
- Define an `interface` (or `type`) for every data shape (API responses, inputs).
- Use `readonly` for values that shouldn't change; `const` over `let`.
- Prefer array/object methods (`map`, `filter`, `reduce`, optional chaining `?.`,
  nullish coalescing `??`) over manual loops and null checks.

**Structure**
- Group by feature, not by type. A feature owns its components, services, models.
- Business logic and HTTP calls go in **services**, never in components.
- Reusable, presentation-only pieces are dumb components: data in via `input()`,
  events out via `output()`.

**Forms & HTTP**
- Use Reactive Forms (`FormGroup`/`FormControl`), not template-driven, for
  anything non-trivial.
- HTTP via `HttpClient` in a service, typed with an interface, errors handled.

## Quality gate (run before saying "done")

```bash
ng build            # must compile clean
ng lint             # if configured — fix what it flags
ng test             # if tests exist — keep them green
```

Never report a change as finished without confirming it compiles. If a command
isn't available, say so instead of assuming it passed.

## When you spot an improvement

If you see something that violates these practices near the code you're touching,
mention it and offer to fix it — but don't silently refactor unrelated code. Keep
the user's actual request and your suggestions separate.

## Things to never do

- Don't add a library for something a few lines of code or a built-in does.
- Don't disable `strict`, lint rules, or type checks to make an error go away.
- Don't leave commented-out code, `console.log`, or `TODO`s in the result.
- Don't change formatting/style across files unrelated to the task.
