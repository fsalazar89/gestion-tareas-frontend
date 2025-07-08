# Etapa 1: Construcción
FROM node:20 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ARG build_env=production
RUN if [ "$build_env" = "production" ]; then npm run build_prod; else npm run build_qa; fi

# Etapa 2: Servir con Nginx
FROM nginx:alpine

# ① Borra el index de bienvenida para que no se mezcle
RUN rm -rf /usr/share/nginx/html/*

# ② Copia SOLO lo que hay dentro de "browser"
COPY --from=build /app/dist/gestion-tareas-frontend/browser/ /usr/share/nginx/html/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]