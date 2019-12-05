#!/usr/bin/env bash

set -eu

cd $(dirname $0)
rm -r static
cd vue-project
npm run build
