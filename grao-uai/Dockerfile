# Define a imagem base
FROM node:14-alpine

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante dos arquivos da aplicação para o diretório de trabalho
COPY . .

# Compila a aplicação React
RUN npm run build

# Define porta
EXPOSE 3000

# Define o comando padrão para iniciar a aplicação React
CMD ["npm", "start"]