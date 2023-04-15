const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
    webpack: (config, options) => {
        const { isServer } = options;
        config.plugins.push(
            new NextFederationPlugin({
                name: 'menu',
                remotes: {
                    main: `main@http://localhost:3000/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
                },
                filename: 'static/chunks/remoteEntry.js',
                exposes:{
                    './menu': "./src/pages/home"
                },
                extraOptions: {
                    exposePages: true
                }
            })
        );
        return config;
    }
}

module.exports = nextConfig