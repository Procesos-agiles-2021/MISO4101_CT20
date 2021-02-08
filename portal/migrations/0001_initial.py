# Generated by Django 3.1.6 on 2021-02-08 02:48

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='Deporte',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=220)),
                ('descripcion', models.CharField(max_length=220)),
                ('tipo', models.CharField(max_length=220)),
                ('icono', models.CharField(max_length=220)),
            ],
            options={
                'verbose_name_plural': 'Deportes',
            },
        ),
        migrations.CreateModel(
            name='Deportista',
            fields=[
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='auth.user', verbose_name='Usuario')),
                ('fecha_nacimiento', models.DateField(verbose_name='Fecha de Nacimiento')),
                ('peso', models.FloatField(help_text='Peso del Deportista', validators=[django.core.validators.MinValueValidator(0.0)])),
                ('estatura', models.FloatField(help_text='Estatura del Deportista', validators=[django.core.validators.MinValueValidator(0.0)])),
                ('entrenador', models.CharField(help_text='Entrenador del Deportista', max_length=128)),
                ('imagen', models.URLField(help_text='URL Foto de Perfil', verbose_name='Foto')),
            ],
            options={
                'verbose_name_plural': 'Deportistas',
            },
        ),
        migrations.CreateModel(
            name='Lugar',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('departamento', models.CharField(max_length=50)),
                ('ciudad', models.CharField(max_length=50)),
            ],
            options={
                'verbose_name_plural': 'Lugares',
            },
        ),
        migrations.CreateModel(
            name='Participacion',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha', models.DateField(verbose_name='Fecha')),
                ('hora', models.TimeField(verbose_name='Hora')),
                ('modalidad', models.CharField(max_length=220)),
                ('resultado', models.FloatField(blank=True, null=True)),
                ('deporte', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='portal.deporte')),
                ('deportista', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='portal.deportista')),
            ],
            options={
                'verbose_name_plural': 'Participaciones',
            },
        ),
        migrations.CreateModel(
            name='UsuarioRegistrado',
            fields=[
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='auth.user', verbose_name='Usuario')),
                ('email', models.EmailField(help_text='Correo electrónico del Usuario', max_length=254)),
            ],
            options={
                'verbose_name_plural': 'Usuarios Registrados',
            },
        ),
        migrations.CreateModel(
            name='Video',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('url', models.URLField(help_text='URL del video', verbose_name='Video')),
                ('participacion', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='portal.participacion')),
            ],
            options={
                'verbose_name_plural': 'Videos',
            },
        ),
        migrations.AddField(
            model_name='deportista',
            name='lugar_nacimiento',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='portal.lugar'),
        ),
        migrations.CreateModel(
            name='Comentario',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('texto', models.CharField(max_length=1000)),
                ('fecha', models.DateTimeField()),
                ('usuario_registrado', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='portal.usuarioregistrado')),
                ('video', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='portal.video')),
            ],
            options={
                'verbose_name_plural': 'Comentarios',
            },
        ),
    ]
