# Cross-platform Python toolkit (simplified)
import os, subprocess, shutil
def run(cmd):
    print("🔧", cmd)
    subprocess.run(cmd, shell=True, check=True)
def copy_dir(src, dst):
    if os.path.exists(src):
        if os.path.exists(dst):
            shutil.rmtree(dst)
        shutil.copytree(src, dst)
print("🚀 Starting setup.py")
if os.path.isdir("789bet"):
    os.chdir("789bet")
    try:
        run("pnpm install")
        run("pnpm build")
    except Exception:
        run("npm install")
        run("npm run build")
    os.chdir("..")
    copy_dir("789bet/.next", "server-core/frontend/next/.next")
    copy_dir("789bet/public", "server-core/frontend/next/public")
else:
    print("⚠️  789bet not found, skipping.")
if os.path.isdir("tcgame"):
    os.chdir("tcgame")
    run("npm install")
    run("npm run build")
    os.chdir("..")
    copy_dir("tcgame/dist", "server-core/frontend/angular/dist")
else:
    print("⚠️  tcgame not found, skipping.")
os.makedirs("server-core/src/config", exist_ok=True)
with open("server-core/src/config/database.js","w") as f:
    f.write("module.exports = { uri: 'mysql://root:password@127.0.0.1/cgame' };")
print("✅ setup.py finished.")
