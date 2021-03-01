from django.shortcuts import render
from django.urls import reverse
from django.http import HttpResponse, HttpResponseRedirect
from .models import Participacion, Deportista, Video, Comentario, User
# from .models import Participacion, UserForm
from .serializers import ParticipacionSerializer, DeportistaSerializer, DeportistasSerializer, VideoSerializer, ComentarioSerializer
from django.shortcuts import redirect
from rest_framework.renderers import TemplateHTMLRenderer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from datetime import date


class list_object(APIView):
    serializer_class = ParticipacionSerializer
    renderer_classes = [TemplateHTMLRenderer]
    template_name = 'participacion.html'

    def get(self, request):
        queryset = Participacion.objects.all()
        context = {'object': queryset}
        # print(context['object'][0])
        return Response(context)


# def add_user(request):
#    if request.method == 'POST':
#        form = UserForm(request.POST)
#        if form.is_valid():
#            form.save()
#            return HttpResponseRedirect('/auth/login/')
#    else:
#        form = UserForm()
#    return render(request, 'user_form.html', {'form': form})


def redirect_to_auth(request):
    return redirect('auth/login')


@api_view(['GET', 'POST'])
def calendario_list(request):
    if request.method == 'GET':
        calendars = Participacion.objects.all()
        serializer = ParticipacionSerializer(calendars, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ParticipacionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.error, status=status.HTTP_404_NOT_FOUND)


@api_view(['GET', 'PUT'])
def calendar_detail(request, pk):
    try:
        calendar = Participacion.objects.get(pk=pk)
    except Participacion.DoesNotExist:
        return Response(status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'GET':
        serializer = ParticipacionSerializer(calendar)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = ParticipacionSerializer(calendar, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST'])
def deportista_list(request):
    if request.method == 'GET':
        deportists = Deportista.objects.all()
        print(deportists)
        serializer = DeportistasSerializer(deportists, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = DeportistasSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        # return Response(serializer.error, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT'])
def deportist_detail(request, pk):
    try:
        deportist = Deportista.objects.get(pk=pk)
    except Deportista.DoesNotExist:
        return Response(status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'GET':
        serializer = DeportistasSerializer(deportist)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = DeportistasSerializer(deportist, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def participaciones_list(request, pk):
    try:
        deportist = Deportista.objects.get(pk=pk)
    except Deportista.DoesNotExist:
        return Response(status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'GET':
        participaciones = Participacion.objects.filter(deportista=deportist)
        serializer = ParticipacionSerializer(participaciones, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def participacion_detail(request, pk, pkP):
    try:
        participacion = Participacion.objects.get(pk=pkP)
    except Participacion.DoesNotExist:
        return Response(status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'GET':
        serializer = ParticipacionSerializer(participacion)
        return Response(serializer.data)

@api_view(['GET'])
def videos_list(request, pk, pkP):
    try:
        participacion = Participacion.objects.get(pk=pkP)
    except Participacion.DoesNotExist:
        return Response(status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'GET':
        videos = Video.objects.filter(participacion=participacion)
        serializer = VideoSerializer(videos, many=True)
        return Response(serializer.data)

@api_view(['GET', 'POST'])
def comentarios_list(request, pk, pkP):
    try:
        participacion = Participacion.objects.get(pk=pkP)
    except Participacion.DoesNotExist:
        return Response(status=status.HTTP_400_BAD_REQUEST)
    try:
        video = Video.objects.filter(participacion=participacion)
    except Video.DoesNotExist:
        return Response(status=status.HTTP_400_BAD_REQUEST)
    if request.method == 'GET':
        comments = Comentario.objects.filter(video=video[0])
        serializer = ComentarioSerializer(comments, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        comment = Comentario
        comment.usuario_registrado=0
        today = date.today()
        comment.fecha = today.strftime("%d/%m/%Y")
        comment.username='Anonymous User'
        comment.texto=request.data
        print(comment.texto)
        serializer = ComentarioSerializer(comment)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
