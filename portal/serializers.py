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
    user = UserSerializer(read_only=True)

    class Meta:
        model = Deportista
        fields = ('user', 'imagen')


class ParticipacionSerializer(serializers.ModelSerializer):
    deportista = DeportistaSerializer(read_only=True)
    deporte = DeporteSerializer(read_only=True)

    class Meta:
        model = Participacion
        fields = ('fecha', 'hora', 'deporte', 'deportista', 'modalidad',
                  'resultado')


class ParticipacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Participacion
        fields = [
            'fecha', 'hora', 'deporte', 'deportista', 'modalidad', 'resultado'
        ]


class DeportistasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Deportista
        fields = [
            'user', 'fecha_nacimiento', 'peso', 'estatura', 'entrenador',
            'imagen', 'lugar_nacimiento'
        ]
