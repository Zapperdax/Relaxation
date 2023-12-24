#!/bin/bash

# Your Git repository path
repo_path="/home/zapperdax/Desktop/Codes/React/Commiting-REPO"

# The file you want to edit
file_to_edit="$repo_path/src/dailyTimeStamps.txt"


    # Generate a new commit message with the current date
    commit_message="Some Changes"

    # Navigate to your Git repository directory
    cd "$repo_path"
    
    # Generate a random number between 1 and 40
    random_number=$((10 + RANDOM % 40))

    # Loop for the generated random number of times
    for ((i=1; i<=$random_number; i++))
    do
        # Make a change to the file (e.g., add a timestamp)
        echo "Timestamp: $(date)" >> "$file_to_edit"
	# Before and after Git commands, add lines to print debugging information

        # Perform Git commands
        git add .
        git commit -m "$commit_message"
        sleep $((10 + RANDOM % 100))
    done
    
    git push -u origin main
    

