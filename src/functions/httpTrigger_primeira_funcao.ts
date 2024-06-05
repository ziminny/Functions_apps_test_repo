import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function httpTrigger_primeira_funcao(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    const name = request.query.get('name') || await request.text() || 'world';

    return { body: `Hello, ${name}!` };
};

app.http('httpTrigger_primeira_funcao', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: httpTrigger_primeira_funcao
});
