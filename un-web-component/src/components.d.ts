/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface UnTraceManager {
        "appToken": string;
        "gdbVersion": string;
        "host": string;
        "inAssets": any;
        "inTC": any;
        "isBasic": boolean;
        "name": string;
        "runIsoTraceTwice": boolean;
        "showTerminals": boolean;
    }
}
declare global {
    interface HTMLUnTraceManagerElement extends Components.UnTraceManager, HTMLStencilElement {
    }
    var HTMLUnTraceManagerElement: {
        prototype: HTMLUnTraceManagerElement;
        new (): HTMLUnTraceManagerElement;
    };
    interface HTMLElementTagNameMap {
        "un-trace-manager": HTMLUnTraceManagerElement;
    }
}
declare namespace LocalJSX {
    interface UnTraceManager {
        "appToken"?: string;
        "gdbVersion"?: string;
        "host"?: string;
        "inAssets"?: any;
        "inTC"?: any;
        "isBasic"?: boolean;
        "name"?: string;
        "onEmitFlagChange"?: (event: CustomEvent<any>) => void;
        "onEmitQueryTrace"?: (event: CustomEvent<any>) => void;
        "onEmitSelectedTrace"?: (event: CustomEvent<any>) => void;
        "onEmitTraceResults"?: (event: CustomEvent<any>) => void;
        "runIsoTraceTwice"?: boolean;
        "showTerminals"?: boolean;
    }
    interface IntrinsicElements {
        "un-trace-manager": UnTraceManager;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "un-trace-manager": LocalJSX.UnTraceManager & JSXBase.HTMLAttributes<HTMLUnTraceManagerElement>;
        }
    }
}
