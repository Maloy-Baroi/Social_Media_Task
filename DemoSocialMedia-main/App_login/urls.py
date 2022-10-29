from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView, TokenObtainPairView
from App_login import views

app_name = 'App_login'

urlpatterns = [
    path('signup/', views.registerAPIView),
    path('login/token/', TokenObtainPairView.as_view()),
    path('refresh-token/', TokenRefreshView.as_view()),
    path('logout/', views.logout_view),
    path('otp-checker/', views.otp_checker),
]
