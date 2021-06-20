# This template have a differents technologies for the good rendiment in production:
## List of items:
- Express for services
- PM2 launch config for servers
- Nginx configuration for reverse proxy services
- Mongo db without mongoose persisten library(because is more faster the driver and you have more libertity for your future hard query)
- Redis for messague queue(future)
- Sentry for good protection and rendiment 
- Prometheus Graphana for monitoring of the services(FUTURE WITH K8S AND DOCKER RUNNER FOR PROM)
- Metrics monitoring for express with express-status-monitor
- Test unit for your api with services for tests
- Artillery for the stress cases or other test cases
- API docs template with different server
- CI/CD example with github actions
- Log folder with logger util for catch errors
- husky, prettier, conventional and eslint for good practises
- pay server with metrics and integrations(paypal, stripe, (try mercadopago))

