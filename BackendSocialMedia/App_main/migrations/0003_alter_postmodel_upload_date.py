# Generated by Django 3.2.16 on 2022-10-28 13:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('App_main', '0002_remove_postmodel_post_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='postmodel',
            name='upload_date',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]