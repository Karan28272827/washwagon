from rest_framework import serializers
from .models import User, Address

class AddressSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)
    
    class Meta:
        model = Address
        fields = ('id', 'street_address', 'city', 'postal_code')
        
class UserSerializer(serializers.ModelSerializer):
    addresses = AddressSerializer(many=True, required=False)
    
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'first_name', 'last_name', 'addresses')
        
    def update(self, instance, validated_data):
        addresses_data = validated_data.pop('addresses', None)
        
        instance = super().update(instance, validated_data)
        
        if addresses_data is not None:
            sent_ids = [address.get('id') for address in addresses_data if address.get('id')]
            
            instance.addresses.exclude(id__in=sent_ids).delete()
            
            for address in addresses_data:
                address_id = address.get('id', None)
                
                if address_id:
                    Address.objects.update_or_create(
                        id=address_id,
                        user=instance,
                        defaults=address
                    )
                else:
                    Address.objects.create(user=instance, **address)

        
        return instance
        
        