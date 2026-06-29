import subprocess, os, shutil

site_dir = r'C:\Users\Administrator\.openclaw\workspace\my-site\out'

with open(r'I:\桌面\小小灰的3D工坊\token.txt', 'r', encoding='utf-8') as f:
    token = f.read().strip()

url = f'https://Mosan-258:{token}@github.com/Mosan-258/my-site.git'

os.chdir(site_dir)

# Remove old git
git_dir = os.path.join(site_dir, '.git')
if os.path.exists(git_dir):
    shutil.rmtree(git_dir)

subprocess.run(['git', 'init'], check=True)
subprocess.run(['git', 'checkout', '-b', 'gh-pages'], check=True)
subprocess.run(['git', 'config', 'user.name', 'Mosan-258'], check=True)
subprocess.run(['git', 'config', 'user.email', '2097093469@qq.com'], check=True)
subprocess.run(['git', 'add', '.'], check=True)
subprocess.run(['git', 'commit', '-m', 'deploy with basePath fixed'], check=True)
subprocess.run(['git', 'remote', 'add', 'origin', url], check=True)
result = subprocess.run(['git', 'push', '-f', 'origin', 'gh-pages'], capture_output=True, text=True)
print('Push:', result.returncode)

shutil.rmtree(git_dir, ignore_errors=True)
print('Done!')
