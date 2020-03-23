# validators

A simple module(no dependency) to validate username, email and more for [Feeds Pub](https://feeds.pub)

## Install

```bash
npm install validators
```

## Usage

```js
const { isEmail, isUsername } = require('@feedspub/validators');

// true
isEmail('timqian@t9t.io');
isUsername('timqian')
```