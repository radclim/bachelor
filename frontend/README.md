[/../README](../README.md)

# Limbo Frontend Boilerplate Guide

> Limbo boilerplate build upon nuxt3+

For detailed explanation on how Nuxt works, check out [Nuxt docs](https://nuxt.com).

---

## This Solution

[ADD INFORMATION FOR THE FRONTEND OF THE SPECIFIC SOLUTION]

## Solution Development

### Prerequisites

-   yarn classic (version 1.22.x or newer)
-   nvm
-   node 18.18.1

### Preparations

Make sure to add a `.env` file to the root of the frontend folder, pointing at the proper app host and api domain, fx.:

```env
NUXT_PUBLIC_API_DOMAIN=https://dev-0000xx-be.testserver.nu/
NUXT_PUBLIC_APP_HOST=dev-0000xx-fe.testserver.nu
```

### Initiation

````bash
# Change node version
$ nvm use 		# for macs
$ npm run nvm 		# for windows


### Development

With `yarn start` it is necessary to run `yarn build` in order to see changes made since last `yarn build` was executed.

```bash
# start local server in DEV mode with HMR
$ yarn dev

# build for PROD
$ yarn build

# start local server in PROD mode
$ yarn start
````

### Development

[NOTES ON DEVELOPMENT]
