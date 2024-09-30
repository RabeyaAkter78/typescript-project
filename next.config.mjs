/** @type {import('next').NextConfig} */
const nextConfig = {
    plugins: [
        {
          // plugin: CracoLessPlugin,
          options: {
            lessLoaderOptions: {
              lessOptions: {
                modifyVars: { '@primary-color': '#1DA57A' },
                javascriptEnabled: true,
              },
            },
          },
        },
      ],
};

export default nextConfig;
