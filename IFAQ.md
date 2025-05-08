# IFAQ (Infrequently Asked Questions)

## What is the structure of this project?

## How do I create a new component?

1. Run `pnpm generate` to create the boilerplate files. It will create a component folder, a Storybook file and a test file.
2. If you are using VSCode, you can make use of this project's code snippets. They are `sfc` (create single file component) and `vctx` (create new Vue context).

## What is Storybook and how is it used within this project?

We are using Storybook for 2 purposes:

1. Develop new components without the needs to create a Vue application.
2. Do visual regression testing in combination with [Chromatic](https://www.chromatic.com/).

In a Storybook file, we have a special story called `VisualTest`, which will list all variations and states for a particular component. This story will be used with Chromatic to help detecting unexpected visual changes during component updates.

## What does the `examples` folder do?

It contains a Vue Vite application, which can be used to get a feel of how this library will be used. You need to build the library with `pnpm core run build`.

## What is `changeset` and how does this project use it?

Changeset is a tool that makes it easier to create and publish new version of npm packages. (to be continued)

## Anything else I should know about?

1. `index.ts` files are used to specify public exports of a folder.
2. There are shortcuts for running npm scripts within other pnpm workspaces from the root directory.
   - `core`: Run scripts within `packages/core` (i.e `pnpm core run test`)
   - `dogfood`: Run scripts within `examples/dogfood` (i.e `pnpm dogfood run dev`)
3. The build output of the design system library not only include the built JS files, but also source map, source code, type declaration, type declaration map, so that library users can view the source code directly using their IDE `Go to definitions` feature.
