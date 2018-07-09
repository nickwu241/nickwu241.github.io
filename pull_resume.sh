#!/bin/sh
set -xeuo pipefail

RESUME_URL='https://www.dropbox.com/s/2t1drxvaavmesai/resume.pdf'
curl ${RESUME_URL} -L > resume.pdf
