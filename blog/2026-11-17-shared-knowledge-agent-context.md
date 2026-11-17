---
title: Shared knowledge is not agent context
slug: shared-knowledge-agent-context
description: A practical way to think about the boundary between a team's information and an agent's job.
authors: [avinash]
tags: [ai-agents, knowledge, architecture]
---

Imagine a support team with a searchable collection of product guides, meeting notes, and resolved questions. A person can browse the collection and decide what is relevant. An agent asked to classify a new request needs something more specific: its job, the allowed categories, the sources it may use, and what to do when the evidence is weak.

The collection is **shared knowledge**. The smaller set of instructions and eligible knowledge for that job is **agent context**. Treating them as the same thing makes it too easy for a plausible-looking source to become an instruction.

{/* truncate */}

## The boundary matters

Shared knowledge changes for many reasons. A draft is added. Someone corrects a page. A discussion captures an idea that never becomes policy. Search should make those materials discoverable, but discovery alone does not make them authoritative.

An agent needs a narrower contract. At a minimum, I would want to know:

1. What job is this agent performing?
2. Which instructions define a valid result?
3. Which source versions are eligible for this job and this user?
4. What should happen when the available evidence is contradictory or insufficient?
5. Who can review a proposed change to this contract?

The answers can be stored in different ways. The important part is that they are explicit, inspectable, and tied to a version of the work.

## A fictional example

Suppose a team has two agents. One classifies incoming questions into a small set of categories. Another drafts an answer from published help articles. Both can use the team's shared knowledge, but they should not inherit identical instructions or source access.

The classifier needs the current category definitions and examples of borderline cases. The answer agent needs approved guidance and a way to cite the passage it used. A brainstorming note might be useful to a human researcher, yet inappropriate as evidence for either agent's final result.

If a reviewer spots a bad classification, the correction should not instantly rewrite the active rules. The reviewer can propose a change, test it against representative examples, and publish a new approved version. A later run can then say which version it used.

## What I would measure

Before adding more knowledge, I would measure whether agents find the right evidence, respect access boundaries, and know when to abstain. I would also test whether a correction improves the cases it targets without breaking cases that already work.

The goal is not to make every agent remember everything. It is to give each agent enough trustworthy context to do its job and to leave a clear path for people to understand and improve the result.

*This article uses invented examples and describes general design ideas, not a deployed system.*
