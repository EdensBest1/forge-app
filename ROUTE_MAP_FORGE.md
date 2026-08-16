# Forge Route Map

Generated: 2026-06-27 01:10 PDT

App root: /Users/andrewoommern/Documents/Codex/2026-06-14/this-chat-is-for-forge
Domain: https://hireonforge.com
Framework: static HTML/CSS/JS MVP with hash routes and clean alias shells.

| Route | Label / Purpose | Public Surface | Status | Notes |
|---|---|---|---|---|
| `/` | Forge homepage | public clean path | local 200 | Primary marketplace homepage. |
| `/contractors/` | Nationwide contractor hub | public clean path | local 200 | Contractor role, profile scope, trust states, focus markets, and controlled-beta boundaries. |
| `/markets/medford-or/` | Medford market | public clean path | local 200 | Medford and Southern Oregon focus-market content and prefilled intake links. |
| `/markets/los-angeles-ca/` | Los Angeles market | public clean path | local 200 | Los Angeles County focus-market content and prefilled intake links. |
| `/markets/new-york-ny/` | New York market | public clean path | local 200 | New York City focus-market content and prefilled intake links. |
| `#home` | home | public or demo route | wired by data-nav/hash router | Preserved service/category route. |
| `#services` | services | public or demo route | wired by data-nav/hash router | Preserved service/category route. |
| `#post` | post | public or demo route | wired by data-nav/hash router | Preserved service/category route. |
| `#signup` | signup | public or demo route | wired by data-nav/hash router | Preserved service/category route. |
| `#northstar` | northstar | public or demo route | wired by data-nav/hash router | Preserved service/category route. |
| `#legal` | legal | public or demo route | wired by data-nav/hash router | Preserved service/category route. |
| `#login` | login | public or demo route | wired by data-nav/hash router | Preserved service/category route. |
| `#status` | status | public or demo route | wired by data-nav/hash router | Preserved service/category route. |
| `#jobs` | jobs | public or demo route | wired by data-nav/hash router | Preserved service/category route. |
| `#manufacturing` | manufacturing | public or demo route | wired by data-nav/hash router | Preserved service/category route. |
| `#auto` | auto | public or demo route | wired by data-nav/hash router | Preserved service/category route. |
| `#forge-academy` | forge academy | public or demo route | wired by data-nav/hash router | Preserved service/category route. |
| `#building` | building | public or demo route | wired by data-nav/hash router | Preserved service/category route. |
| `#road-rescue` | road rescue | public or demo route | wired by data-nav/hash router | Preserved service/category route. |
| `#creative` | creative | public or demo route | wired by data-nav/hash router | Preserved service/category route. |
| `#capital` | capital | public or demo route | wired by data-nav/hash router | Preserved service/category route. |
| `#personal-driver` | personal driver | public or demo route | wired by data-nav/hash router | Preserved service/category route. |
| `#payments` | payments | public or demo route | wired by data-nav/hash router | Preserved service/category route. |
| `#local-products` | local products | public or demo route | wired by data-nav/hash router | Preserved service/category route. |
| `#trade-pathways` | trade pathways | public or demo route | wired by data-nav/hash router | Preserved service/category route. |
| `#projects` | projects | public or demo route | wired by data-nav/hash router | Preserved service/category route. |
| `#homebuilding` | homebuilding | public or demo route | wired by data-nav/hash router | Preserved service/category route. |
| `#capture` | capture | operator/internal hidden or role-gated | wired by data-nav/hash router | Preserved service/category route. |
| `#admin` | admin | operator/internal hidden or role-gated | wired by data-nav/hash router | Not visible unless admin role/public-mode controls allow it. |
| `#admin-projects` | admin projects | operator/internal hidden or role-gated | wired by data-nav/hash router | Not visible unless admin role/public-mode controls allow it. |
| `#admin-building-leads` | admin building leads | operator/internal hidden or role-gated | wired by data-nav/hash router | Not visible unless admin role/public-mode controls allow it. |
| `#homebuilding-tracker` | homebuilding tracker | public or demo route | wired by data-nav/hash router | Preserved service/category route. |
| `#worker` | worker | public or demo route | wired by data-nav/hash router | Preserved service/category route. |
| `#bid` | bid | public or demo route | wired by data-nav/hash router | Preserved service/category route. |
| `#messages` | messages | public or demo route | wired by data-nav/hash router | Preserved service/category route. |
| `#profile` | profile | public or demo route | wired by data-nav/hash router | Preserved service/category route. |
| `#reports` | reports | operator/internal hidden or role-gated | wired by data-nav/hash router | Preserved service/category route. |
| `#demo` | demo | public or demo route | wired by data-nav/hash router | Preserved service/category route. |
| `/privacy/` | Privacy | clean public path | local 200 | Alias shell maps to legal screen. |
| `/terms/` | Terms | clean public path | local 200 | Alias shell maps to legal screen. |
| `/safety/` | Safety | clean public path | local 200 | Alias shell maps to legal screen. |

## Public Functionality Notes

- Post a Job, Join as Contractor, Browse Services, For Businesses, Safety, and Log In / Admin CTAs are wired through `data-nav` or clean public paths.
- Nationwide intake supports every state and Washington, D.C.; Medford, Los Angeles, and New York are focus markets, not guaranteed coverage areas.
- Existing service categories and clean alias shells are preserved.
- Clean `/privacy/`, `/terms/`, and `/safety/` paths now route to the existing legal/safety screen.
- Admin controls use public-mode and role-gate classes; direct admin screens remain demo/protected surfaces, not public homepage tools.
