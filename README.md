# azure-function-search-index

Azure function for adding indexes to elastic search.

It receives indexes from a servicesbus queue and adds it to elastic search through a microservice.

## Azure

You'll need a valid subscription and to setup the following resources

- resource group
- app service plan
- storage account
- servicebus namespace
- servicebus queue named searchindexqueue

### Setup function

The easiest way to make this function run is to setup an app service, configure the app and get the function from GitHub.

Configuration for app
```
SERVICEBUS_CONNECTION=Endpoint=sb://<your-servicebus-namespace-connection-string>
SEARCH_SERVICE_URL=https://<your-search-service-api>
SEARCH_SERVICE_JWT_KEY=search-service-api-jwt-key
```

## Setup development

`local.settings.json`

```JavaScript
{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "<storage-accesskeys-key1-connectionstring>",
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "SERVICEBUS_CONNECTION": "<sb-sharedaccesspolicies-rootmanagesharedaccesskey-primaryconnectionstring>",
    "SEARCH_SERVICE_URL": "<your-search-service-api>",
    "SEARCH_SERVICE_JWT_KEY": "<search-service-api-jwt-key>"
  }
}
```

## License

[MIT](LICENSE)
