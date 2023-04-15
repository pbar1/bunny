# Bunny

Minimal browser shortcut engine (ie, yet another Bunnylol clone)

## Features

- Hostable in GitHub Pages
- Implemented on the client side

## Setup

Add a custom search engine to your browser with the following as the URL,

```
https://pbar1.github.io/bunny/cmd?q=%s
```

where the `%s` string is a literal, and will be used by the browser to inject
queries.

## Commands

Available commands are listed in [`command.ts`](/src/data/command.ts).

The goal is for commands to be user-defined and stored in browser local
storage.
