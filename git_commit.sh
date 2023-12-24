#!/bin/bash

source "$(dirname "$0")/.env"
# Your GitHub repository
repo="Zapperdax/Relaxation"

# The file you want to edit using GitHub API
file_path="timestamps.txt"

# Your GitHub branch
branch="main"

# Generate a new commit message with the current date
commit_message="Some Changes"

# Navigate to your Git repository directory
cd "$(dirname "$0")"

# Retrieve the SHA of the existing content
sha=$(curl -s -H "Authorization: token ${github_token}" "https://api.github.com/repos/$repo/contents/$file_path?ref=$branch" | jq -r .sha)

# Generate a random number between 1 and 5
random_number=$((1 + RANDOM % 5))

# Loop for the generated random number of times
for ((i=1; i<=$random_number; i++))
do
    # Make a change to the file (e.g., add a timestamp)
    echo "Timestamp: $(date)" >> "$file_path"

    # Before and after Git commands, add lines to print debugging information

    # Perform Git commands
    git add .
    git commit -m "$commit_message"
    # sleep $((10 + RANDOM % 1000))
done

# Push to the specified branch in the remote repository
git push -u origin "$branch"

# Edit the file using GitHub API, including the SHA
curl -X PUT \
  -H "Authorization: token ${github_token}" \
  -H "Content-Type: application/json" \
  -d '{"message": "'"$commit_message"'", "content": "'"$(echo -n "Timestamp: $(date)" | base64)"'", "branch": "'"$branch"'", "sha": "'"$sha"'"}' \
  "https://api.github.com/repos/$repo/contents/$file_path"
