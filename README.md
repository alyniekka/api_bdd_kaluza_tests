## Getting started

First, install all dependencies:

```bash
npm install
```

Add your api tokens: 
- Request tokens from https://api-portal.tfl.gov.uk/product#product=2357355709892
- Assign tokens to APP_ID and APP_KEY in src/utils/config.ts

Tokens required to make requests to the https://api.tfl.gov.uk/

Now, time to run tests:
```bash
npm run test
```

And to generate html report:
```bash
npm run report
```
