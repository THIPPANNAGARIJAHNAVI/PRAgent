from fastapi import FastAPI

app = FastAPI()

@app.post("/add")
def add(a: int, b: int):
    return {"result": a + b}
