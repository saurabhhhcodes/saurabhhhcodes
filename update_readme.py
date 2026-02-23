#!/usr/bin/env python3
"""
Enhanced README updater with dynamic stats and 4D visualization elements
"""

import requests
import json
import re
from datetime import datetime
import os
import time
import random

def get_github_stats(username):
    """Fetch GitHub stats for the user"""
    max_retries = 3
    retry_delay = 2  # seconds
    
    for attempt in range(max_retries):
        try:
            # GitHub API endpoint
            api_url = f"https://api.github.com/users/{username}"
            response = requests.get(api_url, timeout=10)
            
            # Check for rate limiting
            if response.status_code == 403:
                print(f"Rate limited. Waiting {retry_delay} seconds before retry...")
                time.sleep(retry_delay)
                retry_delay *= 2  # Exponential backoff
                continue
            
            if response.status_code == 200:
                data = response.json()
                return {
                    'public_repos': data.get('public_repos', 0),
                    'followers': data.get('followers', 0),
                    'following': data.get('following', 0),
                    'created_at': data.get('created_at', ''),
                    'updated_at': data.get('updated_at', '')
                }
            else:
                print(f"GitHub API returned status code: {response.status_code}")
                if attempt < max_retries - 1:
                    time.sleep(retry_delay)
                    retry_delay *= 2
                    continue
                    
        except requests.exceptions.Timeout:
            print(f"Request timeout (attempt {attempt + 1}/{max_retries})")
            if attempt < max_retries - 1:
                time.sleep(retry_delay)
                retry_delay *= 2
        except Exception as e:
            print(f"Error fetching GitHub stats (attempt {attempt + 1}/{max_retries}): {e}")
            if attempt < max_retries - 1:
                time.sleep(retry_delay)
                retry_delay *= 2
    
    print("Failed to fetch GitHub stats after all retries")
    return None

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
    dynamic_content = generate_dynamic_content()
    
    # Read current README
    try:
        with open('README.md', 'r', encoding='utf-8') as file:
            content = file.read()
    except FileNotFoundError:
        print("README.md not found!")
        return

    # 1. Update Badge-style stats (e.g., Total_Projects-25+)
    if github_stats:
        repos = github_stats['public_repos']
        # Update project count if it's strictly greater than the current badge
        # Pattern: Total_Projects-([0-9]+)\+
        match = re.search(r'Total_Projects-([0-9]+)\+', content)
        if match:
            current_badge_val = int(match.group(1))
            if repos > current_badge_val:
                new_badge = f"Total_Projects-{repos}+"
                content = content.replace(f"Total_Projects-{current_badge_val}+", new_badge)
                print(f"Updated Projects Badge: {current_badge_val}+ -> {repos}+")

    # 2. Update Update Comment
    update_comment = f"<!-- Last updated: {dynamic_content['last_updated']} -->"
    if "<!-- Last updated:" in content:
        content = re.sub(
            r'<!-- Last updated:.*? -->',
            update_comment,
            content
        )
    else:
        content += f"\n\n{update_comment}\n"
    
    # Write updated README
    with open('README.md', 'w', encoding='utf-8') as file:
        file.write(content)
    
    print(f"README updated successfully at {dynamic_content['last_updated']}")
    
    if github_stats:
        print(f"GitHub Stats - Repos: {github_stats['public_repos']}, Followers: {github_stats['followers']}")

if __name__ == "__main__":
    update_readme()
