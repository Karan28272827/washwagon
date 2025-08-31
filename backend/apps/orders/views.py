from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serializers import OrderSerializer
from . import services

class OrderCreateView(APIView):
    def post(self, request):
        serializer = OrderSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        idempotency_key = request.headers.get("Idempotency-Key")
        if not idempotency_key:
            return Response({"error": "Idempotency-Key header required"}, status=400)

        order, created = services.create_order(serializer.validated_data, idempotency_key)

        return Response(
            {
                "id": order.pk,
                "customer_id": str(order.customer_id),
                "status": order.status,
                "total_amount": str(order.total_amount),
                "idempotency_key": order.idempotency_key,
            },
            status=status.HTTP_201_CREATED if created else status.HTTP_200_OK,
        )
