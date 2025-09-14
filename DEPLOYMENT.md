# CURK Website Deployment Guide

## 🚀 GCP Cloud Run Deployment

This guide will help you deploy the CURK website to Google Cloud Platform using Cloud Run.

### Prerequisites

1. **Google Cloud SDK** installed and configured
2. **Docker** installed locally
3. **GCP Project** with billing enabled
4. **Container Registry API** enabled
5. **Cloud Run API** enabled

### Setup Commands

```bash
# Install Google Cloud SDK (if not already installed)
# https://cloud.google.com/sdk/docs/install

# Authenticate with Google Cloud
gcloud auth login

# Set your project ID
export PROJECT_ID=your-project-id
gcloud config set project $PROJECT_ID

# Enable required APIs
gcloud services enable containerregistry.googleapis.com
gcloud services enable run.googleapis.com
gcloud services enable cloudbuild.googleapis.com
```

### Deployment Methods

#### Method 1: Using Cloud Build (Recommended)

```bash
# Deploy using Cloud Build
npm run deploy:gcp

# Or manually
gcloud builds submit --config cloudbuild.yaml .
```

#### Method 2: Manual Docker Build & Push

```bash
# Build Docker image
npm run docker:build

# Tag for GCP Container Registry
docker tag curk-website gcr.io/$PROJECT_ID/curk-website:latest

# Push to Container Registry
docker push gcr.io/$PROJECT_ID/curk-website:latest

# Deploy to Cloud Run
gcloud run deploy curk-website \
  --image gcr.io/$PROJECT_ID/curk-website:latest \
  --region asia-southeast1 \
  --platform managed \
  --allow-unauthenticated \
  --port 80 \
  --memory 512Mi \
  --cpu 1 \
  --min-instances 0 \
  --max-instances 10 \
  --concurrency 80 \
  --timeout 300
```

#### Method 3: Local Testing

```bash
# Build and run locally
npm run deploy:local

# Or step by step
npm run build
npm run docker:build
npm run docker:run
```

### Environment Variables

Create a `.env.production` file (copy from `env.production.example`):

```bash
cp env.production.example .env.production
```

Update the values in `.env.production` with your actual configuration.

### Custom Domain (Optional)

To use a custom domain:

```bash
# Map custom domain to Cloud Run service
gcloud run domain-mappings create \
  --service curk-website \
  --domain your-domain.com \
  --region asia-southeast1
```

### Monitoring & Logs

```bash
# View logs
gcloud logs read --service=curk-website

# View service details
gcloud run services describe curk-website --region=asia-southeast1

# View metrics in Cloud Console
# https://console.cloud.google.com/run
```

### CI/CD with GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GCP Cloud Run

on:
  push:
    branches: [ main ]
    paths: [ 'client/**' ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Google Cloud SDK
      uses: google-github-actions/setup-gcloud@v1
      with:
        service_account_key: ${{ secrets.GCP_SA_KEY }}
        project_id: ${{ secrets.GCP_PROJECT_ID }}
    
    - name: Deploy to Cloud Run
      run: |
        cd client
        gcloud builds submit --config cloudbuild.yaml .
```

### Troubleshooting

#### Common Issues:

1. **Build fails**: Check Dockerfile and ensure all dependencies are installed
2. **Image push fails**: Verify Container Registry permissions
3. **Deployment fails**: Check Cloud Run quotas and permissions
4. **Service not accessible**: Verify `--allow-unauthenticated` flag

#### Useful Commands:

```bash
# Check build logs
gcloud builds list
gcloud builds log [BUILD_ID]

# Check service status
gcloud run services list
gcloud run services describe curk-website --region=asia-southeast1

# Test locally
curl http://localhost/health
```

### Cost Optimization

- **Min instances**: 0 (scales to zero when not in use)
- **Max instances**: 10 (adjust based on traffic)
- **Memory**: 512Mi (sufficient for static site)
- **CPU**: 1 (minimal for nginx)

### Security

- All security headers are configured in nginx.conf
- HTTPS is automatically handled by Cloud Run
- No sensitive data in environment variables
- Container runs as non-root user

### Performance

- Static assets are cached for 1 year
- HTML files cached for 1 hour
- Gzip compression enabled
- CDN-ready configuration

## 📊 Monitoring

After deployment, monitor your service:

1. **Cloud Console**: https://console.cloud.google.com/run
2. **Logs**: Cloud Logging
3. **Metrics**: Cloud Monitoring
4. **Health Check**: `https://your-service-url/health`

## 🔄 Updates

To update the service:

```bash
# Make changes to your code
git add .
git commit -m "Update website"
git push origin main

# Deploy (if using Cloud Build)
npm run deploy:gcp
```

The service will automatically update with zero downtime.
