import requests

token_file = r'I:\桌面\小小灰的3D工坊\token.txt'
with open(token_file, 'r', encoding='utf-8') as f:
    token = f.read().strip()

repo = 'Mosan-258/my-site'
headers = {'Authorization': f'token {token}', 'User-Agent': 'Mozilla/5.0', 'Accept': 'application/vnd.github.v3+json'}

# Check Pages status
r = requests.get(f'https://api.github.com/repos/{repo}/pages', headers=headers)
print(f'Pages status: {r.status_code}')
print(r.json())

# Check branches
r2 = requests.get(f'https://api.github.com/repos/{repo}/branches', headers=headers)
for b in r2.json():
    print(f"Branch: {b['name']}")
