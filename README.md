# Emotion 11 Simple App

This is a simple emotion 11 app replicating the create-react-app starting template. Use this if you
need a simple app to test the browser extension issue found at
[craigsketchley/emotion-11-extension](https://github.com/craigsketchley/emotion-11-extension).

It's important the app is run in production mode to reproduce the clashing with the emotion 11
browser extension.

## Run

To run the app (in production mode):

```bash
npm i && npm start
```

If you install the [browser extension](https://github.com/craigsketchley/emotion-11-extension) then
you should encounter the issue where the extension strips a lot of the styles from the in-page app.
