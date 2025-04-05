To install dependencies:

```bash
bun install
```

Paste your [api key](https://clickup.com/api/developer-portal/authentication#personal-token)

```bash
echo "API_KEY=pk_270672565_3RLW946LYPY7ML9Y9H11NZTW9SND5X5J" > .env
```

To run:

```bash
bun run index.ts export --baht 3 --start 2024-09-28 --end 2024-10-28
```
