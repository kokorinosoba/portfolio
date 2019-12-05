#!/usr/bin/env bash

set -eu

cd $(dirname $0)
rmtrash static
cd vue-project
npm run build
