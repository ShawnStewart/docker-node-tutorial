const dotenv = require('dotenv');
const Koa = require('koa');

dotenv.config({ path: '../database.env' });
const db = require('./database/dbConfig');
const app = new Koa();

// logger

app.use(async (ctx, next) => {
    await next();
    const rt = ctx.response.get('X-Response-Time');
    console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});

// response

app.use(async (ctx) => {
    let tries = 5;
    while (tries) {
        try {
            tries--;
            console.log('testing connection');
            const result = await db.raw('select 1+1 as result');
            console.log('result', result);
            ctx.body = result;
        } catch (err) {
            if (tries > 0) {
                console.log(`failed - tries left ${tries}`);
                console.log(`error: ${err.stack}`);
                await new Promise((resolve) => setTimeout(resolve, 2000));
                continue;
            }
            console.log('error');
            ctx.body = `caught an error ${err}`;
        }
    }
});

app.listen(3000);
console.log(`\n=== App running on port 3000 ===\n`);
