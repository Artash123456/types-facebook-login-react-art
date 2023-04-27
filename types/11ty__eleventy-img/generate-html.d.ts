import { Metadata } from '.';

declare namespace generateHTML {
    /**
     * Represents an <img> HTML tag and associated HTML attributes.
     * @template AddedAttributes User-provided attributes for the <img> tag.
     */
    interface ImgAttributes<AddedAttributes> {
        img: AddedAttributes & {
            src: string;
            width: number;
            height: number;
            srcset?: string;
            sizes?: string;
        };
    }

    /**
     * Represents a <source> HTML tag and associated HTML attributes.
     */
    interface SourceAttributes {
        source: {
            type: string;
            srcset: string;
            sizes?: string;
        };
    }

    /**
     * Represets a <picture> HTML tag and its child elements.
     * @template AddedAttributes User-provided attributes for the <img> tag.
     */
    interface PictureAttributes<AddedAttributes> {
        picture: [...SourceAttributes[], ImgAttributes<AddedAttributes>];
    }

    /**
     * Returns objects representing HTML tags for the given `metadata`.
     *
     * @param metadata Image metadata generated by `Image()`.
     * @param attributes Attributes for the <img> tag.
     * Must include `alt` (alt="" works okay).
     * Must include `sizes` when using multiple source widths.
     */
    function generateObject<AddedAttributes extends { alt: string }>(
        metadata: Metadata,
        attributes?: AddedAttributes,
    ): ImgAttributes<AddedAttributes> | PictureAttributes<AddedAttributes>;

    interface GenerateHTMLOptions {
        /**
         * You can use the whitespaceMode option to strip the whitespace from the output of the <picture> element
         * (a must-have for use in markdown files).
         * @default 'block'
         */
        whitespaceMode?: 'inline' | 'block';
    }
}

/**
 * Returns a HTML string for the given `metadata`.
 * Will be either a <picture> or <img>.
 *
 * @param metadata Image metadata generated by `Image()`.
 * @param attributes Attributes for the <img> tag.
 * Must include `alt` (alt="" works okay).
 * Must include `sizes` when using multiple source widths.
 */
declare function generateHTML(
    metadata: Metadata,
    attributes?: { alt: string } & Partial<Record<string, unknown>>,
    options?: generateHTML.GenerateHTMLOptions,
): string;

export = generateHTML;
