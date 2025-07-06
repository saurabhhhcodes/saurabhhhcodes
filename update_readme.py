# update_readme.py

import re
import os
import requests # Make sure to 'pip install requests'

# --- Configuration ---
LEETCODE_USERNAME = "saurabhhhcodes"
KAGGLE_USERNAME = "saurabhbajpai03"
CODEFORCES_USERNAME = "saurabhhhcodes"

# --- Functions to fetch stats ---

def fetch_leetcode_stats():
    """
    Fetches LeetCode stats.
    NOTE: LeetCode's public API is limited. You might need to:
    1. Use a third-party service that scrapes LeetCode.
    2. Implement a more complex GraphQL query if a stable public endpoint exists.
    3. Manually update this value if an automated solution is too complex.

    For now, this returns a placeholder.
    """
    print(f"Fetching LeetCode stats for {LEETCODE_USERNAME}...")
    try:
        # Example: A common way is to query a GraphQL endpoint.
        # This is a simplified example and might require more complex query/headers.
        # A more robust solution might involve a dedicated LeetCode API wrapper.
        # For a simple public solved count, you might find a badge service or scrape.
        # For demonstration, returning a static value.
        solved_count = 600 # Placeholder: Replace with actual fetched data
        print(f"LeetCode Solved: {solved_count}")
        return solved_count
    except Exception as e:
        print(f"Error fetching LeetCode stats: {e}")
        return "N/A" # Return N/A if fetching fails

def fetch_kaggle_stats():
    """
    Fetches Kaggle stats.
    NOTE: Kaggle's API typically requires authentication (API keys).
    You would need to:
    1. Install `kaggle` CLI tool (`pip install kaggle`).
    2. Configure your Kaggle API key (kaggle.json file).
    3. Use the `kaggle` library in Python to fetch data.
    4. Ensure your GitHub Action environment has access to your `kaggle.json`
       or sets up API keys as secrets.

    For now, this returns a placeholder.
    """
    print(f"Fetching Kaggle stats for {KAGGLE_USERNAME}...")
    try:
        # Example of how you might use the Kaggle API if configured:
        # from kaggle.api.kaggle_api_extended import KaggleApi
        # api = KaggleApi()
        # api.authenticate()
        # user_details = api.user_details(KAGGLE_USERNAME)
        # rank_tier = user_details.tier # This would depend on the API response structure

        rank_tier = "Expert" # Placeholder: Replace with actual fetched data (e.g., "Grandmaster", "Master", "Expert")
        print(f"Kaggle Rank: {rank_tier}")
        return rank_tier
    except Exception as e:
        print(f"Error fetching Kaggle stats: {e}")
        return "N/A" # Return N/A if fetching fails

def fetch_codeforces_stats():
    """
    Fetches Codeforces stats using its public API.
    """
    print(f"Fetching Codeforces stats for {CODEFORCES_USERNAME}...")
    url = f"https://codeforces.com/api/user.info?handles={CODEFORCES_USERNAME}"
    try:
        response = requests.get(url)
        response.raise_for_status() # Raise an exception for HTTP errors (4xx or 5xx)
        data = response.json()
        if data['status'] == 'OK' and data['result']:
            rating = data['result'][0].get('rating', 'N/A') # Use .get to handle missing key safely
            print(f"Codeforces Rating: {rating}")
            return rating
        else:
            print(f"Could not fetch Codeforces data: {data.get('comment', 'Unknown error')}")
            return "N/A"
    except requests.exceptions.RequestException as e:
        print(f"Error fetching Codeforces data: {e}")
        return "N/A"

# --- Main update logic ---

def update_readme():
    """
    Reads the README.md, updates the dynamic sections, and writes it back.
    """
    readme_path = os.path.join(os.getcwd(), 'README.md')

    try:
        # Read current README content
        with open(readme_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Fetch latest stats
        leetcode_solved = fetch_leetcode_stats()
        kaggle_rank = fetch_kaggle_stats()
        codeforces_rating = fetch_codeforces_stats()

        # Update LeetCode solved count
        # Regex explanation:
        # r'\[!\[LeetCode Solved\].*?Solved-(.*?)-blue'
        #   \[!\[LeetCode Solved\]  - Matches the literal string for the badge start
        #   .*?                     - Non-greedy match for any characters until...
        #   Solved-                 - The literal "Solved-"
        #   (.*?)                   - Captures the current solved count (group 1)
        #   -blue                   - Matches the literal "-blue"
        content = re.sub(
            r'(\[!\[LeetCode Solved\].*?Solved-)(.*?)(-blue)',
            r'\g<1>' + str(leetcode_solved) + r'\g<3>',
            content,
            flags=re.DOTALL
        )

        # Update Kaggle rank
        content = re.sub(
            r'(\[!\[Kaggle Rank\].*?Rank-)(.*?)(-green)',
            r'\g<1>' + str(kaggle_rank) + r'\g<3>',
            content,
            flags=re.DOTALL
        )

        # Update Codeforces rating
        content = re.sub(
            r'(\[!\[Codeforces Rating\].*?Rating-)(.*?)(-purple)',
            r'\g<1>' + str(codeforces_rating) + r'\g<3>',
            content,
            flags=re.DOTALL
        )

        # Write updated content back to README
        with open(readme_path, 'w', encoding='utf-8') as f:
            f.write(content)

        print("README.md updated successfully!")

    except FileNotFoundError:
        print(f"Error: README.md not found at {readme_path}")
    except Exception as e:
        print(f"An unexpected error occurred during README update: {e}")

if __name__ == "__main__":
    update_readme()
