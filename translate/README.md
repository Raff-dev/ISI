# ISI

A simple app that uses the Google Translate API to translate text from any language to another.

## Features

- Translate text from any language to another
- FastAPI endpoint for easy integration into other apps
- Dockerized for easy deployment

## Prerequisites

- Python 3.10+
- Docker and Docker Compose

## Installation

To install the app, follow these steps:

```bash
# Build the app using Docker Compose
docker-compose up --build
```

## API Usage

View the docs at [localhost:8000/docs](localhost:8000/docs).

To translate text from English to Polish, send a POST request to the /translate endpoint with the text to be translated in the request body. The response will contain the translated text.

```bash
curl -X POST -H "Content-Type: application/json" -d '{"text": "Hello world!"}' http://localhost:8000/translate
```

