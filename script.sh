#!/bin/bash

# Get all modified files (excluding untracked)
modified_files=$(git diff --cached --name-only)

# Loop through each file
for file in $modified_files; do
  # Build commit message (change "default message" as needed)
  message="Changes to $file"

  # Stage the file
  git add "$file"

  # Commit with the message
  git commit -m "$message"
done

echo "Individual commits created for modified files."
