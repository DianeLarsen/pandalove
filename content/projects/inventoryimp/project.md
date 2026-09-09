---

title: InventoryImp
slug: inventoryimp
status: In progress
description: A grocery inventory app that helps households track what they have, add items quickly, and build toward smarter meal and grocery planning.
featured: true
stack:
  - Next.js
  - TypeScript
  - React
  - Clerk
  - Prisma
  - PostgreSQL
  - Tailwind CSS
---

## The problem

Household grocery inventory usually lives in three unreliable places: a half-remembered mental list, the back of the refrigerator, and a cabinet where something expired during a previous presidential administration.

InventoryImp is designed to make inventory tracking practical enough to use between real grocery trips. It gives people a clear view of what they own, simple ways to add items, and a path toward meal and grocery planning based on actual inventory.

## What I am building

InventoryImp is a Next.js application for managing household grocery inventory.

The Free plan focuses on the core inventory loop:

* Search for packaged products by name or barcode.
* Add produce, bulk items, and pantry items manually.
* Import a structured grocery list for review before saving.
* Track quantities, categories, locations, product details, and purchase history.

InventoryImp Home adds AI-assisted household planning features:

* Scan a receipt photo to create an editable item draft.
* Paste receipt text or a grocery list for AI-assisted parsing.
* Generate recipe suggestions from tracked ingredients.
* Build grocery plans from low-stock items and planned meals.

## Core interactions

* Review imported or parsed items before anything is saved.
* Add new products, update quantities, or merge an item into existing inventory.
* Use manual entry for the ordinary, messy reality of produce and bulk groceries.
* See Free and Home features clearly rather than discovering a limitation only after doing the work.
* Route users to pricing when they select an AI feature that requires InventoryImp Home.

## Engineering focus

* Next.js App Router, TypeScript, and responsive Tailwind UI.
* Clerk authentication, including dedicated sign-in and sign-up routes.
* Clerk feature entitlements to distinguish Free and Home capabilities.
* Prisma and PostgreSQL data modeling for inventory items, quantities, and purchase history.
* Product search through barcode and food-data sources.
* Receipt-import workflows that validate data and require human review before saving.

## Why it matters

The interesting part of InventoryImp is not inventory CRUD by itself. It is designing a tool that remains useful when groceries are purchased in a hurry, labels are inconsistent, quantities are approximate, and nobody wants to spend Sunday evening doing database administration for cheese.

The Free/Home split is also intentional: basic inventory tracking stays accessible, while AI-assisted receipt parsing and household planning are clearly presented as higher-value features with real operating costs.

## Next steps

Finish and verify the Free/Home entitlement flow, enforce AI access in the server-side receipt-processing action, stabilize Google sign-in redirects, then build the first recipe-suggestion and grocery-planning workflows.
