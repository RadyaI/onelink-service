# Fastify + Tyscript

## Pertama
Install typescript dan ts-node menggunakan

```bash
npm i typescript ts-node
```

## Kedua
Buat file bernama tsconfig.json yang berisi

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./api",
    "strict": true,
    "esModuleInterop": true
  },
  "include": ["api/**/*"],
  "exclude": ["node_modules"]
}
```

atau kamu bisa lihat di dokumentasi typescript sendiri disini

[https://www.typescriptlang.org/docs/handbook/tsconfig-json.html](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

## Ketiga
Ubah semua file ts nya menjadi js sebelum kamu run stepnya

```bash
npx tsc

npm run start
```

oh iya pastiin juga bagian script pada package.json seperti ini 

```json
  "scripts": {
    "build": "npx tsc",
    "start": "node dist/index.js",
    "dev": "ts-node api/index.ts",
    "vercel-build": "npm run build"
  }
```
## Keempat (opsional)
Pada file index.ts bisa kamu ubah seperti ini

```typescript
import Fastify from 'fastify';

const app = Fastify({
  logger: true,
});


const start = async () => {
  try {
    await app.listen({ port: 3000 });
    console.log(`Server is running at http://localhost:3000`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();

export default async function handler(req: any, reply: any) {
  await app.ready();
  app.server.emit('request', req, reply);
}
```

atau kamu bisa lihat langsung pada dokumentasi fastify sendiri disini
[https://fastify.dev/](https://fastify.dev/)

Made by [Radya](https://radya.fun)

## Kalo pake vercel
Ubah file vercel.json menjadi seperti ini 

```json
{
  "builds": [
    {
      "src": "api/index.ts",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/api/index.ts"
    }
  ]
}
```
