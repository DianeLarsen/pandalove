---
title: "Building ClearTrack: A Client-Style Equipment Readiness Portal"
slug: "building-cleartrack-equipment-readiness-portal"
summary: "Starting a transparent, client-style portfolio build for clinic equipment readiness tracking."
publishedAt: "2026-08-20"
---

# Building ClearTrack: A Client-Style Equipment Readiness Portal

For my next portfolio project, I wanted to practice something closer to actual software work than following another tutorial: receiving a problem statement, deciding what belongs in the first release, and building the result from the ground up.

So I asked ChatGPT to act as a client and give me a realistic project brief. I will use Google, documentation, and normal developer research to solve implementation problems, but I am not asking for code or step-by-step build instructions. The goal is to show my own reasoning, research process, and execution—not stage a tiny AI puppet show and call it experience.

The project is called **ClearTrack Equipment Readiness Portal**. It is a fictional internal application for outpatient clinics that need to know whether shared equipment is ready to use, needs inspection, is under maintenance, or is out of service.

## The starting problem

Equipment readiness is often tracked in spreadsheets, paper logs, and the collective memory of the person who has been there longest. That works right up until it does not—usually when somebody needs an answer immediately.

ClearTrack’s first release will give clinic technicians, supervisors, and administrators a secure place to:

- see equipment assigned to a clinic;
- record readiness changes and inspections;
- find overdue or upcoming inspection work;
- review a traceable history of who changed what and when; and
- view a simple dashboard of operational readiness.

The project deliberately excludes patient data, device telemetry, purchasing, vendor management, and barcode hardware. Those are valid future features, but they are not an excuse to avoid finishing version one.

## What I plan to demonstrate

I chose this project because it creates room for the kind of work that comes up in software interviews and on engineering teams:

- Turning vague operational needs into user stories and a scoped release
- Designing relational data and business rules
- Building a responsive frontend and a server-side API
- Authentication, role-based access, and clinic-level authorization
- Filtering, pagination, validation, audit history, and useful error states
- Automated tests for important workflows and permission boundaries
- Git workflow, CI, deployment, documentation, and a project walkthrough

## How I will work

I am starting with a written brief rather than immediately opening an editor and seeing what catches fire. Before development, I will create user stories, basic wireframes, a data model, and a small delivery plan.

As I build, I will add notes here about decisions, research, bugs, tradeoffs, and changes in scope. I want the finished case study to show the work honestly: not just the polished end state, but how the application got there.

## What comes next

The first milestone is discovery and design: define the status rules, sketch the main screens, model the data, and choose the technical stack. Then I will build the smallest useful version and iterate from there.

I’ll update this post as ClearTrack develops.
