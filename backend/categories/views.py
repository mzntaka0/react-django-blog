from rest_framework import viewsets, mixins
from rest_framework.authentication import TokenAuthentication
from .models import Categories
from categories import serializers
from blog_permissions.permissions import IsStaffUserOrReadOnly


# Create your views here.
class CategoriesViewSet(viewsets.GenericViewSet,
                        mixins.ListModelMixin,
                        mixins.CreateModelMixin,
                        mixins.RetrieveModelMixin,
                        mixins.UpdateModelMixin,
                        mixins.DestroyModelMixin):

    """Base viewset for user owned recipe attributes"""
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsStaffUserOrReadOnly,)

    """Manage tags in the database"""
    queryset = Categories.objects.all()
    serializer_class = serializers.CategoriesSerializer

