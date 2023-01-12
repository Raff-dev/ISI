import requests
from drinks.models import DrinkEnquiry
from rest_framework import serializers

API_URL = "http://mule:8081/getDrinkByIdInGivenLanguage/"


class DrinkEnquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = DrinkEnquiry
        fields = "__all__"


class DrinkRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = DrinkEnquiry
        fields = ["username", "drink_id", "to_lang"]

    def create(self, validated_data):
        drink_id = validated_data["drink_id"]
        to_lang = validated_data["to_lang"]

        response = requests.get(
            API_URL,
            data={
                "id": drink_id,
                "to_lang": to_lang,
            },
        )

        print(response.status_code)
        response_data = {}

        if response.status_code == 200:
            response_data = response.json()["drinks"]
            if response_data:
                response_data = response_data[0]
                response_data = {key: value for key, value in response_data.items() if value}
        else:
            response_data = sample_data

        return DrinkEnquiry(
            drink_id=drink_id,
            to_lang=to_lang,
            username=validated_data["username"],
            request_valid=bool(response_data),
            data=response_data,
        )


sample_data = {
    "drinks": [
        {
            "idDrink": "11007",
            "strDrink": "Margarita",
            "strDrinkAlternate": None,
            "strTags": "IBA,ContemporaryClassic",
            "strVideo": None,
            "strCategory": "Ordinary Drink",
            "strIBA": "Contemporary Classics",
            "strAlcoholic": "Alcoholic",
            "strGlass": "Cocktail glass",
            "strInstructions": "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
            "strInstructionsES": None,
            "strInstructionsDE": "Reiben Sie den Rand des Glases mit der Limettenscheibe, damit das Salz daran haftet. Achten Sie darauf, dass nur der äußere Rand angefeuchtet wird und streuen Sie das Salz darauf. Das Salz sollte sich auf den Lippen des Genießers befinden und niemals in den Cocktail einmischen. Die anderen Zutaten mit Eis schütteln und vorsichtig in das Glas geben.",
            "strInstructionsFR": None,
            "strInstructionsIT": "Strofina il bordo del bicchiere con la fetta di lime per far aderire il sale.\r\nAvere cura di inumidire solo il bordo esterno e cospargere di sale.\r\nIl sale dovrebbe presentarsi alle labbra del bevitore e non mescolarsi mai al cocktail.\r\nShakerare gli altri ingredienti con ghiaccio, quindi versarli delicatamente nel bicchiere.",
            "strInstructionsZH-HANS": None,
            "strInstructionsZH-HANT": None,
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
            "strIngredient1": "Tequila",
            "strIngredient2": "Triple sec",
            "strIngredient3": "Lime juice",
            "strIngredient4": "Salt",
            "strIngredient5": None,
            "strIngredient6": None,
            "strIngredient7": None,
            "strIngredient8": None,
            "strIngredient9": None,
            "strIngredient10": None,
            "strIngredient11": None,
            "strIngredient12": None,
            "strIngredient13": None,
            "strIngredient14": None,
            "strIngredient15": None,
            "strMeasure1": "1 1/2 oz ",
            "strMeasure2": "1/2 oz ",
            "strMeasure3": "1 oz ",
            "strMeasure4": None,
            "strMeasure5": None,
            "strMeasure6": None,
            "strMeasure7": None,
            "strMeasure8": None,
            "strMeasure9": None,
            "strMeasure10": None,
            "strMeasure11": None,
            "strMeasure12": None,
            "strMeasure13": None,
            "strMeasure14": None,
            "strMeasure15": None,
            "strImageSource": "https://commons.wikimedia.org/wiki/File:Klassiche_Margarita.jpg",
            "strImageAttribution": "Cocktailmarler",
            "strCreativeCommonsConfirmed": "Yes",
            "dateModified": "2015-08-18 14:42:59",
        }
    ]
}
