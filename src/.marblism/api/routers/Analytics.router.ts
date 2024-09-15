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

        createMany: procedure.input($Schema.AnalyticsInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).analytics.createMany(input as any))),

        create: procedure.input($Schema.AnalyticsInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).analytics.create(input as any))),

        deleteMany: procedure.input($Schema.AnalyticsInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).analytics.deleteMany(input as any))),

        delete: procedure.input($Schema.AnalyticsInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).analytics.delete(input as any))),

        findFirst: procedure.input($Schema.AnalyticsInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).analytics.findFirst(input as any))),

        findMany: procedure.input($Schema.AnalyticsInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).analytics.findMany(input as any))),

        findUnique: procedure.input($Schema.AnalyticsInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).analytics.findUnique(input as any))),

        updateMany: procedure.input($Schema.AnalyticsInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).analytics.updateMany(input as any))),

        update: procedure.input($Schema.AnalyticsInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).analytics.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.AnalyticsCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AnalyticsCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AnalyticsCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AnalyticsCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.AnalyticsCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AnalyticsCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AnalyticsGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AnalyticsGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AnalyticsCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AnalyticsCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AnalyticsGetPayload<T>, Context>) => Promise<Prisma.AnalyticsGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.AnalyticsDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AnalyticsDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AnalyticsDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AnalyticsDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.AnalyticsDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AnalyticsDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AnalyticsGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AnalyticsGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AnalyticsDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AnalyticsDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AnalyticsGetPayload<T>, Context>) => Promise<Prisma.AnalyticsGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.AnalyticsFindFirstArgs, TData = Prisma.AnalyticsGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.AnalyticsFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.AnalyticsGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AnalyticsFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.AnalyticsFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.AnalyticsGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.AnalyticsGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.AnalyticsFindManyArgs, TData = Array<Prisma.AnalyticsGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.AnalyticsFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.AnalyticsGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AnalyticsFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.AnalyticsFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.AnalyticsGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.AnalyticsGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.AnalyticsFindUniqueArgs, TData = Prisma.AnalyticsGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.AnalyticsFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.AnalyticsGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AnalyticsFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.AnalyticsFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.AnalyticsGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.AnalyticsGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.AnalyticsUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AnalyticsUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AnalyticsUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AnalyticsUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.AnalyticsUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AnalyticsUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AnalyticsGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AnalyticsGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AnalyticsUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AnalyticsUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AnalyticsGetPayload<T>, Context>) => Promise<Prisma.AnalyticsGetPayload<T>>
            };

    };
}
