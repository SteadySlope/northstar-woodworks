# AI RULESET

> **For general development guidance, see `/CLAUDE.md` in the root directory**
> This file contains specialized task management workflows and agent orchestration protocols.

---

## 📖 QUICK REFERENCE

### When to Use What

| Scenario | Command | Required Files |
|----------|---------|----------------|
| Create new tasks from list | `/create <file>` | Task source file |
| Start next task | `/start` | TASKS.md, AGENTS.md |
| Resume in-progress task | `/continue` | TASKS.md, CONTEXT.md |
| Test & commit completed task | `/finish` | TASKS.md, TESTING_GUIDELINES.md |
| Execute all tasks automatically | `/do-all` | All docs/* files |
| User reports bug | **Enter planning mode** | PLANNING_MODE.md |
| User requests feature | **Enter planning mode** | PLANNING_MODE.md |

### Task Status Flow

```
[NOT STARTED] → [STARTED] → [REVIEW] → [COMPLETED]
                     ↓
                [BLOCKED] (if dependencies/issues)
```

### Agent Selection Quick Guide

```
Bug fix          → Planning Agent + Frontend/Backend Agent
New feature      → Planning Agent + Specialist(s)
Refactoring      → Refactoring Agent
Database change  → Database Agent
Testing          → Testing Agent
Documentation    → Documentation Agent
```

---

## 🚨 CRITICAL RULES (Read First)

### Planning Mode First - NO EXCEPTIONS

**Before ANY code changes:**
1. Read `docs/PLANNING_MODE.md`
2. Read `docs/AGENTS.md` to identify correct specialist
3. Enter planning mode for:
   - Bug reports
   - Feature requests
   - Unexpected behavior
   - Code modification requests

**NO VIBE CODING. PLAN FIRST, CODE SECOND.**

### Role Identification

Determine if you are:
- **Orchestrator** - Coordinates workflow, spawns specialized agents, monitors progress
- **Specialist** - Implements specific task with minimal context per AGENTS.md

If Orchestrator: Read AGENTS.md and delegate with minimal, task-specific context

### Quality Gates

**MUST PASS before marking task [COMPLETED]:**
```bash
pnpm build    # 0 errors required
pnpm lint     # 0 errors/warnings required
```

---

## 📋 TASK WORKFLOWS

### `/create` - Create Tasks

**Purpose:** Convert task list into structured TASKS.md entries

**Arguments:** `$FILE_TO_READ` (e.g., `tasks_9-20_001.md`)

**Steps:**
1. **Read required files:**
   - `$FILE_TO_READ` (task source)
   - `docs/TASKS_GUIDELINES.md`
   - `docs/CONTEXT_UPKEEP_GUIDELINES.md`

2. **Check existing tasks in `docs/TASKS.md`:**

   **✅ All tasks [COMPLETED]:**
   - Summarize TASKS.md + CONTEXT.md
   - Append summary to HISTORY.md
   - Clear TASKS.md
   - Add new tasks as [NOT STARTED]

   **⚠️ Has [STARTED] or [REVIEW] tasks:**
   - Create `TASKS_mm-dd-yyyy-version-xxx.md`
   - Notify: "⚠️ Unfinished tasks exist. Created separate file."
   - Do NOT modify existing TASKS.md

3. **Format tasks:**
   - Follow TASKS_GUIDELINES.md structure
   - Assign specialist agent per task/subtask
   - Mark all [NOT STARTED]

---

### `/start` - Begin Next Task

**Purpose:** Start first [NOT STARTED] task with appropriate specialist

#### As Orchestrator:
1. Read `docs/TASKS.md` (minimal - find first [NOT STARTED])
2. Read `docs/AGENTS.md` (determine specialist)
3. Spawn specialist agent:
   - Load ONLY context per AGENTS.md
   - Set token budget for agent type
   - Monitor completion

#### As Specialist:
1. **Verify** correct agent type for task
2. **Load context** per AGENTS.md specs
3. **Update** task to [STARTED] in TASKS.md
4. **Implement** task + all subtasks
5. **Mark subtasks** ✓/✗ progressively (don't batch)
6. **Update** task to [REVIEW] when complete
7. **Document** in CONTEXT.md:

```markdown
## Task Completed: [TASK-ID] Title
**Agent:** [Your agent type]
**Token Usage:** [~X]k tokens
**Files Modified:**
- path/to/file1.ts
- path/to/file2.tsx

**Changes Made:**
[Detailed implementation]

**New Functionality:**
[Features/behaviors added]

**Testing Focus:**
[Key areas to validate]

**Dependencies Added:**
[Packages/imports or "None"]

**Expected Behavior:**
[How changes should work]

**Context Efficiency:**
[What loaded, what excluded]
```

---

### `/continue` - Resume In-Progress Task

**Purpose:** Complete task marked [STARTED]

**Steps:**
1. Read `docs/TASKS.md`
2. Find first [STARTED] task
3. Read `docs/CONTEXT.md` for history
4. Complete task + all subtasks
5. Update subtasks ✓/✗ progressively
6. Update to [REVIEW] when done
7. Document in CONTEXT.md (same format as `/start`)

---

### `/finish` - Test & Complete Task

**Purpose:** Validate, test, commit, and mark [COMPLETED]

**Steps:**
1. **Read:**
   - `docs/TASKS.md` (find [REVIEW] task)
   - `docs/CONTEXT.md`
   - `docs/TESTING_GUIDELINES.md`

2. **Test:**
   - Follow testing guidelines
   - Verify acceptance criteria
   - Run quality gates

3. **Quality gates MUST PASS:**
```bash
pnpm build    # 0 errors
pnpm lint     # 0 errors/warnings
```

4. **Commit & push:**
```bash
git add .
git commit -m "type: descriptive message"
git push
```

5. **Update:** [REVIEW] → [COMPLETED] in TASKS.md

---

### `/do-all` - Execute All Tasks

**Purpose:** Orchestrated execution of entire task queue

**Mode:** Orchestrator delegates to specialized sub-agents

#### Execution Loop:

```
┌─────────────────────────────────────────────┐
│ 1. Orchestrator reads TASKS.md (20-30k)    │
│    → Find next [NOT STARTED]                 │
└────────────┬────────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────────┐
│ 2. Consult AGENTS.md for specialist type    │
└────────────┬────────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────────┐
│ 3. Spawn Planning Agent (if needed)         │
│    → Load: task + PLANNING_MODE.md (40-60k) │
│    → Wait for plan approval                  │
│    → Compact chat                            │
└────────────┬────────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────────┐
│ 4. Spawn Implementation Agent               │
│    → Specialist type per AGENTS.md          │
│    → Load: context per AGENTS.md (80-150k)  │
│    → Execute /start workflow                 │
│    → Wait for completion                     │
│    → Log token usage                         │
│    → Compact chat                            │
└────────────┬────────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────────┐
│ 5. Spawn Testing Agent                      │
│    → Load: TESTING_GUIDELINES.md + changed  │
│            files only (80-120k)              │
│    → Execute /finish workflow                │
│    → Validate results                        │
│    → Log token usage                         │
│    → Compact chat                            │
└────────────┬────────────────────────────────┘
             │
             ▼
        [More tasks?] ──Yes──┐
             │               │
             No              │
             │               │
             ▼               │
         [DONE]             │
             ▲               │
             └───────────────┘
```

#### Orchestrator Responsibilities:
- Monitor `docs/TASKS.md` (minimal context)
- Consult `docs/AGENTS.md` for selection
- Spawn specialized agents (not generalists)
- Enforce token budgets
- Verify context minimization
- Ensure chat compaction
- Track metrics in CONTEXT.md
- Maintain strategic oversight

#### Sub-Agent Protocol:
- Receive ONLY context per AGENTS.md
- Implementation agents: `/start` workflow only
- Testing agents: `/finish` workflow only
- Orchestrator: Strategic coordination only
- Token budgets enforced per role

#### Token Budget Enforcement:

| Agent Type | Budget | Context Loaded |
|------------|--------|----------------|
| Orchestrator | 20-30k | Task queue only |
| Planning | 40-60k | Task + related code |
| Frontend | 80-120k | Components + types |
| Backend | 80-120k | APIs + schema |
| Full-Stack | 120-150k | Both stacks |
| Database | 50-80k | Schema + migrations |
| Testing | 80-120k | Tests + criteria |
| Refactoring | 120-150k | Target file(s) |
| Documentation | 30-50k | Summaries only |

#### Context Efficiency Tracking:

Log in CONTEXT.md after each cycle:
```markdown
**Cycle [N] Token Usage:**
- Orchestrator: [X]k (budget: 20-30k) ✓/✗
- Planning: [X]k (budget: 40-60k) ✓/✗
- [Specialist]: [X]k (budget: [Y]k) ✓/✗
- Testing: [X]k (budget: 80-120k) ✓/✗
Total: [X]k
Efficiency: [Good/Needs Optimization]
```

**Continue until:** All tasks [COMPLETED]

---

## 🎯 TASK STATUS PROTOCOL

### Status Definitions

| Status | Meaning |
|--------|---------|
| [NOT STARTED] | Awaiting work |
| [STARTED] | Active implementation |
| [REVIEW] | Implementation done, needs validation |
| [COMPLETED] | Reviewed, tested, approved, committed |
| [BLOCKED] | Waiting on dependency |

### Update Rules

1. **NEVER assume status** beyond user's explicit request
2. **Update subtasks progressively** - Mark ✓/✗ during work, not at end
3. **Only mark [COMPLETED]** when FULLY done (tests pass, no errors)

### Verification Checklist

Before updating ANY status:
- [ ] Re-read original instruction word-for-word
- [ ] Quote exact status user requested
- [ ] Use ONLY that status - no interpretation

**Mental check:** *"What EXACT status did the user request?"*

❌ **Wrong:** "Technical work done, marking COMPLETED"
✅ **Right:** "User said 'mark as [REVIEW]', using [REVIEW]"

### When NOT to Mark [COMPLETED]

- Tests failing
- Build errors
- Implementation partial
- Unresolved errors
- Missing files/dependencies

**If blocked:** Keep [STARTED] or [REVIEW], create new task for blocker

---

## 🐛 BUG FIXING PROTOCOL

**NEVER QUICK PATCH. ALWAYS ROOT CAUSE.**

### 4-Step Process:

```
1. Find Root Cause
   ├─ Debug thoroughly
   ├─ Understand underlying issue
   └─ Document findings

2. Scan for Similar Bugs
   ├─ Search codebase for patterns
   └─ Check related components/files

3. Plan Comprehensive Fix
   ├─ Design solution for root cause
   ├─ Consider side effects
   └─ Prevent future occurrences

4. Implement Robust Solution
   ├─ Fix ALL instances
   ├─ Add safeguards
   └─ Update tests
```

---

## 🎯 CODE QUALITY STANDARDS

### Enforced Rules

| Rule | Action if Violated |
|------|-------------------|
| No `any`/`unknown` types | Use proper TypeScript types |
| Zero duplicate code | Create reusable functions/components |
| DB ops < 100ms | Optimize queries |
| Shadcn UI only | No other UI libraries |
| SEO optimized | Meta tags, semantic HTML |
| WCAG compliant | Accessibility patterns |

### UX Requirements (ADHD/Autistic Friendly)
- Clear, consistent navigation
- Minimal cognitive load
- Predictable interactions
- Visual clarity & hierarchy
- Proper focus management

---

## 📦 DEPENDENCY MANAGEMENT

**NEW PACKAGES = USER PERMISSION REQUIRED**

### Before `pnpm add`:

1. Check if functionality exists in current stack
2. Ask permission with justification:
   ```
   Need to add [package-name] for [functionality].

   Justification: [why current stack insufficient]
   Alternative considered: [what tried first]

   Permission to proceed?
   ```
3. Only install after approval

---

## 🗄️ DATABASE PROTOCOL

**BEFORE any database changes:**

```
1. Check database structure and schema
2. CREATE BACKUP → Export schema/data
3. Verify changes don't already exist
4. Confirm schema alignment
5. Implement changes
6. Verify changes remotely
```

---

## 📝 GIT STANDARDS

### Commit Format

```bash
type: description
```

**Types:** `feat`, `fix`, `refactor`, `docs`, `style`, `test`, `chore`

**Examples:**
```bash
git commit -m "feat: add user authentication"
git commit -m "fix: resolve root cause of navigation state bug"
git commit -m "refactor: split 600-line component into modules"
```

---

## 🖥️ DEV SERVER MANAGEMENT

**ALWAYS kill after work:**
```bash
# Kill any running dev servers
# Do not leave processes running
```

---

## 🔔 NOTIFICATIONS

**Task completion alerts:**
```bash
powershell.exe -c "[System.Media.SystemSounds]::Beep.Play()"
```

---

## ✅ CRITICAL RULES SUMMARY

### NEVER:
- ❌ Duplicate code/functions
- ❌ Non-Shadcn UI components
- ❌ Add dependencies without permission
- ❌ DB changes without backup
- ❌ Poor ADHD/Autistic UX patterns
- ❌ Quick patch bugs (find root cause)
- ❌ DB changes without proper verification
- ❌ Use `any` or `unknown` types
- ❌ Skip planning mode
- ❌ Assume task status beyond request

### ALWAYS:
- ✅ Read PLANNING_MODE.md first
- ✅ Kill dev servers after work
- ✅ Run build + lint before finish
- ✅ Create backups before DB changes
- ✅ Verify DB changes after implementation
- ✅ Mark subtasks progressively
- ✅ Follow exact status requested
- ✅ Get permission for new packages

---

## 🔍 DECISION FLOWCHARTS

### Should I Enter Planning Mode?

```
User request received
      ↓
   Bug report? ────────────────────→ YES → Planning Mode
      ↓ No
   Feature request? ────────────────→ YES → Planning Mode
      ↓ No
   Unexpected behavior? ────────────→ YES → Planning Mode
      ↓ No
   Modify existing code? ───────────→ YES → Planning Mode
      ↓ No
   Simple question/info? ───────────→ NO → Answer directly
```

### Which Agent Should Handle This?

```
Task identified
      ↓
   Involves UI changes?
      ↓ YES                    ↓ NO
   Frontend Agent      Involves API/backend?
                             ↓ YES              ↓ NO
                       Backend Agent     Involves DB?
                                            ↓ YES        ↓ NO
                                       Database Agent   Involves both?
                                                          ↓ YES         ↓ NO
                                                    Full-Stack Agent   Refactoring?
                                                                         ↓ YES      ↓ NO
                                                                   Refactoring    Testing?
                                                                    Agent           ↓
                                                                              Testing Agent
```

---

**Remember:** Smart orchestration = minimal context per agent, clean handoffs, respecting token budgets. Quality over quantity.
