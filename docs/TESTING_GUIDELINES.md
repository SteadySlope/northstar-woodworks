# TESTING GUIDELINES

## Overview

This document defines the testing and quality assurance process that must be completed before any task can be marked [COMPLETED].

**Critical Rule:** Testing Agent is the ONLY agent that marks tasks [COMPLETED].

---

## Quality Gates (Must ALL Pass)

### Gate 1: Build Verification
```bash
pnpm build
```

**Requirements:**
- ✅ 0 TypeScript errors
- ✅ 0 Build failures
- ✅ All pages compile successfully
- ✅ No missing dependencies
- ✅ No circular dependencies

**If Build Fails:**
1. Review error messages
2. Fix TypeScript errors
3. Check import/export statements
4. Verify all dependencies installed
5. Return task to [STARTED] status
6. Document issues in CONTEXT.md

---

### Gate 2: Linting Verification
```bash
pnpm lint
```

**Requirements:**
- ✅ 0 ESLint errors
- ✅ 0 ESLint warnings
- ✅ Code follows project style guide
- ✅ No unused variables
- ✅ No console.logs (unless intentional)

**If Lint Fails:**
1. Review lint errors
2. Fix code style issues
3. Remove debugging code
4. Check for unused imports
5. Return task to [STARTED] status
6. Document issues in CONTEXT.md

---

### Gate 3: Acceptance Criteria Verification

**Requirements:**
- ✅ ALL acceptance criteria from task checked
- ✅ Each criterion individually verified
- ✅ Edge cases tested
- ✅ Error states handled

**Process:**
1. Read task acceptance criteria
2. Test each criterion one by one
3. Mark each as ✓ or ✗
4. If ANY criterion fails:
   - Return task to [STARTED]
   - Document what failed
   - Describe expected vs actual behavior

---

### Gate 4: Responsive Design Verification

**Requirements:**
- ✅ Mobile (< 640px) - Layout works
- ✅ Tablet (640-1024px) - Layout works
- ✅ Desktop (> 1024px) - Layout works
- ✅ No horizontal scroll
- ✅ Touch targets adequate (44x44px min)
- ✅ Text readable at all sizes

**How to Test:**
1. Use browser dev tools
2. Test each breakpoint
3. Verify layout adapts correctly
4. Check touch target sizes
5. Ensure no content cut off

**Common Issues:**
- Fixed widths instead of responsive
- Missing mobile breakpoints
- Text too small on mobile
- Buttons too close together
- Images not scaling

---

### Gate 5: Accessibility Verification (WCAG 2.1 AA)

**Requirements:**
- ✅ Semantic HTML elements
- ✅ Proper heading hierarchy (h1 → h2 → h3)
- ✅ Alt text for all images
- ✅ ARIA labels where needed
- ✅ Keyboard navigation works
- ✅ Focus indicators visible
- ✅ Color contrast ratios meet standards
- ✅ Form labels associated correctly

**How to Test:**
1. Tab through page (keyboard only)
2. Verify focus order logical
3. Check all interactive elements reachable
4. Use browser accessibility tools
5. Verify color contrast (text/background)

**Tools:**
- Browser DevTools Lighthouse
- axe DevTools extension
- WAVE browser extension

---

### Gate 6: SEO Verification

**Requirements:**
- ✅ H1 tag present and descriptive
- ✅ Meta description exists (if page)
- ✅ Title tag appropriate
- ✅ Schema markup intact (if exists)
- ✅ Semantic HTML structure
- ✅ Internal links working

**Critical:**
- NEVER remove existing SEO elements
- MAINTAIN all H1 tags
- PRESERVE meta descriptions
- KEEP schema markup

---

### Gate 7: Content Verification

**Requirements:**
- ✅ All original content present
- ✅ No text significantly shortened
- ✅ Information hierarchy improved
- ✅ Readability enhanced
- ✅ No broken links
- ✅ No missing images

**Critical:**
- This is a REDESIGN project, not content reduction
- ALL essential information must remain
- Only restructure, don't delete

---

## Testing Agent Protocol

### Role & Responsibilities

**Token Budget:** 80-120k

**Context to Load:**
- Current task (must be in [REVIEW] status)
- docs/TESTING_GUIDELINES.md (this file)
- docs/CONTEXT.md (recent changes)
- Changed files only (not entire codebase)
- Task acceptance criteria

**Process:**

