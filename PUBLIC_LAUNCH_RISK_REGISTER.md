# Public Launch Risk Register

Generated: 2026-06-27 01:10 PDT

## 2026-06-27 06:25 PDT Addendum

- **Admin exposure:** improved locally by turning public mode on by default, renaming public login text, and hiding the admin demo login card from non-admin display. Must be rechecked after deployment.
- **Legal documents:** binder templates created, but attorney review is required before external use.
- **Money movement:** no direct fund holding or payout flow is approved; money-control docs now document dual approval, callback verification, and payment partner review requirements.
- **Impact claims:** public numbers remain placeholder-only until verified source records exist.
- **Deployment:** not deployed. Andrew approval is required before production deployment.

| Risk | Status | Mitigation / Next Action |
|---|---|---|
| Production admin auth incomplete | Open | Keep admin/demo controls hidden/gated; implement hosted auth/RBAC before broad public launch. |
| Static app cannot enforce true rate limiting | Open | Add server/API rate limits before public backend intake. |
| Provider license/insurance overclaim risk | Controlled | Copy uses admin-reviewed/pending language and tells users to verify identity, license, insurance, pricing, and scope. |
| Emergency-service misconception | Controlled | Road Rescue and safety copy direct users to call 911 for emergencies and avoid guaranteed response claims. |
| Forge CSP inline style allowance | Open | Documented; move dynamic progress/gantt styles to CSS variables/classes before removing `unsafe-inline`. |
| Google Drive permission verification | Pending | Drive is not mounted locally; archive will be staged for manual private upload and UI permission review. |
