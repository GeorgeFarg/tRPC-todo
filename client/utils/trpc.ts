import { createTRPCReact } from '@trpc/react-query';
import { httpBatchLink } from '@trpc/client/links/httpBatchLink';
import type { appRouter } from '../../shared/types';

export const trpc = createTRPCReact<appRouter>();

export const client = trpc.createClient({
    links: [
        httpBatchLink({
          url: "http://localhost:3000/trpc",
        })
    ],
});