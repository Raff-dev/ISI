FROM python:3.10

ENV PYTHONUNBUFFERED 1

WORKDIR /app/

RUN apt-get update && apt-get install -y libpq-dev

RUN pip install poetry && \
    poetry config virtualenvs.create false --local

COPY ./pyproject.toml ./poetry.lock* /app/

RUN poetry install --only main

COPY . /app/

EXPOSE 8000

CMD ./entrypoint.sh
