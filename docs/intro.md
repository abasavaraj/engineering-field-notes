---
id: intro
title: Start here
sidebar_position: 1
---

# Engineering notes

This is a personal collection of technical ideas about integration engineering, AI systems, and reusable design patterns.

The examples are fictional. These notes do not describe an employer's systems, customers, policies, or roadmap.

## Writing areas

- **AI systems:** shared knowledge, agent-specific context, evidence, and human review.
- **Integration engineering:** service contracts, identity boundaries, reliability, and operational handoffs.
- **Design patterns:** reusable approaches and the tradeoffs behind them.

The [first essay](../blog/shared-knowledge-agent-context) explores one AI-systems question: how a team's searchable knowledge differs from the context an agent needs for a specific job. Future articles can grow into the other areas without changing this site's structure.

## A useful starting model for agent context

- **Shared knowledge** is material a team can search and inspect.
- **Agent context** is the smaller, task-specific set of instructions and eligible knowledge an agent can use for a particular job.
- **Evidence** lets a person trace an answer or decision back to its source.
- **Review** is how proposed corrections become trusted changes rather than silent edits.

These are design concepts, not a claim that one architecture fits every organization. The right boundaries depend on privacy, permissions, freshness, and the cost of getting an answer wrong.

## Reading path

Start with the [blog](../blog/) for essays and design questions. This notes section will hold shorter definitions, diagrams, and reproducible examples as they are written.
