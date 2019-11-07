# Teste TewOne!

  - Pré requisito para iniciar o projeto: Tenha o **docker** funcionando corretamente em sua máquina. Para isso veja **https://docs.docker.com/install/** e também **docker-compose** **https://docs.docker.com/compose/install/**.
  
  - Baixe o repositório **git clone https://github.com/Minotti/tewone-teste.git**
  - Acesse a pasta criada e execute **./build.sh** em seu terminal e aguarde o processo concluir, pode demorar alguns minutos.
    > Isto criará os containers, banco, tabelas e seeders do backend e deixará frontend acessível atráves da url que será criada

Ao término acesse a url exibida em seu terminal para testar o Frontend. Utilize as credenciais:

Login: douglas@tew.one
Senha: douglas@tew.one

### Comandos

Dentro da pasta raiz do projeto você poderá utilizar alguns comandos

| Comando | Ação |
| ------ | ------ |
| ./build.sh | Utilize apenas no início para Criar os volumes, containers, banco etc. |
| ./start_backnfront.sh | Inicializa os containers e o frontend |
| ./stop_backend.sh | Derruba os containers do backend (docker-compose down) |
| ./test.sh | Executa testes utilizando o phpunit |
