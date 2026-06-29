import requests

with open(r'I:\桌面\小小灰的3D工坊\token.txt', 'r', encoding='utf-8') as f:
    token = f.read().strip()

repo = 'Mosan-258/my-site'
headers = {'Authorization': f'token {token}', 'User-Agent': 'Mozilla/5.0', 'Accept': 'application/vnd.github.v3+json'}

# Enable GitHub Pages
r = requests.put(f'https://api.github.com/repos/{repo}/pages', 
    json={'build_type': 'legacy', 'source': {'branch': 'gh-pages', 'path': '/'}}, 
    headers=headers)
print(f'Enable Pages: {r.status_code}')
print(r.json())
