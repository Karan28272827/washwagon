import os

# Root directory name
ROOT = "project_root"

# Folder structure mapping (relative paths)
FOLDERS = [
    "config/settings",
    "apps/api",
    "apps/users",
    "apps/orders",
    "apps/dispatch",
    "apps/payments",
    "apps/notifications",
    "apps/common_models",
    "common/crypto",
    "common/middleware",
    "common/outbox",
    "common/cache",
    "common/observability",
    "adapters/payment_gateway",
    "adapters/maps",
    "adapters/storage",
    "adapters/sms_email",
    "adapters/kyc",
    "integrations/webhooks",
    "integrations/clients",
    "tasks",
    "workers/consumers",
    "observability/grafana/dashboards",
    "observability/sentry",
    "observability/opentelemetry",
    "observability/loki",
    "infra/docker",
    "infra/compose",
    "infra/k8s/base",
    "infra/k8s/overlays/dev",
    "infra/k8s/overlays/prod",
    "infra/terraform",
    "infra/gitops/argocd",
    "infra/gitops/flux",
    "scripts",
    "docs",
    "tests/unit",
    "tests/integration",
    "tests/e2e",
]

# Minimal stub files (path -> content)
FILES = {
    "manage.py": "#!/usr/bin/env python3\n\nif __name__ == \"__main__\":\n    print(\"Django manage.py placeholder\")\n",
    ".gitignore": "*.pyc\n__pycache__/\n.env\n",
    "README.md": "# Django Backend Project\n",
    "Makefile": "dev:\n\tpython manage.py runserver\n",
    "config/settings/base.py": "SECRET_KEY = 'change-me'\nDEBUG = True\nINSTALLED_APPS = []\n",
    "config/urls.py": "from django.urls import path, include\n\nurlpatterns = [\n    path('api/v1/', include('apps.api.urls_v1')),\n]\n",
    "apps/api/urls_v1.py": "from django.urls import path, include\nfrom rest_framework.routers import DefaultRouter\n\nrouter = DefaultRouter()\n\nurlpatterns = [path('', include(router.urls))]\n",
    "common/responses.py": "def ok(data=None):\n    return {\"status\": \"success\", \"data\": data}\n",
    "tests/conftest.py": "# pytest fixtures placeholder\n",
}

def create_structure():
    # Create all folders
    for folder in FOLDERS:
        path = os.path.join(ROOT, folder)
        os.makedirs(path, exist_ok=True)
        # add __init__.py to make Python packages
        init_file = os.path.join(path, "__init__.py")
        if not os.path.exists(init_file):
            with open(init_file, "w") as f:
                f.write("")

    # Create files
    for rel_path, content in FILES.items():
        file_path = os.path.join(ROOT, rel_path)
        folder = os.path.dirname(file_path)
        os.makedirs(folder, exist_ok=True)
        with open(file_path, "w") as f:
            f.write(content)

if __name__ == "__main__":
    create_structure()
    print(f"✅ Project structure created inside '{ROOT}'")
