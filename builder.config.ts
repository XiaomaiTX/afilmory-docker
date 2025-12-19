import { defineBuilderConfig, githubRepoSyncPlugin } from '@afilmory/builder'

export default defineBuilderConfig(() => ({
  plugins: [
    // Use remote repository as manifest and thumbnail cache
    githubRepoSyncPlugin({
      repo: {
        enable: false,
        url: 'https://github.com/xxx/xxx',
      },
    }),
  ],
  storage: {
    // Storage configuration
    accessKeyId: 'XXX',
    secretAccessKey: 'XXXXXY',
    provider: 's3',
    bucket: 'your-photos-bucket',
    endpoint: 'your-s3-endpoint',
    region: 'us-east-1',
    prefix: 'photos/',
    customDomain: 'cdn.yourdomain.com',
  },
}))
