# Strategy e Either

Esse projeto tem o objetivo de mostrar uma alternativa para os tratamentos de erros de uma forma amigavel, e mais simples. <br>
Utilizando design pattern Strategy e a estrutura de programação funcional Either. 


### Para buildar a aplicação local:
1. Criar um arquivo **.env** conforme exemplo
2. Crie no mysql Workbench um banco com nome de sua preferencia
3. No campo DB_NAME localizado **.env** colocar o mesmo nome que colocou no seu banco
4. Execute o comando ``` npm run typeorm -- -d ./src/database/data-source.ts migration:run ``` para realizar a migração
5. Execute o comando ``` npm run dev:server ```


### Para buildar no docker:
1. Setar o nome do seu banco no no arquivo **init.sql** (Tenha certeza de ser o mesmo nome DB_NAME localizada **.env**)
2. Criar um arquivo **.env** conforme o exemplo
3. Execute o comando ``` docker-compose build ```
4. Execute o comando ``` docker-compose up -d ```

Tecnologias:<br>
mysql, typescript.<br>
Framework:<br>
typeOrm, express.

