import subprocess, os, shutil

site_dir = r'C:\Users\Administrator\.openclaw\workspace\my-site\out'
token = 'ghp_7K…Bd9U'
repo = 'Mosan-258/my-site'

os.chdir(site_dir)

# Init git
subprocess.run(['git', 'init'], check=True)
subprocess.run(['git', 'checkout', '-b', 'gh-pages'], check=True)
subprocess.run(['git', 'config', 'user.name', 'Mosan-258'], check=True)
subprocess.run(['git', 'config', 'user.email', '2097093469@qq.com'], check=True)
subprocess.run(['git', 'add', '.'], check=True)
subprocess.run(['git', 'commit', '-m', 'deploy to gh-pages'], check=True)

# Push
url = f'https://Mosan-258:{token}@github.com/{repo}.git'
subprocess.run(['git', 'remote', 'add', 'origin', url], check=True)
result = subprocess.run(['git', 'push', '-f', 'origin', 'gh-pages'], capture_output=True, text=True)
print('Push:', result.stdout, result.stderr)

# Cleanup
shutil.rmtree(os.path.join(site_dir, '.git'))
print('Done!')
