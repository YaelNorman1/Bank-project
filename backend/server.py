from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from routers.transactions_route import transactions_route


app = FastAPI()
app.include_router(transactions_route.router)

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return "Server On"

if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8080, reload=True)