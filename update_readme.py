#!/usr/bin/env python3
"""
Enhanced README updater with dynamic stats and 4D visualization elements
"""

import requests
import json
import re
from datetime import datetime
import os

def get_github_stats(username):
    """Fetch GitHub stats for the user"""
    try:
        # GitHub API endpoint
        api_url = f"https://api.github.com/users/{username}"
        response = requests.get(api_url)
        
        if response.status_code == 200:
            data = response.json()
            return {
                'public_repos': data.get('public_repos', 0),
                'followers': data.get('followers', 0),
                'following': data.get('following', 0),
                'created_at': data.get('created_at', ''),
                'updated_at': data.get('updated_at', '')
            }
    except Exception as e:
        print(f"Error fetching GitHub stats: {e}")
    
    return None

def get_leetcode_stats(username):
    """Fetch LeetCode stats (mock implementation)"""
    # Note: LeetCode doesn't have a public API, so this is a placeholder
    # In a real implementation, you might use web scraping or third-party APIs
    return {
        'problems_solved': 150,  # Placeholder
        'ranking': 50000,        # Placeholder
        'acceptance_rate': 65.5  # Placeholder
    }

def generate_dynamic_content():
    """Generate dynamic content for README"""
    current_time = datetime.now()
    
    # Dynamic greeting based on time
    hour = current_time.hour
    if 5 <= hour < 12:
        greeting = "Good Morning! 🌅"
    elif 12 <= hour < 17:
        greeting = "Good Afternoon! ☀️"
    elif 17 <= hour < 21:
        greeting = "Good Evening! 🌆"
    else:
        greeting = "Good Night! 🌙"
    
    # Dynamic status
    status_messages = [
        "🚀 Building the future, one commit at a time",
        "💡 Turning coffee into code",
        "🎯 Focused on creating impactful solutions",
        "🌟 Learning something new every day",
        "⚡ Optimizing algorithms and life"
    ]
    
    import random
    current_status = random.choice(status_messages)
    
    return {
        'greeting': greeting,
        'status': current_status,
        'last_updated': current_time.strftime("%B %d, %Y at %H:%M UTC")
    }

def update_readme():
    """Update README.md with latest stats and dynamic content"""
    username = "saurabhhhcodes"
    
    # Get stats
    github_stats = get_github_stats(username)
    leetcode_stats = get_leetcode_stats(username)
    dynamic_content = generate_dynamic_content()
    
    # Read current README
    try:
        with open('README.md', 'r', encoding='utf-8') as file:
            readme_content = file.read()
    except FileNotFoundError:
        print("README.md not found!")
        return
    
    # Update dynamic sections if needed
    # This is a basic implementation - you can expand this to update specific sections
    
    # Add a comment with last update time
    update_comment = f"<!-- Last updated: {dynamic_content['last_updated']} -->"
    
    # Check if the comment already exists and update it
    if "<!-- Last updated:" in readme_content:
        readme_content = re.sub(
            r'<!-- Last updated:.*? -->',
            update_comment,
            readme_content
        )
    else:
        # Add the comment at the end
        readme_content += f"\n\n{update_comment}\n"
    
    # Write updated README
    with open('README.md', 'w', encoding='utf-8') as file:
        file.write(readme_content)
    
    print(f"README updated successfully at {dynamic_content['last_updated']}")
    
    if github_stats:
        print(f"GitHub Stats - Repos: {github_stats['public_repos']}, Followers: {github_stats['followers']}")

if __name__ == "__main__":
    update_readme()
