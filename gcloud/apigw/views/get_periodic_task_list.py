# -*- coding: utf-8 -*-
"""
Tencent is pleased to support the open source community by making 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community
Edition) available.
Copyright (C) 2017-2021 THL A29 Limited, a Tencent company. All rights reserved.
Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License.
You may obtain a copy of the License at
http://opensource.org/licenses/MIT
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
specific language governing permissions and limitations under the License.
"""


from django.views.decorators.http import require_GET

from blueapps.account.decorators import login_exempt
from gcloud import err_code
from gcloud.apigw.decorators import mark_request_whether_is_trust
from gcloud.apigw.decorators import project_inject
from gcloud.periodictask.models import PeriodicTask
from gcloud.apigw.views.utils import info_data_from_period_task
from gcloud.iam_auth.intercept import iam_intercept
from gcloud.iam_auth.view_interceptors.apigw import ProjectViewInterceptor
from packages.bkoauth.decorators import apigw_required


@login_exempt
@require_GET
@apigw_required
@mark_request_whether_is_trust
@project_inject
@iam_intercept(ProjectViewInterceptor())
def get_periodic_task_list(request, project_id):
    project = request.project
    task_list = PeriodicTask.objects.filter(project_id=project.id)
    data = []
    for task in task_list:
        data.append(info_data_from_period_task(task, detail=False))

    return {"result": True, "data": data, "code": err_code.SUCCESS.code}
