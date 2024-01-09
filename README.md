# UI5 WCR Issue on Multiple Theme Provider instances

This project demonstrate the issue of multiple theme provider on UI5 WCR.

Reproduce step:

1. run `npm install` to install the dependencies
2. run `npm run serve` to run both the host and remote federated app
3. New browser tab should be opened visiting http://127.0.0.1:5100/
4. Click on the button `Show Message From Host!`, the first click is working but the following click will raise an exception:
```
Please make sure that your application is wrapped in the '<ThemeProvider />' component.
```

### On Windows env

Note the command `npm run serve` works on MacOS only, to run it on windows, please open two terminals and run the following commands in the two terminals:

```
npm run serve -w host
```

```
npm run serve -w remote
```