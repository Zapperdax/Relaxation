#!/bin/bash

source "$(dirname "$0")/.env"
# Your Git repository path
repo_path="https://github.com/Zapperdax/Relaxation"

# The file you want to edit
file_to_edit="$repo_path/timestamps.txt"

# Your GitHub branch
branch="main"

# Set Git credentials
git config --global credential.helper store
echo -e "https://${github_username}:${github_token}@github.com" > ~/.git-credentials

# Generate a new commit message with the current date
commit_message="Some Changes"

# Navigate to your Git repository directory
cd "$repo_path"

# Generate a random number between 1 and 40
random_number=$((10 + RANDOM % 5))

# Loop for the generated random number of times
for ((i=1; i<=$random_number; i++))
do
    # Make a change to the file (e.g., add a timestamp)
    echo "Timestamp: $(date)" >> "$file_to_edit"

    # Before and after Git commands, add lines to print debugging information

    # Perform Git commands
    git add .
    git commit -m "$commit_message"
    # sleep $((10 + RANDOM % 100))
done

# Push to the specified branch in the remote repository
git push -u origin "$branch"

