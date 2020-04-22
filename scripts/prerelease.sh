#!/bin/bash
set -e

cd packages/react-day-picker

VERSION=`npm version prerelease --preid=alpha`;

echo 👋 This script will pre-release react-day-picker on npm.
echo 🚀 Version: $VERSION
echo
echo 📡 Committing changes...

printf "\n"
git commit package.json -m "Bump ${VERSION}"
printf "\n"

echo 📝 Tagging version...
git tag $VERSION -a -m "${VERSION}"

echo 📡 Pushing changes...
printf "\n"
git push
printf "\n"

echo 📡 Pushing tags...
printf "\n"
git push --tags
printf "\n"

echo 
echo ✅ Done!
