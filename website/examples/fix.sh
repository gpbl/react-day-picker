#!/bin/bash

# Configuration: adjust the remote and branch if necessary
REMOTE="origin"
BRANCH="new_website"

# Fetch the latest list of files from the remote repository
git fetch $REMOTE

# Get a list of all objects in the remote repository
remote_files=$(git ls-tree -r $REMOTE/$BRANCH --name-only)
local_files=$(find . -type f | sed 's|^\./||')

# Compare local files with remote files to detect case differences
echo "Detecting case mismatches..."
declare -a case_mismatches
for file in $local_files; do
    if ! grep -qxFe "$file" <<<"$remote_files"; then
        case_mismatches+=("$file")
        echo "Case mismatch found for: $file"
    fi
done

# Loop through the case mismatches and prompt for fixing
for file in "${case_mismatch[@]}"; do
    # Prompt user input
    read -p "Do you want to fix the case for $file? [y/N] " yn
    case $yn in
        [Yy]* )
            # Generate a temporary filename not in use
            tmp_file=""
            while [[ -z "$tmp_file" || -e "$tmp_file" ]]; do
                tmp_file="${file}_tmp$RANDOM"
            done
            
            # Rename the file twice to correct the case
            git mv "$file" "$tmp_file"
            git mv "$tmp_file" "$file"
            echo "$file has been renamed."
            ;;
        * )
            echo "Skipped $file."
            ;;
    esac
done

# Feedback
if [ ${#case_mismatch[@]} -eq 0 ]; then
    echo "No case mismatches detected."
else
    echo "Case mismatch correction complete."
fi
