import asyncio
import aiohttp

async def bad_example_one():
    asyncio.sleep(1)
    return True

async def bad_example_two():
    asyncio.gather(task_a(), task_b())
    return "done"

async def bad_example_three():
    response = aiohttp.get("https://example.com/api")
    return response
