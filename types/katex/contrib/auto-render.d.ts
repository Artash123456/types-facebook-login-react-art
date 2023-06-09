import { KatexOptions } from 'katex';

export interface RenderMathInElementSpecificOptionsDelimiters {
    /**
     * A string which starts the math expression (i.e. the left delimiter)
     */
    left: string;
    /**
     * A string which ends the math expression (i.e. the right delimiter)
     */
    right: string;
    /**
     * A boolean of whether the math in the expression should be rendered in display mode or not
     */
    display: boolean
}

export interface RenderMathInElementSpecificOptions {
    /**
     * A list of delimiters to look for math
     *
     * @default [
     *   {left: "$$", right: "$$", display: true},
     *   {left: "\\(", right: "\\)", display: false},
     *   {left: "\\[", right: "\\]", display: true}
     * ]
     */
    delimiters?: ReadonlyArray<RenderMathInElementSpecificOptionsDelimiters> | undefined;
    /**
     * A list of DOM node types to ignore when recursing through
     *
     * @default ["script", "noscript", "style", "textarea", "pre", "code"]
     */
    ignoredTags?: ReadonlyArray<keyof HTMLElementTagNameMap> | undefined;
    /**
     * A list of DOM node class names to ignore when recursing through
     *
     * @default []
     */
    ignoredClasses?: string[] | undefined;

    /**
     * A callback method returning a message and an error stack in case of an critical error during rendering
     * @param msg Message generated by KaTeX
     * @param err Caught error
     *
     * @default console.error
     */
    errorCallback?(msg: string, err: Error): void;
}

/**
 * renderMathInElement options contain KaTeX render options and renderMathInElement specific options
 */
export type RenderMathInElementOptions = KatexOptions & RenderMathInElementSpecificOptions;

/**
 * Auto-render TeX expressions in HTML element
 * @param elem HTML element to auto-render
 * @param options Render options
 */
export default function renderMathInElement(elem: HTMLElement, options?: RenderMathInElementOptions): void;
