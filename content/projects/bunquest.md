---
title: BunQuest
slug: bunquest
status: In progress
description: A playful Android quest app that adapts small daily goals and encouragement to a person’s energy, mood, and real-life constraints.
featured: true
stack:
  - React Native
  - Expo
  - TypeScript
  - Android
---

## The problem

Most habit apps assume a person has the same motivation, capacity, and attention every day. Human beings have inconveniently declined to cooperate with that premise.

BunQuest is designed for the days when a tiny, specific next step is more useful than a streak counter yelling from the corner. It turns daily tasks into gentle quests and adapts its tone and suggestions through a rotating cast of “bun” personas.

## What I am building

The app is an Expo/React Native Android application with a daily quest feed, a quest board, character selection, and a profile. Different personas offer different kinds of support:

- **Moonbun** for quiet, drained days and tiny private wins.
- **Emberbun** for moody, defiant “do it out of spite” energy.
- **Sparkbun** for connection and adventure.
- **Mossbun** for anxious, overwhelmed, step-by-step support.
- **Honeybun** for nurturing home and care tasks.
- **Bolt Bun** for focused challenge and momentum.

## Core interactions

- Choose a bun intentionally, reuse yesterday’s bun, pick a random one, or answer a short “what do I need today?” check-in.
- Create custom quests with notes, subtasks, rescheduling, and recurrence.
- Let ordinary quests complete with one tap while custom quests open a detail view for editing and reflection.
- Gradually collect profile details so suggestions become more relevant without turning onboarding into a hostage situation.
- Keep rewards optional and adjustable for difficult days.

## Engineering focus

- Mobile navigation and state management with Expo Router and TypeScript.
- Reusable quest-detail UI and interaction rules.
- A data model that can support recurrence, rescheduling, notes, subtasks, and personalized suggestions.
- Designing adaptive product behavior without punishing users for missed days.
- Future support-friend features that favor transparent, gentle check-ins over guilt and surveillance.

## Why it matters

BunQuest is a product-design project as much as a mobile-development project. The hard part is not drawing a cute bun. It is deciding how software can encourage action without becoming another demand on an overwhelmed person.

## Next steps

Finish the profile and quest data model, resolve the custom-quest edit/delete flow, then build daily selection and adaptive quest suggestions before adding notifications or support-friend features.
