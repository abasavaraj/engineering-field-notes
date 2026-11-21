---
title: A document is evidence, not an instruction
slug: document-is-evidence-not-instruction
description: Why finding a document should not silently change what an agent is allowed to do.
authors: [avinash]
tags: [ai-agents, knowledge, architecture]
---

A team's knowledge collection might contain a published guide, a draft policy, a meeting note, and a discussion about an exception. Search can return all four. That does not mean an agent should treat all four as directions for what to do.

This is the distinction I want to preserve: **a source can help answer a question without having authority to change an agent's job.**

{/* truncate */}

## Search finds candidates

Imagine a fictional support agent asked whether a customer can use a particular feature. It finds a current help article saying the feature is available, plus an older discussion suggesting a workaround for a limited rollout.

Both results are useful evidence. The help article may support an answer; the discussion may signal that applicability needs checking. Neither should silently rewrite the agent's instructions. If the evidence is incomplete or contradictory, the agent should say so rather than pick the most confident-sounding passage.

The same principle applies to text *inside* a retrieved document. A page that says "ignore previous instructions" is still source content, not a command to the agent.

## Authority needs a separate path

An agent's instructions should define its task, permitted sources, output requirements, and what to do when evidence is weak. Changing those instructions is a deliberate act, not a side effect of indexing a document.

That does not make the knowledge collection static. A new guide can become eligible evidence. A corrected policy can replace an outdated version. A reviewer can propose a change to how an agent handles a recurring case. But each change needs a path that makes its status and effect clear.

For a consequential result, I would want to inspect three things: **what the agent was asked to do, which source passages it used, and which approved instructions applied at the time.** Without that separation, a good answer is hard to reproduce and a bad one is hard to correct.

## The practical test

When adding a source to shared knowledge, ask: *Can people and agents find this?* Then ask a different question: *May this source govern an agent's behavior?*

Those answers will not always be the same. Keeping them separate lets teams make more knowledge discoverable without making every document an instruction.

*This article uses invented examples and describes a design principle, not a deployed system.*
