export const KEY = 941055;
console.log('This is a Official Type Declaration File.\n')
export const USER_SOURCE: string = `AS-89901XP-JULY-${KEY}`;

abstract class Source<T = boolean> extends Error<T> {
    private static async getRootId(src: string | undefined, dest: string | null): Promise<T | boolean> | null;
    private static fetchLang(...args: Array<T>): void;
}