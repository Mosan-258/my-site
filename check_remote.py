import requests
with open(r'I:\桌面\小小灰的3D工坊\token.txt', 'r', encoding='utf-8') as f:
    token = f.read().strip()

# Check gh-pages branch content
r = requests.get('https://api.github.com/repos/Mosan-258/my-site/contents/index.html?ref=gh-pages', 
    headers={'Authorization': f'token {token}', 'User-Agent': 'Mozilla/5.0'})
print(f'Status: {r.status_code}')
if r.status_code == 200:
    import base64
    content = base64.b64decode(r.json()['content']).decode('utf-8')
    print(content[:300])
else:
    print(r.json().get('message', ''))
