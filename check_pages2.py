import requests
with open(r'I:\桌面\小小灰的3D工坊\token.txt', 'r', encoding='utf-8') as f:
    token = f.read().strip()

headers = {'Authorization': f'token {token}', 'User-Agent': 'Mozilla/5.0', 'Accept': 'application/vnd.github.v3+json'}

# Check Pages status
r = requests.get('https://api.github.com/repos/Mosan-258/my-site/pages', headers=headers)
print(f'Pages status: {r.status_code}')
if r.status_code == 200:
    print(f'URL: {r.json().get("html_url", "")}')
    print(f'Build type: {r.json().get("build_type", "")}')
    print(f'Source: {r.json().get("source", {})}')
else:
    print(r.json())
