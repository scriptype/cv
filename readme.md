# CV

See: https://enes.in/cv
For pdf version: https://enes.in/cv?pdf

## Setup

```sh
npm i && npm start
```

## Generate PDF

Run this in a separate shell:

```sh
npm run pdf
```

## Preview

html: http://localhost:8888
pdf: http://localhost:8888?pdf

### Deploy to Google Drive

By default, `Google Drive` folder is expected to be in user home folder (`~`).
However, there are npm scripts for `echo`ing path for Google Drive and name of
the output file. Change these fields if needed (Be careful with backslashes).

```sh
npm run deploy
```
