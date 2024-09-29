/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ContactImport } from './routes/contact'
import { Route as AboutImport } from './routes/about'
import { Route as ProfileIndexImport } from './routes/profile/index'
import { Route as ListIndexImport } from './routes/list/index'
import { Route as ListListIdImport } from './routes/list.$listId'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const ContactRoute = ContactImport.update({
  path: '/contact',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const ProfileIndexRoute = ProfileIndexImport.update({
  path: '/profile/',
  getParentRoute: () => rootRoute,
} as any)

const ListIndexRoute = ListIndexImport.update({
  path: '/list/',
  getParentRoute: () => rootRoute,
} as any)

const ListListIdRoute = ListListIdImport.update({
  path: '/list/$listId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/contact': {
      id: '/contact'
      path: '/contact'
      fullPath: '/contact'
      preLoaderRoute: typeof ContactImport
      parentRoute: typeof rootRoute
    }
    '/list/$listId': {
      id: '/list/$listId'
      path: '/list/$listId'
      fullPath: '/list/$listId'
      preLoaderRoute: typeof ListListIdImport
      parentRoute: typeof rootRoute
    }
    '/list/': {
      id: '/list/'
      path: '/list'
      fullPath: '/list'
      preLoaderRoute: typeof ListIndexImport
      parentRoute: typeof rootRoute
    }
    '/profile/': {
      id: '/profile/'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof ProfileIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/about': typeof AboutRoute
  '/contact': typeof ContactRoute
  '/list/$listId': typeof ListListIdRoute
  '/list': typeof ListIndexRoute
  '/profile': typeof ProfileIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/about': typeof AboutRoute
  '/contact': typeof ContactRoute
  '/list/$listId': typeof ListListIdRoute
  '/list': typeof ListIndexRoute
  '/profile': typeof ProfileIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/about': typeof AboutRoute
  '/contact': typeof ContactRoute
  '/list/$listId': typeof ListListIdRoute
  '/list/': typeof ListIndexRoute
  '/profile/': typeof ProfileIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/about'
    | '/contact'
    | '/list/$listId'
    | '/list'
    | '/profile'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about' | '/contact' | '/list/$listId' | '/list' | '/profile'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/contact'
    | '/list/$listId'
    | '/list/'
    | '/profile/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  AboutRoute: typeof AboutRoute
  ContactRoute: typeof ContactRoute
  ListListIdRoute: typeof ListListIdRoute
  ListIndexRoute: typeof ListIndexRoute
  ProfileIndexRoute: typeof ProfileIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  AboutRoute: AboutRoute,
  ContactRoute: ContactRoute,
  ListListIdRoute: ListListIdRoute,
  ListIndexRoute: ListIndexRoute,
  ProfileIndexRoute: ProfileIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/contact",
        "/list/$listId",
        "/list/",
        "/profile/"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/contact": {
      "filePath": "contact.tsx"
    },
    "/list/$listId": {
      "filePath": "list.$listId.tsx"
    },
    "/list/": {
      "filePath": "list/index.tsx"
    },
    "/profile/": {
      "filePath": "profile/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
