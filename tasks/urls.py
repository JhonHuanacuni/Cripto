from django.urls import path, include
from rest_framework import routers
from tasks import views
from .views import WalletCreateView, TransferView
from .views import list_wallets


router = routers.DefaultRouter()
router.register(r'tasks', views.TaskView, 'tasks' )

urlpatterns = [
    path("api/v1/", include(router.urls) ),
    path('create_wallet/', WalletCreateView.as_view(), name='create_wallet'),
    path('transfer/', TransferView.as_view(), name='transfer'),
    path('list_wallets/', list_wallets, name='list_wallets'),
]