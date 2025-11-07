export const appRouter = {
    HOME: 'home',
    LOGIN: 'login'
} as const

type routerType = (typeof appRouter)[keyof typeof appRouter]

export const routerPath: Record<routerType, string> = {
    [appRouter.HOME]: '/',
    [appRouter.LOGIN]: '/login'
}