#!/bin/bash
set -e

indent() {
  local indentSize=2
  local indent=1
  if [ -n "$1" ]; then indent=$1; fi
  pr -to $(($indent * $indentSize))
}

cd packages/react-day-picker

VERSION=`npm version prerelease --preid=alpha`;

echo 👋 This script will pre-release react-day-picker on npm.
echo    Version: $VERSION
echo
echo 📡 Committing changes...
git commit -a -m "Bump ${VERSION}" | indent

echo 🏷  Tagging version...
git tag $VERSION -a -m "${VERSION}" | indent

echo 📡 Pushing changes...
git push | indent

echo 📡 Pushing tags...
git push --tags | indent

echo 
echo ✅ Done!
