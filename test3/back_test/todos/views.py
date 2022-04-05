import datetime

from rest_framework.viewsets import ModelViewSet

from todos.models import Todo
from todos.serializers import TodoSerializer


class TodoView(ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
