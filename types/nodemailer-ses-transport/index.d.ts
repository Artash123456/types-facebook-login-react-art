// Type definitions for nodemailer-ses-transport 1.5
// Project: https://github.com/nodemailer/nodemailer-ses-transport
// Definitions by: Seth Westphal <https://github.com/westy92>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as AWS from "aws-sdk2-types";
import * as nodemailer from "nodemailer";

declare namespace sesTransport {
    interface SesOptions {
        SES: AWS.SES;
        component?: string | undefined;
        maxConnections?: number | undefined;
        sendingRate?: number | undefined;
    }
}

declare function sesTransport(options: sesTransport.SesOptions): nodemailer.Transport;

export = sesTransport;
