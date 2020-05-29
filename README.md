# Napho

## Endpoint documentation 
- Auth /auth

Post /signup: 
> Body:
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  password: string; Must be between 8 & 20 characters and have 1 uppercase letter, 1 lowercase letter, 1 number and 1 especial character

Post /signin
> Body:
  email: string;
  password: string;

- Comments :photoId/comments

Get /
> Params:
  photoId: number;

Post /
> Params:
  photoId: number;

> Body: 
  content: string;

Patch /:id/status
> Params:
  photoId: number;
  id: number;

> Body:
  status: CommentStatus -- enum: pending, approved, rejected

- Photos /photos

Get /user/:id
  > Params:
  id: number;

Get /feed/:id

Get /search
> QueryParams:
  search: string;

Post /
> Body:
  photo: Photo -- {description: string, tags: string[], imageUrl: string}

Patch /:id/favorite
> Param:
  id: number

- Users: /users

Get /search
> QueryParams:
  search: string;

Get /:id/followers
> Params:
  id: number;

Get /:id/following
> Params:
  id: number;

Put /follow/:id
> Params:
  id: number;

Patch 
> Params:
  userBody: User;

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png" width="450"></p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/angular/getting-started/what-is-nx)

[Interactive Tutorial](https://nx.dev/angular/tutorial/01-create-application)

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are some plugins which you can add to your workspace:

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`
- [React](https://reactjs.org)
  - `ng add @nrwl/react`
- Web (no framework frontends)
  - `ng add @nrwl/web`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Express](https://expressjs.com)
  - `ng add @nrwl/express`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are sharable across libraries and applications. They can be imported from `@napho/mylib`.

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.
