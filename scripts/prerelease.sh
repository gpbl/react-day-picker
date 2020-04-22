#!/bin/bash
set -e

cd packages/react-day-picker

VERSION=`npm version prerelease --preid=alpha`;

echo 👋 This script will pre-release react-day-picker on npm.
echo Version: $VERSION
echo
echo 📡 Committing changes...
git commit -a -m "Bump ${VERSION}" | sed 's/^/  /'

echo 🏷 Tagging version...
git tag $VERSION -a -m "${VERSION}" | sed 's/^/  /'

echo 📡 Pushing changes...
git push | sed 's/^/  /'

echo 📡 Pushing tags...
git push --tags | sed 's/^/  /'

echo 
echo ✅ Done!
