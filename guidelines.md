# Code Review Guidelines

This file should be placed in your repository at `.github/CODE_REVIEW_GUIDELINES.md`

## General Principles

### Code Quality
- Follow SOLID principles
- Write self-documenting code with clear variable and function names
- Prefer composition over inheritance
- Keep functions small and focused (maximum 50 lines per function)
- Maximum file length: 500 lines

### Security
- **CRITICAL**: Never commit secrets, API keys, passwords, or tokens
- Validate all user inputs
- Use parameterized queries for database operations
- Sanitize data before displaying to users
- Check for SQL injection vulnerabilities

### Error Handling
- Always handle exceptions properly
- Never use bare `except:` clauses
- Provide meaningful error messages
- Log errors appropriately

### Performance
- Avoid N+1 queries in database operations
- Use lazy loading where appropriate
- Cache expensive computations
- Avoid unnecessary loops and iterations

## Python Specific Guidelines

### Style
- Follow PEP 8 style guide
- Use type hints for function signatures
- Maximum line length: 100 characters
- Use meaningful variable names (avoid single letters except for loop counters)

### Code Structure
- Import statements should be at the top of the file
- Group imports: standard library, third-party, local imports
- Use `if __name__ == "__main__":` for executable scripts
- Functions should have docstrings

### Best Practices
- Use list comprehensions instead of loops when appropriate
- Prefer `with` statements for file operations
- Use `enumerate()` instead of range(len())
- Don't use `==` to compare with `None`, use `is None` instead

### Testing
- All new functions must have unit tests
- Test coverage should be > 80%
- Include edge cases in tests
- Test both success and failure scenarios

## Code Smells to Flag

- Magic numbers (use named constants)
- Duplicate code (DRY principle)
- Long parameter lists (use data classes or dictionaries)
- God classes (classes doing too much)
- Dead code (unused imports, variables, functions)

