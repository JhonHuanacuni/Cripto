from rest_framework import viewsets
from .serializer import TaskSeralizer,WalletSerializer, CheckSerializer
from .models import Task

from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Wallet, Check

# Create your views here.

class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSeralizer
    queryset = Task.objects.all()

class WalletCreateView(APIView):
    def post(self, request):
        data = request.data
        wallet = Wallet(id_wallet=data["id_wallet"])
        wallet.save_encrypted_wallet(data["password"])  # Ahora no se pasan valores iniciales
        return Response(WalletSerializer(wallet).data, status=status.HTTP_201_CREATED)

class TransferView(APIView):
    def post(self, request):
        data = request.data
        sender = Wallet.objects.get(id_wallet=data["sender_wallet"])
        receiver = Wallet.objects.get(id_wallet=data["receiver_wallet"])
        amount = float(data["amount"])
        
        decrypted_values = sender.decrypt_wallet(data["password"])
        if sum(decrypted_values) < amount:
            return Response({"error": "Fondos insuficientes"}, status=status.HTTP_400_BAD_REQUEST)
        
        new_check = Check(sender_wallet=sender, receiver_wallet=receiver, amount=amount)
        new_check.save()
        
        return Response({"message": "Cheque creado"}, status=status.HTTP_201_CREATED)
    
    
@api_view(['GET'])
def list_wallets(request):
    wallets = Wallet.objects.all()
    serializer = WalletSerializer(wallets, many=True)
    return Response(serializer.data)