FROM mcr.microsoft.com/azure-functions/node:3.0

WORKDIR /app

ENV AzureWebJobsScriptRoot=/app \
    AzureFunctionsJobHost__Logging__Console__IsEnabled=true

COPY . /app

RUN cd /app && \
    npm install