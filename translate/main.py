from fastapi import FastAPI
from fastapi.responses import RedirectResponse
from googletrans import Translator
from pydantic import BaseModel

app = FastAPI()


class TranslateRequest(BaseModel):
    text: str
    from_lang: str = "en"
    to_lang: str = "pl"


@app.post("/translate")
def translate(request: TranslateRequest):
    translator = Translator()
    translation = translator.translate(request.text, src=request.from_lang, dest=request.to_lang)
    return {"text": translation.text}


@app.get("/")
def redirect_to_docs():
    return RedirectResponse(url="/docs")
