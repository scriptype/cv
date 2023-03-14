# CV

## Setup

```sh
$ node -v
v6.10.2
```

```sh
$ npm -v
3.10.10
```

Run:

```sh
npm install && npm start
```

An http server will start at localhost:8080.

### Generate new CV and publish it into Google Drive

By default, `Google Drive` folder is expected to be in user home folder (`~`).
However, there are npm scripts for `echo`ing path for Google Drive and name of
the output file. Change these fields if needed (Be careful with backslashes).

```sh
npm run deploy
```

### Generate pdf, only to check how it looks

```sh
npm run pdf
```
