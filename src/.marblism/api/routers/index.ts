/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@prisma/client";
import createAccountRouter from "./Account.router";
import createUserRouter from "./User.router";
import createSessionRouter from "./Session.router";
import createAgentRouter from "./Agent.router";
import createConversationRouter from "./Conversation.router";
import createMessageRouter from "./Message.router";
import createAnalyticsRouter from "./Analytics.router";
import createTemplateRouter from "./Template.router";
import createSubscriptionRouter from "./Subscription.router";
import createRagVectorRouter from "./RagVector.router";
import createPlatformRouter from "./Platform.router";
import createIntegrationRouter from "./Integration.router";
import { ClientType as AccountClientType } from "./Account.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as SessionClientType } from "./Session.router";
import { ClientType as AgentClientType } from "./Agent.router";
import { ClientType as ConversationClientType } from "./Conversation.router";
import { ClientType as MessageClientType } from "./Message.router";
import { ClientType as AnalyticsClientType } from "./Analytics.router";
import { ClientType as TemplateClientType } from "./Template.router";
import { ClientType as SubscriptionClientType } from "./Subscription.router";
import { ClientType as RagVectorClientType } from "./RagVector.router";
import { ClientType as PlatformClientType } from "./Platform.router";
import { ClientType as IntegrationClientType } from "./Integration.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        account: createAccountRouter(router, procedure),
        user: createUserRouter(router, procedure),
        session: createSessionRouter(router, procedure),
        agent: createAgentRouter(router, procedure),
        conversation: createConversationRouter(router, procedure),
        message: createMessageRouter(router, procedure),
        analytics: createAnalyticsRouter(router, procedure),
        template: createTemplateRouter(router, procedure),
        subscription: createSubscriptionRouter(router, procedure),
        ragVector: createRagVectorRouter(router, procedure),
        platform: createPlatformRouter(router, procedure),
        integration: createIntegrationRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    account: AccountClientType<AppRouter>;
    user: UserClientType<AppRouter>;
    session: SessionClientType<AppRouter>;
    agent: AgentClientType<AppRouter>;
    conversation: ConversationClientType<AppRouter>;
    message: MessageClientType<AppRouter>;
    analytics: AnalyticsClientType<AppRouter>;
    template: TemplateClientType<AppRouter>;
    subscription: SubscriptionClientType<AppRouter>;
    ragVector: RagVectorClientType<AppRouter>;
    platform: PlatformClientType<AppRouter>;
    integration: IntegrationClientType<AppRouter>;
}
