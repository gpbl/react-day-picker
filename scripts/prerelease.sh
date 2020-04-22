#!/bin/bash
set -e

cd packages/react-day-picker

VERSION=`npm version prerelease --preid=alpha`;

echo 👋This script will pre-release react-day-picker on npm.
echo 🚀$VERSION
echo
echo 📡Committing changes...

printf "\n"
git commit -a -m "Bump ${VERSION}" | sed 's/\(.*\)/  \1/'

echo 🏷Tagging version...
git tag $VERSION -a -m "${VERSION}" | sed 's/\(.*\)/  \1/'

echo 📡Pushing changes...
git push | sed 's/\(.*\)/  \1/'

echo 📡Pushing tags...
git push --tags | sed 's/\(.*\)/  \1/'

echo 
echo ✅ Done!
