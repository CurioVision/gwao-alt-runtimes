# GWAO Node.js Types

[![npm version](https://badge.fury.io/js/@curiovision%2Fgwao-nodejs.svg)](https://badge.fury.io/js/@curiovision%2Fgwao-nodejs)

---

This package contains TypeScript types for the Google Workspace Add-ons for Alternate Runtimes API. To my knowledge, there is no official package for the Google Workspace Add-ons for Alternate Runtimes API. This package fills that gap.

There are two main types of exports:

- Cards (see [RenderActions](./src/cards/v1/RenderActions.ts))
  - Based on [google.apps.card.v1](https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.card.v1#index)
- Events (see [EventObject](./src/events/EventObject.ts))
  - Based on [_Google Workspace Add-ons for Alternate Runtimes_ Event JSON Schemas](https://developers.google.com/workspace/add-ons/guides/alternate-runtimes#json_event_objects)

TODO: Organize exports to delineate Cards vs Event exports (bonus, also delineate v1 cards in anticipation of a v2 from Google.)

## Development

### Building

To build, run `npm run build`. You can also run `npm run build:watch` to automatically rebuild the code whenever changes are made.

### Tests

Since this is just a types library, I haven't added a testing framework. Instead, the `*.spec.ts` files provide a place to write example assignments using each type. We can then use IDE typechecking/typescript build in order to ensure the given types behave as expected.

In most cases, the assignments in the `*.spec.ts` files have been pulled straight from example JSON snippets within the official Google documentation.

### Publishing to NPM

This repository is setup with a Github Action to automatically publish to NPM for every tagged release. To use it, run:

1. `npm version [minor|patch]`
2. `git push`
3. `git push --tags`
