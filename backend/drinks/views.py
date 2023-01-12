import json

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from drinks.serializers import DrinkEnquirySerializer, DrinkRequestSerializer

DEFAULT_TO_LANG = "pl"


@csrf_exempt
def enquiry(request):
    if request.method != "POST":
        return JsonResponse({"error": "Invalid request method"}, status=400)

    data = json.loads(request.body)
    drink_id = data.get("drink_id")
    username = data.get("username")
    to_lang = data.get("to_lang", DEFAULT_TO_LANG)

    request_serializer = DrinkRequestSerializer(
        data={
            "drink_id": drink_id,
            "username": username,
            "to_lang": to_lang,
        }
    )
    if request_serializer.is_valid():
        drink_enquiry = request_serializer.save()
        serializer = DrinkEnquirySerializer(drink_enquiry)
        return JsonResponse(serializer.data, status=201)
    print(request_serializer.errors)

    raise Exception("Invalid request")
