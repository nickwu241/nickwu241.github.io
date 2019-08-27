# Nick's Personal Website

My website features my projects / blog posts, you can also learn more about me, [check it out now](https://nickwu241.github.io)!

## Development

I use Vue.js and Nuxt.js for the frontend framework and Tailwind CSS for styling.

The project source code is in the `src` directory, should be straight forward to start the project.

``` bash
# Install dependencies if needed
npm install

# Run the website locally
npm run dev
```

## Deployment

1. Make sure to commit all source code changes
2. Run the deploy script which includes building, adding a deploy commit, and pushing to remote.

    ``` bash
    ./scipts/deploy.sh
    ```

If you just need to update your resume, run:

``` bash
./scripts/pull_resume.sh <resume update description>
```
