#!/usr/bin/env bash

set -e

if [[ "false" != "$TRAVIS_PULL_REQUEST" ]]; then
	echo "Not deploying pull requests."
	exit
fi

if [[ "master" != "$TRAVIS_BRANCH" ]]; then
	echo "Not on the 'master' branch."
	exit
fi

echo "Create new .gitignore"
rm -rf .git
rm -r .gitignore

echo ".bowerrc
.editorconfig
.travis.yml
README.md
bin
bower.json
gulpfile.js
node_modules
package.json
tests
tmp" > .gitignore

export TZ="Asia/Tokyo"
DATESTR=`date +%Y%m%d-%H%M%S`
echo ${DATESTR}

cp -p ./.travis.yml.codedeploy dist/.travis.yml
cp -p ./appspec.yml dist/appspec.yml
cp -p ./scripts/* dist/scripts/*
cd dist

echo ".bowerrc
.editorconfig
README.md
bin
node_modules
package.json
tmp" > .gitignore

zip -r componentSample_${DATESTR}.zip ./componentSample/

git init
git config user.name ${USER_NAME}
git config user.email ${USER_EMAIL}
git branch
git add .
git commit --quiet -m "Deploy from travis ${DATESTR}"
git push --force --quiet "https://${GITHUB_TOKEN}@${GH_REF}" master:master
