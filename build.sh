#!/usr/bin/env bash

set -eu

cd $(dirname $0)
[[ -d static ]] && rm -r static
cd vue-project
npm run build
