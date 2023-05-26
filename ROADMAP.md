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
npx nx generate @nx/plugin:generator use-case --project=core-domain --description='Cria um caso de uso' --no-interactive
```

```sh
npx nx generate @nx/plugin:generator facade --project=core-data-access --description='Cria um facade' --no-interactive
```

```sh
npx nx generate @nx/angular:library feature-auth --directory=user --lazy --parent=apps/client/src/app/app.routes.ts --routing --prefix=user --style=scss --tags=type:feature,scope:user --no-interactive
```

```sh
npx nx generate @nx/angular:component user-feature-auth --project=user-feature-auth --flat --type=container --no-interactive
```

```sh
npx nx generate @nx/nest:application server --frontendProject=client --e2eTestRunner=none --strict --no-interactive
```

```sh
npx nx generate @nx/nest:resource users --project=server --directory=app --no-interactive
```

```sh
npx nx generate @nx/nest:resource auth --project=server --no-crud --directory=app --no-interactive
```

```sh
npm i @nestjs/mapped-types
```

```sh
npm install --save @nestjs/jwt
```

```sh
npx nx generate @nx/js:library api-interfaces --unitTestRunner=none --directory=user --minimal --tags=type:api,scope:user --no-interactive
```

```sh
npm i class-transformer class-validator
```

```sh
npx nx generate @nx/angular:library feature-account --directory=user --lazy --parent=apps/client/src/app/app.routes.ts --routing --prefix=user --style=scss --tags=type:feature,scope:user
```

```sh
npx nx generate @nx/angular:component components/sign-up --project=user-feature-auth
```

```sh
npx nx generate @nx/angular:component containers/profile --project=user-feature-account --type=container
```

```sh
npx nx generate @nx/angular:component components/sidenav-menu --project=user-feature-account
```

```sh
npx nx generate @nx/angular:component components/password-strength --project=user-feature-account
```

```sh
npx nx generate @nx/angular:component containers/security --project=user-feature-account --type=container
```

```sh
npx nx generate @nx/angular:library ui-shared --directory=user --prefix=user --style=scss --tags=type:ui,scope:user
```


