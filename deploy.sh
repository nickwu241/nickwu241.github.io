#!/bin/sh
set -euo pipefail

npm run build && \
  git add dist && \
  git commit -m "Deploy $(git rev-parse HEAD)" && \
  git push origin master
