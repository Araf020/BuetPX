from django.shortcuts import render
from buetpx.models import Post
from buetpx.models import UserAccount
from user_profile.serializers import PostSerializer
from user_profile.serializers import UserSerializer
from django.http.response import JsonResponse
# from Backend.buetpx_back.buetpx.models import Place
from rest_framework.parsers import JSONParser 
from rest_framework import status
from rest_framework.decorators import api_view


# Create your views here.
@api_view(['GET'])
def posts_by_uid(request,uid):
    posts=Post.objects.filter(owner=uid)
    post_serializer = PostSerializer(posts, many=True)
    return JsonResponse(post_serializer.data, safe=False)

@api_view(['GET'])
def get_user_details(request,uid):
    user_details=UserAccount.objects.get(pk=uid)
    user_serializer = UserSerializer(user_details)
    return JsonResponse(user_serializer.data, safe=False)
