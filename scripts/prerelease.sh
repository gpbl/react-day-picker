#!/bin/bash
set -e

cd packages/react-day-picker

VERSION=`npm version prerelease --preid=alpha`;

echo 👋 This script will pre-release react-day-picker on npm.
echo 🚀 Version: $VERSION
echo
echo 📡 Committing changes...

printf "\n"
git commit -a -m "Bump ${VERSION}" | sed 's/\(.*\)/  \1/'
printf "\n"

echo ✏️ Tagging version...
printf "\n"
git tag $VERSION -a -m "${VERSION}" | sed 's/\(.*\)/  \1/'
printf "\n"

echo 📡Pushing changes...
printf "\n"
git push | sed 's/\(.*\)/  \1/'
printf "\n"

echo 📡Pushing tags...
printf "\n"
git push --tags | sed 's/\(.*\)/  \1/'
printf "\n"

echo 
echo ✅ Done!
