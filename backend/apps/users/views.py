from rest_framework.generics import RetrieveUpdateAPIView
from rest_framework.views import APIView
from .models import User
from .serializers import UserSerializer
from django.http import Http404
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from dj_rest_auth.registration.views import SocialLoginView

class UserDetailView(RetrieveUpdateAPIView):
    """
    View that returns the details of a single user using user id
    """
    permission_classes = [IsAuthenticated]
    serializer_class = UserSerializer
    
    def get_object(self):
        return self.request.user
    
class LogoutView(APIView):
    permission_classes = [IsAuthenticated]
    
    def post(self, request):
        try:
            refresh_token = request.data['refresh']
            token = RefreshToken(refresh_token)        
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        
class GoogleLoginView(SocialLoginView):
# The frontend needs to send a post request with the authorization code received from google to /api/users/auth/google endpoint. 
# From there the backend will send the refresh and jwt token to the frontend.
    adapter_class = GoogleOAuth2Adapter
    callback_url = "insert frontend url here"
    client_class = OAuth2Client