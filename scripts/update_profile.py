import os
import json
import requests
from datetime import datetime
import random
import re

# Configuration
GITHUB_USERNAME = "saurabhhhcodes"
README_PATH = "README.md"
PORTFOLIO_DATA_PATH = "portfolio-website/src/data"
GITHUB_TOKEN = os.environ.get("GITHUB_TOKEN")

def get_github_data():
    """Fetch user data and repositories from GitHub."""
    headers = {}
    if GITHUB_TOKEN:
        headers["Authorization"] = f"token {GITHUB_TOKEN}"

    # Fetch User Data
    user_url = f"https://api.github.com/users/{GITHUB_USERNAME}"
    user_res = requests.get(user_url, headers=headers)
    user_data = user_res.json()

    # Fetch Repositories
    repos_url = f"https://api.github.com/users/{GITHUB_USERNAME}/repos?sort=updated&per_page=100"
    repos_res = requests.get(repos_url, headers=headers)
    repos_data = repos_res.json()

    return user_data, repos_data

def fetch_readme_summary(repo_name):
    """Fetch README content and extract a summary."""
    try:
        url = f"https://api.github.com/repos/{GITHUB_USERNAME}/{repo_name}/readme"
        headers = {}
        if GITHUB_TOKEN:
            headers["Authorization"] = f"token {GITHUB_TOKEN}"
            
        res = requests.get(url, headers=headers)
        if res.status_code == 200:
            import base64
            content = base64.b64decode(res.json()['content']).decode('utf-8')
            
            # Simple parsing to find first paragraph
            lines = content.split('\n')
            summary = ""
            for line in lines:
                line = line.strip()
                # Skip headers, badges, images, empty lines
                if not line or line.startswith('#') or line.startswith('![') or line.startswith('<') or line.startswith('[!'):
                    continue
                # Skip lines that are just links or badges
                if line.startswith('[') and ']' in line and '(' in line:
                    continue
                    
                summary = line
                break
            
            if summary:
                # Truncate if too long
                return summary[:150] + "..." if len(summary) > 150 else summary
                
    except Exception as e:
        print(f"Error fetching README for {repo_name}: {e}")
    
    return "No description available."

def process_projects(repos_data):
    """Process repositories into portfolio project format."""
    projects = []
    # Filter for non-forks and having description, or specific important forks
    # For now, let's include all non-forks with descriptions
    
    # Custom list of highlighted projects (based on README) to ensure they are included/prioritized
    highlighted_repos = [
        "You.Fyi", "you.fyi", "ai-outlook-calendar-agent", "chatlly", "catalyst-bio", 
        "OpenBioGen-AI", "geneinsight-platform", "smart-plant-care-assistant-1",
        "GeneInsightBackend"
    ]

    for repo in repos_data:
        if not isinstance(repo, dict): continue # Safety check
        
        # Case insensitive check for highlighted repos
        is_highlighted = repo['name'].lower() in [h.lower() for h in highlighted_repos]
        
        # Allow if (not fork OR highlighted) AND (description OR highlighted)
        if (not repo.get('fork') or is_highlighted) and (repo.get('description') or is_highlighted):
            description = repo['description']
            if not description and is_highlighted:
                print(f"Fetching README summary for {repo['name']}...")
                description = fetch_readme_summary(repo['name'])
            
            # Hardcode homepage for You.Fyi
            if "you.fyi" in repo['name'].lower():
                repo['homepage'] = "https://you-fyi.onrender.com/ui/"
                
            projects.append({
                "id": repo['id'],
                "name": repo['name'].replace("-", " ").title(),
                "description": description or "No description available.",
                "html_url": repo['html_url'],
                "homepage": repo['homepage'],
                "language": repo['language'],
                "stargazers_count": repo['stargazers_count'],
                "updated_at": repo['updated_at'],
                "topics": repo.get('topics', [])
            })
    
    # Sort by stars then update time
    projects.sort(key=lambda x: (x['stargazers_count'], x['updated_at']), reverse=True)
    
    # Move You.Fyi to the top
    you_fyi_projects = [p for p in projects if "you.fyi" in p['name'].lower()]
    other_projects = [p for p in projects if "you.fyi" not in p['name'].lower()]
    
    projects = you_fyi_projects + other_projects
    
    return projects

