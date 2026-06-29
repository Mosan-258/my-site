import os, shutil, subprocess

with open(r'I:\桌面\小小灰的3D工坊\token.txt', 'r', encoding='utf-8') as f:
    token = f.read().strip()

out = r'C:\Users\Administrator\.openclaw\workspace\my-site\out'
git_dir = os.path.join(out, '.git')
if os.path.exists(git_dir):
    shutil.rmtree(git_dir)

url = f'https://Mosan-258:{token}@github.com/Mosan-258/my-site.git'
os.chdir(out)
subprocess.run(['git', 'init'], check=True)
subprocess.run(['git', 'checkout', '-b', 'gh-pages'], check=True)
subprocess.run(['git', 'config', 'user.name', 'Mosan-258'], check=True)
subprocess.run(['git', 'config', 'user.email', '2097093469@qq.com'], check=True)
subprocess.run(['git', 'add', '.'], check=True)
subprocess.run(['git', 'commit', '-m', 'update footer'], check=True)
subprocess.run(['git', 'remote', 'add', 'origin', url], check=True)
subprocess.run(['git', 'push', '-f', 'origin', 'gh-pages'], capture_output=True)
shutil.rmtree(git_dir, ignore_errors=True)
print('Done!')
