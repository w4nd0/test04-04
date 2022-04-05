from rest_framework import routers
from todos.views import TodoView

router = routers.SimpleRouter()

router.register(r"todos", TodoView, basename="todos")

urlpatterns = router.urls
