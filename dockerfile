# Use a imagem oficial do Node.js como base
FROM node:14

# Diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos de configuração e dependências
COPY package.json .
COPY package-lock.json .
RUN npm install

# Copia o código da aplicação
COPY . .

# Expõe a porta que a aplicação Node.js vai escutar
EXPOSE 3333

# Comando para iniciar a aplicação
CMD ["npm", "run", "dev:server"]