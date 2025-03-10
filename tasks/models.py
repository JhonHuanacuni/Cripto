from django.db import models
from cryptography.fernet import Fernet
import os

# Create your models here.
class Task(models.Model):
    title =models.CharField(max_length=200)
    description = models.TextField(blank=True)
    done = models.BooleanField(default=False)

    def __str__(self):
        return self.title

class Wallet(models.Model):
    id_wallet = models.CharField(max_length=255, unique=True)
    encrypted_data = models.BinaryField()
    balance = models.DecimalField(max_digits=30, decimal_places=10, default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    def save_encrypted_wallet(self, password, amounts):
        key = Fernet.generate_key()
        cipher = Fernet(key)
        encrypted_values = cipher.encrypt(",".join(map(str, amounts)).encode())
        self.encrypted_data = encrypted_values
        os.environ[self.id_wallet] = key.decode()  # Guardamos la clave temporalmente (mejor usar un gestor seguro)
        self.balance = sum(amounts)
        self.save()

    def decrypt_wallet(self, password):
        key = os.getenv(self.id_wallet)
        if not key:
            raise ValueError("Clave no encontrada")
        cipher = Fernet(key.encode())
        decrypted_values = cipher.decrypt(self.encrypted_data).decode()
        return list(map(int, decrypted_values.split(",")))


class Check(models.Model):
    sender_wallet = models.ForeignKey(Wallet, on_delete=models.CASCADE, related_name="sent_checks")
    receiver_wallet = models.ForeignKey(Wallet, on_delete=models.CASCADE, related_name="received_checks")
    amount = models.DecimalField(max_digits=30, decimal_places=10)
    created_at = models.DateTimeField(auto_now_add=True)
