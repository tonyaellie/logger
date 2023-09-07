declare module '@tonyaellie/logger' {
  export function debug(...message: any): void;
  export function info(...message: any): void;
  export function warn(...message: any): void;
  export function error(...message: any): void;
  export function fatal(...message: any): void;

  export const events: {
    on(
      event: 'all',
      listener: (time: string, prefix: string, msg: string) => void
    ): void;
  };
}
