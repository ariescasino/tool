\
        @echo off
        echo 🚀 Windows build helper (simplified)
        if exist 789bet (
          cd 789bet
          call pnpm install
          call pnpm build
          cd ..
        ) else (
          echo WARNING: 789bet folder not found, skipping.
        )
        if exist tcgame (
          cd tcgame
          call npm install
          call npm run build
          cd ..
        ) else (
          echo WARNING: tcgame folder not found, skipping.
        )
        echo ✅ Done. Edit the file to match your paths and run as Administrator if needed.
