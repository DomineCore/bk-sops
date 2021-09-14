# Generated by Django 2.2.24 on 2021-09-14 07:56

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='MigrateLog',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('desc', models.CharField(default='migrate_switch=1是启动迁移，0为停止迁移；migrate_num_once控制单次迁移量，默认为环境变量STATISTICS_PER_MIGRATE_NUM的值。', max_length=128)),
                ('migrate_switch', models.BooleanField(default=True, verbose_name='迁移任务开关,默认为打开状态')),
                ('migrate_num_once', models.IntegerField(default=500, verbose_name='单次数据迁移量,默认为500')),
                ('templateInPipeline_start', models.IntegerField(default=1, verbose_name='template迁移起点')),
                ('componentInTemplate_start', models.IntegerField(default=1, verbose_name='componet迁移起点')),
                ('instanceInPipeline_start', models.IntegerField(default=1, verbose_name='instance迁移起点')),
                ('componentExecuteData_start', models.IntegerField(default=1, verbose_name='componentExecute迁移起点')),
                ('templateInPipeline_migrated', models.IntegerField(default=0, verbose_name='template已迁移量')),
                ('componentInTemplate_migrated', models.IntegerField(default=0, verbose_name='component已迁移量')),
                ('instanceInPipeline_migrated', models.IntegerField(default=0, verbose_name='instance已迁移量')),
                ('componenetExecuteData_migrated', models.IntegerField(default=0, verbose_name='componentExecute已迁移量')),
                ('templateInPipeline_finished', models.IntegerField(default=False, verbose_name='template迁移状态')),
                ('componentInTemplate_finished', models.IntegerField(default=False, verbose_name='component迁移状态')),
                ('instanceInPipeline_finished', models.IntegerField(default=False, verbose_name='instance迁移状态')),
                ('componenetExecuteData_finished', models.IntegerField(default=False, verbose_name='componentExecute迁移状态')),
                ('templateInPipeline_end', models.IntegerField(default=500, verbose_name='template迁移终点')),
                ('componentInTemplate_end', models.IntegerField(default=500, verbose_name='component迁移终点')),
                ('instanceInPipeline_end', models.IntegerField(default=500, verbose_name='instance迁移终点')),
                ('componenetExecuteData_end', models.IntegerField(default=500, verbose_name='componentExecute迁移终点')),
                ('templateInPipeline_count', models.IntegerField(default=0, verbose_name='template数据总量')),
                ('componentInTemplate_count', models.IntegerField(default=0, verbose_name='component数据总量')),
                ('instanceInPipeline_count', models.IntegerField(default=0, verbose_name='instance数据总量')),
                ('componenetExecuteData_count', models.IntegerField(default=0, verbose_name='componentExecute数据总量')),
            ],
        ),
    ]
