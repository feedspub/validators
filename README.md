# validators

A simple module(no dependency) to validate username, email and more for [Feeds Pub](https://feeds.pub).

Reusable on frontend and backend.

## Install

```bash
npm install validators
```

## Usage

```js
const { isEmail, isUsername, isPassword } = require('@feedspub/validators');

// true
isEmail('timqian@t9t.io');
isUsername('timqian');
isPassword('fidslde');
```

## Validating Rules

- email: `/\S+@\S+\.\S+/`
- username: `/^[a-zA-Z0-9\-\_]+$/`
- password: `length > 6`
