#!/bin/bash
set -e
echo "🚀 Running simplified cross-platform setup (Linux/macOS)"
# Example: adjust paths as needed before running
ROOT_DIR="${PWD}"
echo "Root: $ROOT_DIR"
# Build Next.js if exists
if [ -d "789bet" ]; then
  echo "➡️ Building Next.js (789bet)..."
  cd 789bet
  if command -v pnpm >/dev/null 2>&1; then
    pnpm install
    pnpm build
  else
    npm install
    npm run build
  fi
  cd "$ROOT_DIR"
else
  echo "⚠️  Directory 789bet not found, skipping Next build."
fi
# Copy outputs to server-core if exists
if [ -d "server-core" ]; then
  mkdir -p server-core/frontend/next
  cp -r 789bet/.next server-core/frontend/next/ || true
  cp -r 789bet/public server-core/frontend/next/public || true
fi
# Build Angular (tcgame)
if [ -d "tcgame" ]; then
  echo "➡️ Building Angular (tcgame)..."
  cd tcgame
  npm install
  npm run build
  cd "$ROOT_DIR"
  mkdir -p server-core/frontend/angular
  cp -r tcgame/dist server-core/frontend/angular/ || true
else
  echo "⚠️  Directory tcgame not found, skipping Angular build."
fi
# Generate minimal DB config if missing
mkdir -p server-core/src/config
if [ ! -f server-core/src/config/database.js ]; then
  cat > server-core/src/config/database.js <<EOF
module.exports = {
  uri: 'mysql://root:password@127.0.0.1/cgame'
};
EOF
  echo "✅ Generated server-core/src/config/database.js"
fi
echo "✅ setup.sh finished. Customize variables before production use."
