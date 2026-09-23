# Frontend Architecture Plan

This document defines the architectural structure and implementation roadmap for the Nodibranch documentation frontend.

## Folder Map

### `src/components/`
- `Callout.tsx` (Violation: Misplaced - should be in `common/`)
- `CodeBlock.tsx` (Violation: Misplaced - should be in `common/`)
- `Layout.tsx` (Violation: Misplaced - should be in `common/` or a dedicated layout folder)
- `Sidebar/`
    - `Sidebar.tsx`
    - `index.js`
- `TableOfContents/`
    - `TableOfContents.tsx`
    - `index.js`
- `common/`
    - `Button/`
        - `ButtonComponent.tsx` (Violation: Poor Naming - should be `Button.tsx`)
        - `index.ts`
    - `InfoBox/`
        - `InfoBox.tsx`
        - `index.ts`

### `src/pages/`
- `DocPage.tsx` (Risk: Logic bloat / "God Component")
- `Home.tsx`

## Technical Debt & Observations

The current implementation fails the structural audit based on `CLAUDE.md` rules:

1. **Component Placement**: Reusable UI elements (`Callout`, `CodeBlock`, `Layout`) are sitting in the components root instead of `src/components/common/`.
2. **Inconsistent Patterns**: Mixture of root-level files and folder-based components.
3. **Naming Violations**: `ButtonComponent.tsx` violates the "no abbreviations or vague names" and "match component's role" rules. It should simply be `Button.tsx`.
4. **Extension Inconsistency**: The project uses a mix of `.tsx`, `.ts`, and `.js` (e.g., `Sidebar/index.js` vs `Button/index.ts`), leading to inconsistent module resolution and tooling experience.
5. **Architectural Risk**: `DocPage.tsx` is currently handling multiple documentation views, creating a risk of it becoming a "God Component".

## Refactoring Roadmap

### Phase 1: Structural Alignment (Immediate)
- [ ] **Relocate Common Components**: Move `Callout.tsx`, `CodeBlock.tsx`, and `Layout.tsx` to `src/components/common/`.
- [ ] **Fix Naming**: Rename `src/components/common/Button/ButtonComponent.tsx` $\rightarrow$ `Button.tsx`.
- [ ] **Standardize Extensions**: Convert all `.js` files in `src/` to `.ts` or `.tsx` to ensure type safety and consistency.

### Phase 2: Decomposition (Short-term)
- [ ] **Split DocPage**: Decompose `DocPage.tsx` into specific page components or a more modular section-based architecture to prevent logic bloat.
- [ ] **Unify Component Pattern**: Ensure every component follows the `<Folder>/<Component>.tsx` + `index.ts` pattern.

### Phase 3: Validation
- [ ] **Audit against CLAUDE.md**: Final pass to ensure no duplicated JSX remains and all logic is extracted into hooks.
