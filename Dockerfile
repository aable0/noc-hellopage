FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
# React 17 ve CRA 5 çakışmalarını önlemek için --legacy-peer-deps kullanıyoruz
RUN npm install --legacy-peer-deps

COPY . .

# Uygulamayı build ediyoruz
RUN npm run build

# Build edilen statik dosyaları sunmak için hafif bir web sunucusu kuruyoruz
RUN npm install -g serve

# Serve komutunun çalışacağı portu belirtiyoruz
EXPOSE 3000

# -s (single-page app routing) bayrağıyla serve komutunu başlatıyoruz
CMD ["serve", "-s", "build", "-l", "3000"]
