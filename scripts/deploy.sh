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

git init
git config user.name ${USER_NAME}
git config user.email ${USER_EMAIL}
git add .
git commit --quiet -m "Deploy from travis"
git push --force --quiet "https://${GITHUB_TOKEN}@${GH_REF}" master:release > /dev/null 2>&1
