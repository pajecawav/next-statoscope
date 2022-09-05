module.exports =
	({ enabled = true, ...statoscopeConfig } = {}) =>
	(nextConfig = {}) => {
		return Object.assign({}, nextConfig, {
			webpack(config, options) {
				if (enabled) {
					const path = require("path");
					const StatoscopePlugin =
						require("@statoscope/webpack-plugin").default;

					const saveReportTo = path.resolve(
						options.config.distDir,
						"statoscope"
					);

					config.plugins.push(
						new StatoscopePlugin({
							saveReportTo,
							...statoscopeConfig,
						})
					);
				}

				if (typeof nextConfig.webpack === "function") {
					return nextConfig.webpack(config, options);
				}

				return config;
			},
		});
	};
