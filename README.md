# Laravel Breeze - Next.js Edition 🏝️

## Introduction

This repository is an implementing of the [Laravel Breeze](https://laravel.com/docs/starter-kits) application / authentication starter kit frontend in [Next.js](https://nextjs.org). All of the authentication boilerplate is already written for you - powered by [Laravel Sanctum](https://laravel.com/docs/sanctum), allowing you to quickly begin pairing your beautiful Next.js frontend with a powerful Laravel backend.
**This repository is a refactor of [breeze-next](https://github.com/laravel/breeze-next) by changing programing language from [JavaScript](https://www.javascript.com/) to [TypeScript](https://www.typescriptlang.org/)**

This repository consists of:

- 🔼 Next.js 12
- ⚛️ React 18
- ✨ TypeScript
- 📏 ESLint — Find and fix problems in your code
- 💖 Prettier — Format your code consistently
- 🐶 Husky & Lint Staged — Run scripts on your staged files before they are committed
- 🔑 Authentication starter kit

## Official Documentation

### Installation

First, create a Next.js compatible Laravel backend by installing Laravel Breeze into a [fresh Laravel application](https://laravel.com/docs/installation) and installing Breeze's API scaffolding:

```bash
# Create the Laravel application...
laravel new next-backend

cd next-backend

# Install Breeze and dependencies...
composer require laravel/breeze

php artisan breeze:install api
```

Next, ensure that your application's `APP_URL` and `FRONTEND_URL` environment variables are set to `http://localhost:8000` and `http://localhost:3000`, respectively.

After defining the appropriate environment variables, you may serve the Laravel application using the `serve` Artisan command:

```bash
# Serve the application...
php artisan serve
```

Next, clone this repository and install its dependencies with `yarn install` or `npm install`. Then, copy the `.env.example` file to `.env.local` and supply the URL of your backend:

```
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
```

To enable husky, you have to run

```
yarn husky install
```

Finally, run the application via `yarn dev` or `npm run dev`. The application will be available at `http://localhost:3000`:

```
yarn dev
```

> Note: Currently, we recommend using `localhost` during local development of your backend and frontend to avoid CORS "Same-Origin" issues.

### Authentication Hook

This Next.js application contains a custom `useAuth` React hook, designed to abstract all authentication logic away from your pages. In addition, the hook can be used to access the currently authenticated user:

```js
const ExamplePage = () => {
  const { logout, user } = useAuth({ middleware: 'auth' })

  return (
    <>
      <p>{user?.name}</p>

      <button onClick={logout}>Sign out</button>
    </>
  )
}

export default ExamplePage
```

> Note: You will need to use [optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) (`user?.name` instead of `user.name`) when accessing properties on the user object to account for Next.js's initial server-side render.

### Named Routes

For convenience, [Ziggy](https://github.com/tighten/ziggy#spas-or-separate-repos) may be used to reference your Laravel application's named route URLs from your React application.

## License

Laravel Breeze Next is open-sourced software licensed under the [MIT license](LICENSE.md).
