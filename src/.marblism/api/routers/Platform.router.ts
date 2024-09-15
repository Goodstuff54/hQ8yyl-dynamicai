/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.PlatformInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).platform.createMany(input as any))),

        create: procedure.input($Schema.PlatformInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).platform.create(input as any))),

        deleteMany: procedure.input($Schema.PlatformInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).platform.deleteMany(input as any))),

        delete: procedure.input($Schema.PlatformInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).platform.delete(input as any))),

        findFirst: procedure.input($Schema.PlatformInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).platform.findFirst(input as any))),

        findMany: procedure.input($Schema.PlatformInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).platform.findMany(input as any))),

        findUnique: procedure.input($Schema.PlatformInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).platform.findUnique(input as any))),

        updateMany: procedure.input($Schema.PlatformInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).platform.updateMany(input as any))),

        update: procedure.input($Schema.PlatformInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).platform.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.PlatformCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PlatformCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PlatformCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PlatformCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.PlatformCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PlatformCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PlatformGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PlatformGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PlatformCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PlatformCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PlatformGetPayload<T>, Context>) => Promise<Prisma.PlatformGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.PlatformDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PlatformDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PlatformDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PlatformDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.PlatformDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PlatformDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PlatformGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PlatformGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PlatformDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PlatformDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PlatformGetPayload<T>, Context>) => Promise<Prisma.PlatformGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.PlatformFindFirstArgs, TData = Prisma.PlatformGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.PlatformFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PlatformGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PlatformFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PlatformFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PlatformGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PlatformGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.PlatformFindManyArgs, TData = Array<Prisma.PlatformGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.PlatformFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.PlatformGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PlatformFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PlatformFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.PlatformGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.PlatformGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.PlatformFindUniqueArgs, TData = Prisma.PlatformGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.PlatformFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PlatformGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PlatformFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PlatformFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PlatformGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PlatformGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.PlatformUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PlatformUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PlatformUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PlatformUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.PlatformUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PlatformUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PlatformGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PlatformGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PlatformUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PlatformUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PlatformGetPayload<T>, Context>) => Promise<Prisma.PlatformGetPayload<T>>
            };

    };
}
