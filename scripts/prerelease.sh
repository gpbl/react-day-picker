#!/bin/bash
set -e

cd packages/react-day-picker

VERSION=`npm version prerelease --preid=alpha`;

echo This script will pre-release react-day-picker on npm.
echo Version: $VERSION
echo
echo Committing changes...
git commit -a -m "Bump ${VERSION}"

echo Tagging version...
git tag $VERSION -a -m "${VERSION}"

echo Pushing changes...
git push

echo Pushing tags...
git push --tags

echo ✅ Done!
