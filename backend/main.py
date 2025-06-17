### === main.py ===
from fastapi import FastAPI
from routes import search, integration, health, compose, review, categories
from fastapi.middleware.cors import CORSMiddleware
import os
from dotenv import load_dotenv

app = FastAPI()
frontend = os.os.environ.get("frontend_url")

# Add this middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=[frontend],  # <-- your frontend origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routes
app.include_router(search.router)
app.include_router(integration.router)
app.include_router(health.router)
# app.include_router(compose.router)
app.include_router(review.router)
app.include_router(categories.router)

@app.get("/")
def root():
    return {"message": "Welcome to APIVerse backend"}
