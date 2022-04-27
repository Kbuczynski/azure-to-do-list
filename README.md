# Setup

https://docs.microsoft.com/pl-pl/cli/azure/install-azure-cli-macos

https://docs.microsoft.com/pl-pl/azure/azure-functions/functions-create-function-linux-custom-image?tabs=in-process%2Cbash%2Cazure-cli&pivots=programming-language-javascript

https://docs.microsoft.com/pl-pl/azure/cosmos-db/linux-emulator?tabs=ssl-netstd21

https://docs.microsoft.com/pl-pl/azure/azure-functions/functions-reference-node?tabs=v2-v3-v4-export%2Cv2-v3-v4-done%2Cv2%2Cv2-log-custom-telemetry%2Cv2-accessing-request-and-response%2Cwindows-setting-the-node-version

# Develop

create new basic http azure function

```
func new --template "Http Trigger" --name FunctionName
```

pull docker image with cosmos db

```
docker pull mcr.microsoft.com/cosmosdb/linux/azure-cosmos-emulator
```

run docker image

```
docker run -p 8081:8081 -p 10251:10251 -p 10252:10252 -p 10253:10253 -p 10254:10254  -m 3g --cpus=2.0 --name=test-linux-emulator -e AZURE_COSMOS_EMULATOR_PARTITION_COUNT=10 -e AZURE_COSMOS_EMULATOR_ENABLE_DATA_PERSISTENCE=true -e AZURE_COSMOS_EMULATOR_IP_ADDRESS_OVERRIDE=$ipaddr -it mcr.microsoft.com/cosmosdb/linux/azure-cosmos-emulator
```

cosmos db admin panel

https://localhost:8081/_explorer/index.html