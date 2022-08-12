# Generated by Django 4.0.6 on 2022-08-12 02:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('buetpx', '0008_reaction_like'),
    ]

    operations = [
        migrations.CreateModel(
            name='Gallery',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='gallery', to='buetpx.useraccount')),
                ('posts', models.ManyToManyField(blank=True, related_name='gallery', to='buetpx.post')),
            ],
        ),
    ]
