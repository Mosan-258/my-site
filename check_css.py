import requests
with open(r'I:\桌面\小小灰的3D工坊\token.txt', 'r', encoding='utf-8') as f:
    token = f.read().strip()

# Check if CSS file exists
r = requests.get('https://api.github.com/repos/Mosan-258/my-site/contents/_next/static/chunks/3-_tnz637gbz_.css?ref=gh-pages', 
    headers={'Authorization': f'token {token}', 'User-Agent': 'Mozilla/5.0'})
print(f'CSS file status: {r.status_code}')
if r.status_code == 200:
    print('CSS file exists')
else:
    print(r.json().get('message', ''))

# List _next/static/chunks/
r2 = requests.get('https://api.github.com/repos/Mosan-258/my-site/contents/_next/static/chunks?ref=gh-pages', 
    headers={'Authorization': f'token {token}', 'User-Agent': 'Mozilla/5.0'})
if r2.status_code == 200:
    for item in r2.json():
        print(f"  {item['name']}")
