
# Desafio 01 - Ignite

Neste repositório consta a minha implementação do projeto Desafio 01 referente ao módulo: Fundamentos do Node.js da trilha de Nodejs, programa Ignite da Rocketseat.




## Funcionalidades/Features

- Listagem de tarefas
- Filtro de terefas pela query 'search'
- Criação de nova tarefa
- Remoção de tarefa
- Edição de terefa
- Importação de novas tarefas por arquivo .csv
## Executando Localmente/Run Locally

Clone o repositório

```bash
  git clone https://github.com/matosleo/ignite-desafio01
```

Vá para diretório do projeto

```bash
  cd ignite-desafio01
```

Instale os dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
```


## Como Importar tarefas/How to import tasks

Inicie o servidor

```bash
  npm run dev
```

Crie um arquivo na raiz do projeto com o nome *import.csv*, cada linha deverá conter somente duas informações: titulo e decrição separados por vígula. A primeira linha será de cabeçalho no formato: title,description. Segue o [modelo.csv](https://raw.githubusercontent.com/matosleo/ignite-desafio01/main/import.csv) sugerido

Execute o comando a seguir para realizar a importação

```bash
  node src/utils/import-tasks.js
```
