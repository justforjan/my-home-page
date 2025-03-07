FROM ghcr.io/astral-sh/uv:python3.13-bookworm-slim

WORKDIR /backend

COPY pyproject.toml uv.lock ./

RUN uv sync --frozen

COPY main.py .
COPY app ./app

EXPOSE 8000

CMD ["uv", "run", "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
