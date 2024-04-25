/**
 * Logs a customized message to the console that looks like a info.
 * @param args - An array of arguments that will be logged to the console.
 */
export function info(...args: any[]): void{
    console.log(`[info] >> [ ${args} ] << [info]`);
}
/**
 * Logs a traced message to the console.
 * @param args An array of arguments that will be logged to the console.
 * @example
 * _info("This is a log message");
 * // Logs: "YYYY-MM-DD HH:MM:SS.MMM AM/PM [info] >> [ 'This is a log message' ] << [info]"
 */
export function trace(...args: any[]): void {
    const currentDate = new Date();
    const hours = currentDate.getHours() > 12 ? currentDate.getHours() - 12 : currentDate.getHours();
    const minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : currentDate.getMinutes();
    const seconds = currentDate.getSeconds() < 10 ? `0${currentDate.getSeconds()}` : currentDate.getSeconds();
    const ampm = currentDate.getHours() >= 12 ? 'PM' : 'AM';
    console.log(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()} ${hours}:${minutes}:${seconds}.${currentDate.getMilliseconds()} ${ampm} [info] >> [ ${args} ] << [info]`);
}
/**
 * Executes a callback function and handles any errors that occur during its execution.
 * @param test - The callback function that contains the code to be tested.
 * @param args - Additional arguments that can be passed to the callback function.
 * @returns void
 */
export function handleError(test: () => void, ...args: any[]): void {
    try {
        console.log(`\n ======================= \n`);
        info('Begin Testing');
        test();
        info('End Testing');
    } catch (error: any) {
        console.log(`Some Error Occurred : ${error.message}`);
    } finally {
        console.log(`[ Function Has Successfully Executed and All the Errors are Handled. ]`);
        console.log(`\n ======================= \n`);
    }
    return void(0);
}
/* The End */
