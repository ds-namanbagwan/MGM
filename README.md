# MGM Timber Locator, Locations and Directory Pages

This repository provides React Powered Store and Locator with Directory site for the MGM Timber on the Yext Pages system.

## Getting Started

### Prerequisites

1. Have the Yext CLI installed: https://hitchhikers.yext.com/guides/cli-getting-started-resources/01-install-cli/
1. Have Deno installed, version 1.21.0 or later: https://deno.land/manual/getting_started/installation
1. Have node installed, version 17 or later: https://nodejs.org/en/download/

   - It's recommend to use nvm: https://github.com/nvm-sh/nvm#installing-and-updating or via brew `brew install nvm`

1. Have a Yext account (necessary for production builds, deploying on Yext Sites, and pulling local stream document data via `yext sites generate-test-data`). This starter already comes with some localData that can be used for local dev without the need to init with a Yext account.

### Clone this repo and install dependencies

```shell
git clone git@github.com:[Replace-with-repository-vendor]/[Replace-with-repository-name].git mgmtimber-pages
cd mgmtimber-pages
git checkout dm
npm install
```

### Useful commands

`yext init` - Authenticates the Yext CLI with your Yext account

`yext pages generate-test-data` - pull an example set of `localData` from your account

`yext pages build` - Runs a production build against your `localData`

`yext pages serve` - Runs a local server against your production-built files

`npm run dev` - runs your code against a local dev server using Vite

`npm run dev -- local` - same as above except instead of using files from `localData` it will pull the document from Yext on the fly

- It's recommended to `yext pages build` followed by `yext pages serve` before committing in order to test that a real production build won't have any issues. In practice, development builds (via `npm run dev`) and production builds compile and bundle assets differently. For local development, ES Modules are loaded directly by the browser, allowing fast iteration during local development and also allows for hot module replacement (HMR). Other things like CSS are also loaded directly by the browser, including linking to sourcemaps. During a production build all of the different files are compiled (via ESBuild for jsx/tsx) and minified, creating assets as small as possible so that the final html files load quickly when served to a user.

`npm run fmt` - Automatically formats all code

`npm run lint` - Run ESLint to check for errors and warnings

## Repository Layout

```
root
└───localData
└───sites-config
│   │   ci.json
└───src
│   │   index.css
│   │
│   └───components
│   │
│   └───templates
│       │   index.tsx
│       │   city.tsx
│       │   state.tsx
│       └───location.tsx
│   │
│   └───types
```

