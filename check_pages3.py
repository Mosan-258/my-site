import requests
with open(r'I:\桌面\小小灰的3D工坊\token.txt', 'r', encoding='utf-8') as f:
    token = f.read().strip()

headers = {'Authorization': f'token {token}', 'User-Agent': 'Mozilla/5.0'}

# Check Pages status
r = requests.get('https://api.github.com/repos/Mosan-258/my-site/pages', headers=headers)
print(f'Pages: {r.status_code}')
if r.status_code == 200:
    print(r.json())
else:
    print(r.json().get('message', ''))

# Check what's in root of gh-pages
r2 = requests.get('https://api.github.com/repos/Mosan-258/my-site/contents/?ref=gh-pages', headers=headers)
print(f'\nRoot files: {r2.status_code}')
if r2.status_code == 200:
    for item in r2.json()[:15]:
        print(f"  {item['name']} ({item['type']})")
