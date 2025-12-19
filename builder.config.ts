import { defineBuilderConfig, githubRepoSyncPlugin } from '@afilmory/builder'

export default defineBuilderConfig(() => ({
  storage: {
    provider: 's3',
    bucket: process.env.S3_BUCKET_NAME!,
    region: process.env.S3_REGION!,
    accessKeyId: process.env.S3_ACCESS_KEY_ID!,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
    prefix: 'photos/',
  },
  plugins: [
    githubRepoSyncPlugin({
      repo: {
        enable: true,
        url: process.env.BUILDER_REPO_URL!,
        token: process.env.GIT_TOKEN!,
        branch: process.env.BUILDER_REPO_BRANCH || 'main',
      },
    }),
  ],
}))