# GWAO Node.js Types

[![npm version](https://badge.fury.io/js/%40gctools-components%2Fgwao-nodejs-types.svg)](https://badge.fury.io/js/%40gctools-components%2Fgwao-nodejs-types)

This package contains types for the Google Workspace Add-ons for Alternate Runtimes API.

It is based on [google.apps.card.v1](https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.card.v1#index)

To my knowledge, there is no official package for the CardFramework json types yet. This package fills that gap.

### Tests

Since this is just a types library, I haven't added a testing framework. Instead, the `*.spec.ts` files provide a place to write example assignments using each type. We can then use IDE typechecking/typescript build in order to ensure the given types behave as expected.

In most cases, the assignments in the `*.spec.ts` files have been pulled straight from example JSON snippets within the official Google documentation.
