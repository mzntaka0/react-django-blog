# Generated by Django 3.0.3 on 2020-03-20 00:45

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('tags', '0001_initial'),
        ('posts', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='posts',
            name='tags',
            field=models.ManyToManyField(to='tags.Tags'),
        ),
    ]
