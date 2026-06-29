import requests

token = 'ghp_7K…Bd9U'
headers = {'Authorization': f'token {token}', 'User-Agent': 'Mozilla/5.0'}

r = requests.get('https://api.github.com/user/repos?per_page=10', headers=headers)
for repo in r.json():
    if repo['name'] == 'my-site':
        print(f'FOUND: {repo["html_url"]}')
        break
else:
    print('NOT FOUND')
    for repo in r.json():
        print(f"  - {repo['name']}")
