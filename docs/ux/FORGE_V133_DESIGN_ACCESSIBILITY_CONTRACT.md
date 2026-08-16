# Forge v133 Design and Accessibility Contract

Date: 2026-08-15

## Public visual direction

Forge is welcoming, spacious, practical, and primarily white. The homepage is an orientation layer, not a compressed catalog. It keeps two primary hero actions: Post a Job and Join as a Worker. Broader product lanes remain available through calm hubs and progressive disclosure.

## Token contract

- Surface: white primary surface with a subtle soft surface for contained grouping
- Text: near-black primary text and readable muted text
- Accent: restrained Forge blue for trust/navigation and Forge orange for high-intent action
- State colors: named success, warning, unavailable, rejected, and error values
- Spacing: consistent steps from space-1 through space-8
- Width: separate reading and wide-content measures
- Radius: reusable control/card radii
- Touch: minimum 44 px interactive target
- Focus: visible high-contrast focus ring independent of color alone

## Layout contract

- Do not place dense operator dashboards on public routes.
- Avoid walls of cards and repeated calls to action.
- Keep reading lines bounded and page sections separated by visible whitespace.
- Preserve meaningful heading order and one clear page purpose.
- Prevent horizontal page overflow at narrow widths.
- Provide intrinsic image dimensions to reduce layout shift.
- Use AVIF where supported while retaining local PNG fallbacks.
- Avoid motion that is required to understand or operate the interface.

## Interaction contract

- All controls are keyboard reachable and have visible focus.
- Escape closes dismissible overlays without losing the user's work.
- Dialog close returns focus to a sensible trigger or next control.
- Touch targets are at least 44 x 44 CSS pixels when visible.
- Forms retain explicit labels, required-state communication, purpose hints, and human-readable errors.
- Status is not conveyed by color alone.
- Error/retry/offline states provide a direct next step.
- Browser zoom and text reflow must not hide actions or create two-dimensional scrolling for normal content.

## Motion and media

prefers-reduced-motion disables smooth scrolling and nonessential animation/transition behavior. Decorative media is lazy-loaded; the primary hero image may load eagerly. Images include alternative text and explicit dimensions.

## Release verification matrix

Required browser sizes:

- 390 x 844 phone
- 768 x 1024 tablet
- 1024 x 768 compact desktop
- 1440 x 900 desktop

Required journeys:

- customer: home to request form, local save, truthful delivery state, recovery/cancel/retry
- worker: home to signup, local save, marketplace/profile status
- business: home to business hub and Capital Desk
- operator fence: direct admin/capture/reports/monetization-admin remains unavailable publicly
- route failure: offline and route-shell mismatch expose an accessible retry and home action

Every release run records overflow, console errors, landmark/heading presence, focus behavior, touch sizes, and reduced-motion behavior. Passing automated checks is necessary but does not replace final visual review.
