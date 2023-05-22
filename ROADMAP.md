```sh
npx nx generate @nx/js:library domain --unitTestRunner=jest --directory=user --tags=scope:user,type:domain --no-interactive
```

```sh
npx nx generate @nx/js:library domain --unitTestRunner=jest --directory=user --tags=scope:user,type:domain --no-interactive
```

```sh
npx nx generate @nx/js:library data-access --unitTestRunner=jest --directory=user --tags=scope:user,type:data-access --no-interactive
```

```sh
npx nx generate @nx/js:library data-access --unitTestRunner=jest --directory=core --tags=scope:core,type:data-access --no-interactive
```

```sh
npx nx generate @nx/plugin:generator use-case --project=core-domain --description='Cria um caso de uso'
```

```sh
npx nx generate @nx/plugin:generator facade --project=core-data-access --description='Cria um facade'
```

```sh
npx nx generate @nx/angular:library feature-auth --directory=user --lazy --parent=apps/client/src/app/app.routes.ts --routing --prefix=user --style=scss --tags=type:feature,scope:user
```

```sh
npx nx generate @nx/angular:component user-feature-auth --project=user-feature-auth --flat --type=container
```

## Parte 1
1. Criar implementações concretas para abstrações da camada data-access
1. Criar mocks e stubs para abstrações e testes unitários da camada data-access
1. Criar componentes de layout
1. Criar componentes de páginas

## Parte 2
1. Criar casos de uso usando abstrações na camada domain e configurando injeção de dependência para indicar implementações das abstrações, na camada data-access.
1. Criar testes unitários para casos de uso na camada domain, configurando injeção de dependência para usar mocks e stubs criados como implementações para abstrações utilizadas.
1. Criar facades usando casos de uso
1. Criar dumb components

## Parte 3
1. Criar smart components na camada feature usando facades para execução dos casos de uso e apresentar resultado no template
1. Criar testes unitários da camada feature
