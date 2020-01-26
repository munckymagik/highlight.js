#!/bin/bash

set -e

node tools/build.js x86att rust cpp
cp build/highlight.pack.js ../assembly-tut/theme/highlight.js

