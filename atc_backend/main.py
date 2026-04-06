from fastapi import FastAPI

app = FastAPI(title="AthletesToChampions API")

@app.get("/")
def read_root():
    return {"message": "Welcome to AthletesToChampions API"}

@app.get("/health")
def health_check():
    return {"status": "healthy"}
