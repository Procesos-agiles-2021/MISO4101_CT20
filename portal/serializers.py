from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Deportista, Participacion, Deporte


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('first_name', 'last_name')


class DeporteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Deporte
        fields = ('nombre', 'icono')


class DeportistaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Deportista
        fields = ('id','nombre', 'fecha_nacimiento', 'peso', 'estatura', 'entrenador',
            'imagen', 'lugar_nacimiento')


class ParticipacionSerializer1(serializers.ModelSerializer):
    deportista = DeportistaSerializer(read_only=True)
    deporte = DeporteSerializer(read_only=True)

    class Meta:
        model = Participacion
        fields = ('id','deporte', 'deportista')


class DeportistasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Deportista
        fields = (
            'id','nombre', 'fecha_nacimiento', 'peso', 'estatura', 'entrenador',
            'imagen', 'lugar_nacimiento')


class ParticipacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Participacion
        fields = (
            'id','fecha', 'hora', 'deporte', 'deportista', 'modalidad', 'resultado'
        )
