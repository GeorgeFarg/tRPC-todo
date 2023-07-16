import { createTRPCReact } from '@trpc/react-query';
import { httpBatchLink } from '@trpc/client/links/httpBatchLink';
import type { AppRouter } from '../../server/routers/index';

export const trpc = createTRPCReact<AppRouter>();

export const client = trpc.createClient({
    links: [
        httpBatchLink({
          url: "http://localhost:3000/trpc",
        })
    ],
});