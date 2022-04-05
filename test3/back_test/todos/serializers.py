from rest_framework import serializers

from todos.models import Todo


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = "__all__"
        
    def update(self, instance, validated_data):
        instance.completed = not instance.completed
        return super().update(instance, validated_data)


