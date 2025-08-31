from rest_framework import serializers

class OrderSerializer(serializers.Serializer):
    customer_id = serializers.UUIDField()
    total_amount = serializers.DecimalField(max_digits=10, decimal_places=2)
