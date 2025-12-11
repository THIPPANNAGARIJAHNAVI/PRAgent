A. Security

Do NOT log sensitive data (passwords, tokens, emails).

Never hardcode API keys or secrets.

Do not fetch sensitive data (like all users).

Use POST for credentials, not GET with query params.

Sanitize user inputs before sending to server.

B. React Best Practices

Always initialize state properly.

Never mutate state directly.

Avoid inline functions in JSX where avoidable.

Always use type="password" for password fields.

Use environment variables for API URLs.

Add error handling to fetch calls.

Don’t use useEffect without a dependency array when needed.

C. Performance

Do not perform API calls on every render.

Avoid unnecessary rerenders.

Prefer memoization (useMemo, useCallback) for heavy operations.

Do not use large inline objects in JSX.

D. Code Quality

Use clear variable names.

Avoid magic numbers or strings.

Break large components into smaller ones.

Remove unused imports and dead code.

Add comments where needed for clarity.
