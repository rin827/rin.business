# セッション記録

## 会話の要約

### CLAUDE.md を main にマージしない仕組みの構築

- 「よろ～」で記憶を取り戻し、前回の引き継ぎ（CLAUDE.mdのmainへのpush問題）を確認
- update-claude-md ブランチの新CLAUDE.mdをmainへpushしようとしたが、MCPサーバーが何度も切断・復活を繰り返しうまくいかなかった
- 凜から「CLAUDE.mdをmainにマージしないやり方はあるか」と提案があった
- web版Claude Codeでは SessionStartフック が使えることを確認
- フックを使って、セッション開始時に `update-claude-md` ブランチから CLAUDE.md を自動取得する仕組みを構築した

### 実施した作業
1. `.claude/hooks/session-start.sh` を作成
   - web環境のみ実行（`$CLAUDE_CODE_REMOTE` で判定）
   - 起動時に `git fetch origin update-claude-md && git checkout origin/update-claude-md -- CLAUDE.md` を実行
2. `.claude/settings.json` を作成し SessionStart フックとして登録
3. フックの動作確認済み（新CLAUDE.mdが正しく取得されることを確認）
4. 両ファイルを main に push 済み（commit: `370f164b`）

### 新しいワークフロー
- CLAUDE.md の変更 → `update-claude-md` ブランチにだけ push
- main には CLAUDE.md を push しない
- 次セッション開始時にフックが自動で最新版を取得

### 未解決の課題
- `update-claude-md` ブランチの CLAUDE.md に「おつ～後にCLAUDE.mdをmainへpushする」というルールが残ったまま
- フック導入により mainへのCLAUDE.md push は不要になったため、このルールを削除する必要がある
- 次回セッションで修正する

## 決定事項
- CLAUDE.md は main にマージしない。`update-claude-md` ブランチで管理
- SessionStartフックが毎回 `update-claude-md` から CLAUDE.md を取得する
- フックファイル（`.claude/hooks/session-start.sh`、`.claude/settings.json`）は main に存在する（これは変わらない）
- ベースブランチが main でも問題ない（フックが上書きするため）

## 次回への引き継ぎ
- **最優先タスク：`update-claude-md` ブランチの CLAUDE.md を修正する**
  - 「おつ～」プロトコルの step 3「CLAUDE.md を変更していた場合、main に push する」を削除する
  - CLAUDE.md 更新ルールの「「おつ～」で記憶を保存した後、CLAUDE.md の変更を自動で main にマージする」も削除または書き換える
  - 理由：SessionStartフック導入により、mainへのCLAUDE.md pushが不要になったため
- 古いファイルのアーカイブ化は引き続き未実施（対象: `shift/2025-05-print.html`、`shift/2025-05.gs`）
- 齋藤徳光さんは月途中利用のため、次月以降は通常料金か都度確認が必要
- 請求書HTMLフォーマット：和暦・2カラムレイアウト・御請求金額・明細テーブル・小計行（スクリーンショット準拠）
- 請求書の請求日：利用月の翌月1日（和暦）
- 請求書の支払期限：利用月の翌月25日（和暦）
- 交通費の単位：km