def update_portfolio_data(user_data, projects):
    """Update JSON files for the portfolio website."""
    os.makedirs(PORTFOLIO_DATA_PATH, exist_ok=True)
    
    # Profile Data
    profile = {
        "name": user_data.get("name", "Saurabh Kumar Bajpai"),
        "bio": user_data.get("bio", ""),
        "avatar_url": user_data.get("avatar_url", ""),
        "location": user_data.get("location", ""),
        "public_repos": user_data.get("public_repos", 0),
        "followers": user_data.get("followers", 0),
        "following": user_data.get("following", 0),
        "html_url": user_data.get("html_url", ""),
        "blog": user_data.get("blog", ""),
        "company": user_data.get("company", ""),
        "twitter_username": user_data.get("twitter_username", ""),
        "updated_at": datetime.now().isoformat()
    }
    
    with open(os.path.join(PORTFOLIO_DATA_PATH, "profile.json"), "w") as f:
        json.dump(profile, f, indent=2)
        
    # Projects Data
    with open(os.path.join(PORTFOLIO_DATA_PATH, "projects.json"), "w") as f:
        json.dump(projects, f, indent=2)
        
    print(f"Updated portfolio data in {PORTFOLIO_DATA_PATH}")

def update_readme(user_data, projects):
    """Update README.md with dynamic content."""
    if not os.path.exists(README_PATH):
        print(f"{README_PATH} not found, skipping.")
        return

    with open(README_PATH, "r") as f:
        content = f.read()

    # Update Projects Section
    if "<!-- START_SECTION:projects -->" in content and "<!-- END_SECTION:projects -->" in content:
        projects_md = '<div align="center">\n\n'
        
        for project in projects:
            name = project['name']
            url = project['html_url']
            desc = project['description']
            homepage = project.get('homepage')
            language = project.get('language')
            topics = project.get('topics', [])
            
            # Emoji based on topics/name
            emoji = "💻"
            if "ai" in name.lower() or "gpt" in name.lower(): emoji = "🤖"
            elif "bio" in name.lower(): emoji = "🧬"
            elif "plant" in name.lower(): emoji = "🌱"
            
            projects_md += f"### {emoji} **[{name}]({url})**\n"
            if homepage:
                projects_md += f"**🌐 [LIVE DEMO]({homepage})**\n"
            
            projects_md += f"{desc}\n\n"
            
            if language or topics:
                stack = [language] if language else []
                stack.extend(topics[:4]) # Limit topics
                stack_str = ", ".join([s for s in stack if s])
                projects_md += f"- 🛠️ **Tech Stack**: {stack_str}\n"
            
            projects_md += "\n---\n\n"
            
        projects_md += "</div>"
        
        # Replace content
        pattern = r"<!-- START_SECTION:projects -->[\s\S]*?<!-- END_SECTION:projects -->"
        replacement = f"<!-- START_SECTION:projects -->\n{projects_md}\n<!-- END_SECTION:projects -->"
        content = re.sub(pattern, replacement, content)

    # Update Last Updated Time
    now = datetime.now().strftime("%B %d, %Y at %H:%M UTC")
    
    # Example: Update a specific section if markers exist (to be implemented in README first)
    # For now, we'll just ensure the footer timestamp is updated or added
    
    footer_marker = "<!-- Last updated:"
    if footer_marker in content:
        content = re.sub(r"<!-- Last updated: .*? -->", f"<!-- Last updated: {now} -->", content)
    else:
        content += f"\n\n<!-- Last updated: {now} -->"
        
    with open(README_PATH, "w") as f:
        f.write(content)
        
    print(f"Updated {README_PATH}")

def main():
    print("Fetching GitHub data...")
    try:
        user_data, repos_data = get_github_data()
        projects = process_projects(repos_data)
        
        print(f"Found {len(projects)} projects.")
        
        update_portfolio_data(user_data, projects)
        update_readme(user_data, projects)
        
        print("Done!")
    except Exception as e:
        print(f"Error: {e}")
        # Don't fail the action if API limit reached or network error, just log it
        pass

if __name__ == "__main__":
    main()
