#!/bin/bash
 
commit_name="`date +%Y%m%d%H`_commit"
echo "====git auto push start..."
echo $commit_name
git add .
git commit -m $commit_name
npm version patch
git push
echo "====git auto push end..."