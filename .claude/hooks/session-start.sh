#!/bin/bash
set -euo pipefail

# Web環境のみ実行（ローカルはスキップ）
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

# update-claude-md ブランチから最新の CLAUDE.md を取得
git fetch origin update-claude-md 2>/dev/null
git checkout origin/update-claude-md -- CLAUDE.md
