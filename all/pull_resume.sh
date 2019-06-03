#!/bin/sh
set -xeuo pipefail

if [[ $# -ne 1 ]]; then 
  echo "Usage: $0 <update description>"
  exit 1
fi

RESUME_URL='https://www.dropbox.com/s/efojf141z0jas61/resume.pdf'
curl ${RESUME_URL} -L > resume.pdf
git add resume.pdf
git commit -m "Resume: $1"
git push origin master
