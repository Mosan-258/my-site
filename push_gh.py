import subprocess

with open(r'I:\桌面\小小灰的3D工坊\token.txt', 'r', encoding='utf-8') as f:
    token = f.read().strip()

url = f'https://Mosan-258:{token}@github.com/Mosan-258/my-site.git'

import os
os.chdir(r'C:\Users\Administrator\.openclaw\workspace\my-site\out')

subprocess.run(['git', 'remote', 'set-url', 'origin', url], check=True)
result = subprocess.run(['git', 'push', '-f', 'origin', 'gh-pages'], capture_output=True, text=True)
print('stdout:', result.stdout)
print('stderr:', result.stderr)
print('returncode:', result.returncode)
