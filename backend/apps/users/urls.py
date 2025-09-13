from django.urls import path
from .views import UserDetailView, LogoutView, GoogleLoginView

urlpatterns = [
    path('me/', UserDetailView.as_view(), name="user-details"),
    path('logout/', LogoutView.as_view(), name="logout-view"),
    path('auth/google/', GoogleLoginView.as_view(), name="google-login")
]