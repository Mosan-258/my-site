import time
import requests

with open(r'I:\桌面\小小灰的3D工坊\token.txt', 'r', encoding='utf-8') as f:
    token = f.read().strip()

headers = {'Authorization': f'token {token}', 'User-Agent': 'Mozilla/5.0'}

# Force re-deploy Pages
r = requests.post('https://api.github.com/repos/Mosan-258/my-site/pages/builds', headers=headers)
print(f'Redeploy: {r.status_code}')

# Wait and check
for i in range(5):
    time.sleep(5)
    r2 = requests.get('https://api.github.com/repos/Mosan-258/my-site/pages', headers=headers)
    status = r2.json().get('status', '')
    print(f'[{i*5}s] Status: {status}')
    if status == 'built':
        break

print('Check website now: https://mosan-258.github.io/my-site/')
