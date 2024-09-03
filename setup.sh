#!/bin/bash

# Prompt the user for the project name
read -r -p "What's the project name in lower case with no spaces? " projectName

# Define the directory to search in and the directories to exclude
searchDir="."
excludeDirs=(.angular node_modules)

# Construct the find command excluding specified directories
findCommand="find $searchDir"
for dir in "${excludeDirs[@]}"; do
  findCommand+=" ! -path '*/$dir/*'"
done
findCommand+=" -type f"

# Execute the find command and replace occurrences of "angular-base" with the project name
eval "$findCommand" | while read -r file; do
  # Check if the file is a text file before replacing
  if file "$file" | grep -q text; then
    sed -i '' "s/angular-base/$projectName/g" "$file"
    echo "Updated $file"
  fi
done

# Rename the angular-base directory to the project name
cd ..
mv angular-base "$projectName"
cd "$projectName" || exit

# Install the project dependencies
npm i && npm audit fix