```markdown
1. Verify Task Status
   - Confirm task is [REVIEW]
   - Read task acceptance criteria
   - Read implementation notes from CONTEXT.md

2. Run Quality Gates (in order)
   - Gate 1: Build
   - Gate 2: Lint
   - Gate 3: Acceptance Criteria
   - Gate 4: Responsive Design
   - Gate 5: Accessibility
   - Gate 6: SEO
   - Gate 7: Content

3. Document Results
   - Log each gate result
   - Note any failures
   - Capture screenshots if needed

4. Make Decision
   IF all gates pass:
     - Create git commit
     - Push to remote
     - Update task to [COMPLETED]
     - Log success in CONTEXT.md
   ELSE:
     - Update task to [STARTED]
     - Document failures in CONTEXT.md
     - List specific issues to fix
     - DO NOT mark [COMPLETED]

5. Return to Orchestrator
```

---

## Testing Checklist Template

Use this checklist for each task:

```markdown
## Testing Results: [TASK-ID]

### Gate 1: Build Verification
- [ ] `pnpm build` executed
- [ ] 0 TypeScript errors
- [ ] 0 Build failures
- [ ] Result: ✓ PASS / ✗ FAIL

### Gate 2: Linting Verification
- [ ] `pnpm lint` executed
- [ ] 0 ESLint errors
- [ ] 0 ESLint warnings
- [ ] Result: ✓ PASS / ✗ FAIL

### Gate 3: Acceptance Criteria
- [ ] Criterion 1: [description] - ✓/✗
- [ ] Criterion 2: [description] - ✓/✗
- [ ] Criterion 3: [description] - ✓/✗
- [ ] Result: ✓ PASS / ✗ FAIL

### Gate 4: Responsive Design
- [ ] Mobile (< 640px) tested
- [ ] Tablet (640-1024px) tested
- [ ] Desktop (> 1024px) tested
- [ ] No horizontal scroll
- [ ] Touch targets adequate
- [ ] Result: ✓ PASS / ✗ FAIL

### Gate 5: Accessibility
- [ ] Semantic HTML used
- [ ] Heading hierarchy correct
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Color contrast adequate
- [ ] Result: ✓ PASS / ✗ FAIL

### Gate 6: SEO
- [ ] H1 tag present
- [ ] Meta description exists
- [ ] Schema markup intact
- [ ] Internal links work
- [ ] Result: ✓ PASS / ✗ FAIL

### Gate 7: Content
- [ ] All original content present
- [ ] Information complete
- [ ] Links working
- [ ] Images loading
- [ ] Result: ✓ PASS / ✗ FAIL

### Overall Result
- [ ] ✓ ALL GATES PASSED - Ready for [COMPLETED]
- [ ] ✗ SOME GATES FAILED - Return to [STARTED]

### Action Taken
- [ ] Task marked [COMPLETED]
- [ ] Git commit created
- [ ] Changes pushed
- [ ] CONTEXT.md updated

OR

- [ ] Task returned to [STARTED]
- [ ] Issues documented
- [ ] CONTEXT.md updated with failure reasons
```

---

## Git Commit Standards

### When to Commit

**Only commit when:**
- ALL quality gates pass
- Task is ready for [COMPLETED]
- Testing Agent has verified everything

**Never commit if:**
- Build fails
- Lint fails
- Any acceptance criterion fails
- Tests are incomplete

### Commit Message Format

```bash
type: description

Examples:
feat: add IconFeatureGrid component to content library
fix: resolve responsive layout issues in homepage hero
refactor: split large component into smaller modules
style: improve visual hierarchy on bathrooms pillar page
```

**Types:**
- `feat` - New feature or enhancement
- `fix` - Bug fix
- `refactor` - Code restructuring
- `style` - Visual/styling changes
- `docs` - Documentation
- `test` - Test additions
- `chore` - Maintenance

### Commit Process

```bash
# Stage all changes
git add .

# Create commit with descriptive message
git commit -m "type: clear description of changes"

# Push to remote
git push
```

**If commit fails:**
1. Review error message
2. Fix issues (conflicts, etc.)
3. Retry commit
4. Document in CONTEXT.md

---

## Component-Specific Testing

### For New Components (TASK-048)

**Additional Checks:**
- [ ] Component accepts all required props
- [ ] TypeScript types defined correctly
- [ ] Props validation works
- [ ] Default values set appropriately
- [ ] Component renders without errors
- [ ] Variants work as expected
- [ ] Responsive by default
- [ ] Follows design system colors
- [ ] Can be imported and used easily

