---

date: "2026-09-09"

type: "progress"

title: "Defined Free and Home plan boundaries"

---

## Goal

Turn InventoryImp’s growing receipt and planning features into a clear Free and Home plan model.

## Plan

* Separate free inventory entry from AI-assisted receipt parsing.
* Define which receipt workflows belong to InventoryImp Home.
* Add locked Home-only controls for AI receipt photo and pasted-receipt parsing.
* Keep structured list import, product search, and manual entry available on the Free plan.
* Add clear plan messaging to the dashboard and intake experience.
* Verify sign-up and Google sign-in flows after adding dedicated Clerk routes.

## Completed

* Defined the Free plan around manual entry, product search, barcode lookup, and structured grocery-list import.
* Defined InventoryImp Home around AI receipt-photo scanning, pasted receipt parsing, recipe suggestions, and grocery planning.
* Updated intake behavior so receipt photo and pasted-receipt options can be gated by the `ai_receipt_parsing` Clerk feature.
* Added locked-state messaging that routes Free users to pricing instead of allowing them into an unavailable AI workflow.
* Updated dashboard messaging to distinguish Free inventory tools from Home planning features.
* Added dedicated Clerk sign-in and sign-up routes.

## In progress

* Verifying Google sign-in and sign-up redirects.
* Enforcing the same AI entitlement in the server-side receipt-processing action.
* Finishing the plan-aware dashboard state for Home subscribers.
