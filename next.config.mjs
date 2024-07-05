/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects(){
     return [
      {
        source:'/about',
        destination:'/post',
        permanent:true,
       },
      
     ]

  },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '*',
            port: '',
            pathname: '**',
          },
        ],
      },
};

export default nextConfig;
