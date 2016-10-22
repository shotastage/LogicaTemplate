module Debugger {
    export function log(msg: string): boolean {
        console.log(msg);
        return true;
    }

    export function typecheck(val: Object): string {

        let Types = {
            number: "number",
            string: "string",
            bool:   "boolean"
        }

        return "test";
    }
}