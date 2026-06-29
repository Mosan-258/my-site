import os, shutil, subprocess

# Read token
with open(r'I:\桌面\小小灰的3D工坊\token.txt', 'r', encoding='utf-8') as f:
    token = f.read().strip()

# Next config - NO basePath
config = """import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
"""
with open(r'C:\Users\Administrator\.openclaw\workspace\my-site\next.config.ts', 'w') as f:
    f.write(config)

# Build
os.chdir(r'C:\Users\Administrator\.openclaw\workspace\my-site')
subprocess.run('npx next build', shell=True, check=True)

# Prepare out dir - move my-site/* to root
out = r'C:\Users\Administrator\.openclaw\workspace\my-site\out'
mysite = os.path.join(out, 'my-site')
if os.path.exists(mysite):
    for item in os.listdir(mysite):
        src = os.path.join(mysite, item)
        dst = os.path.join(out, item)
        if os.path.exists(dst):
            if os.path.isdir(dst):
                shutil.rmtree(dst)
            else:
                os.remove(dst)
        shutil.move(src, dst)
    os.rmdir(mysite)

# Clean git
git_dir = os.path.join(out, '.git')
if os.path.exists(git_dir):
    shutil.rmtree(git_dir)

# Push
url = f'https://Mosan-258:{token}@github.com/Mosan-258/my-site.git'
os.chdir(out)
subprocess.run(['git', 'init'], check=True)
subprocess.run(['git', 'checkout', '-b', 'gh-pages'], check=True)
subprocess.run(['git', 'config', 'user.name', 'Mosan-258'], check=True)
subprocess.run(['git', 'config', 'user.email', '2097093469@qq.com'], check=True)
subprocess.run(['git', 'add', '.'], check=True)
subprocess.run(['git', 'commit', '-m', 'deploy - root fix'], check=True)
subprocess.run(['git', 'remote', 'add', 'origin', url], check=True)
result = subprocess.run(['git', 'push', '-f', 'origin', 'gh-pages'], capture_output=True, text=True)
print('Push:', result.returncode)

shutil.rmtree(git_dir, ignore_errors=True)
print('Done!')
