# BlackGrid Demo - ANS Deploy

## Build
docker build -t blackgrid-demo:prod .

## Run
docker rm -f blackgrid-demo || true
docker run -d --name blackgrid-demo --restart unless-stopped -p 80:80 blackgrid-demo:prod

## Test
curl -I http://localhost
