import type { NextConfig } from "next";
import type { Options } from "@statoscope/webpack-plugin";

export interface NextStatoscopeOptions extends Options {
	enabled?: boolean;
}

declare const NextStatoscope =
	(options?: NextStatoscopeOptions) => (config?: NextConfig) =>
		NextConfig;

export = NextStatoscope;
