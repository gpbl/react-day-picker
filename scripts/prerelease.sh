#!/bin/bash
set -e

cd packages/react-day-picker

VERSION=`npm version prerelease --preid=alpha`;

echo Publishing $VERSION...

git commit -a -m "Bump ${VERSION}"
git tag $VERSION -a -m "${VERSION}"
git push
git push --tags