**Test Pattern:**
```tsx
// Create test usage in temporary page
import { IconFeatureGrid } from '@/components/content';

const features = [
  { icon: <svg>...</svg>, title: 'Test', description: 'Test desc' }
];

<IconFeatureGrid features={features} columns={3} variant="card" />

// Verify:
// - No TypeScript errors
// - Renders correctly
// - Props work as expected
```

---

### For Page Redesigns (TASK-040 to TASK-047)

**Additional Checks:**
- [ ] Original content preserved
- [ ] SEO elements maintained
- [ ] Internal links still work
- [ ] External links still work
- [ ] Images load correctly
- [ ] Icons render properly
- [ ] Spacing consistent
- [ ] Colors match brand
- [ ] Typography hierarchy clear
- [ ] CTAs prominent and clear

**Before/After Comparison:**
1. Note original structure
2. Verify all content sections present
3. Ensure information not lost
4. Check improvements applied
5. Validate user experience better

---

## Common Test Failures & Solutions

### Build Failures

**Error:** "Cannot find module '@/components/content'"
**Solution:** Check import path, verify file exists

**Error:** "Type 'X' is not assignable to type 'Y'"
**Solution:** Fix TypeScript type definitions

**Error:** "Module not found: Can't resolve 'package-name'"
**Solution:** Run `pnpm install`

### Lint Failures

**Error:** "'X' is assigned a value but never used"
**Solution:** Remove unused variable or use it

**Error:** "Missing return type on function"
**Solution:** Add explicit return type

**Error:** "Unexpected console statement"
**Solution:** Remove console.log or add eslint-disable comment

### Responsive Issues

**Problem:** Content overflows on mobile
**Solution:** Add responsive classes, check max-widths

**Problem:** Text too small on mobile
**Solution:** Use responsive text sizes (text-sm md:text-base)

**Problem:** Buttons too close together
**Solution:** Add gap-4 or space-y-4

### Accessibility Issues

**Problem:** Missing alt text
**Solution:** Add descriptive alt="" to images

**Problem:** Poor color contrast
**Solution:** Use brand colors with sufficient contrast

**Problem:** Can't tab to element
**Solution:** Ensure interactive elements are buttons/links

---

## Testing Agent Output Format

```markdown
════════════════════════════════════════
TESTING REPORT: [TASK-ID]
════════════════════════════════════════

Task: [Title]
Status: [REVIEW] → [COMPLETED/STARTED]

BUILD VERIFICATION
├─ pnpm build: ✓ PASS
├─ 0 errors
└─ Build time: Xs

LINT VERIFICATION
├─ pnpm lint: ✓ PASS
├─ 0 errors, 0 warnings
└─ All checks passed

ACCEPTANCE CRITERIA (X/X passed)
├─ ✓ Criterion 1
├─ ✓ Criterion 2
└─ ✓ Criterion 3

RESPONSIVE DESIGN
├─ ✓ Mobile (< 640px)
├─ ✓ Tablet (640-1024px)
└─ ✓ Desktop (> 1024px)

ACCESSIBILITY
├─ ✓ Semantic HTML
├─ ✓ Keyboard navigation
├─ ✓ Focus indicators
└─ ✓ Color contrast

SEO
├─ ✓ H1 present
├─ ✓ Meta description
└─ ✓ Schema markup intact

CONTENT
├─ ✓ All content present
├─ ✓ Links working
└─ ✓ Images loading

════════════════════════════════════════
RESULT: ✓ ALL GATES PASSED
════════════════════════════════════════

Git commit created: "feat: [description]"
Changes pushed successfully
Task marked [COMPLETED]

Token usage: [X]k / 80-120k budget
```

---

## Critical Rules Summary

1. **ALL gates must pass** - No exceptions
2. **Build must have 0 errors** - Not negotiable
3. **Lint must have 0 errors/warnings** - Required
4. **Only Testing Agent marks [COMPLETED]** - No other agent
5. **If any gate fails, return to [STARTED]** - Don't mark completed
6. **Always commit and push** - When gates pass
7. **Document everything** - In CONTEXT.md
8. **Test responsiveness** - All breakpoints
9. **Verify accessibility** - WCAG compliance
10. **Preserve SEO** - Never remove meta/schema

---

**Remember:** Quality over speed. Better to return to [STARTED] and fix issues than mark [COMPLETED] with failures.
