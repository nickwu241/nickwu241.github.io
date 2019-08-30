#!/bin/sh
set -euo pipefail

# Create files to be deployed at src/dist
npm run --prefix src/ generate

# Remove our old files
rm -rf blog contact images 200.html favicon.png index.html

# Copy new files to root
cp -r src/dist/ .

# Push the new files
git add _nuxt blog contact images 200.html favicon.png index.html && \
  git commit -m "Deploy $(git rev-parse HEAD)" && \
  git push origin master
