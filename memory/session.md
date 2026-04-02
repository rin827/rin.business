# セッション記録

## 会話の要約

### 原因調査：mainへのpushが詰まる問題
- ほぼ毎回mainへのpushのタイミングで「接続を確認」「赤文字が動く」状態になり先に進めない問題を調査
- 初期仮説：git push（Bash経由）がローカルプロキシ（127.0.0.1）経由でハングする
- mcp__github__push_filesのテストpushは一瞬で通ることを確認
- 最終的にgit push origin mainを試したところ、プロキシのポートが変わっていた（42127→35295）ことが影響していた可能性
- 今セッションではgit push origin mainも詰まらず通った

### 対策として実施したこと
- CLAUDE.mdに「mainへのgit push禁止、mcp__github__push_filesを使う」ルールを追加
- フィーチャーブランチ（claude/invoice-system-continuation-aUREF）とmainの両方にpush完了

### mainブランチが必要な理由の整理
- CLAUDE.mdはClaude Codeが毎セッション開始時にmainから自動読み込みする仕様
- memory/session.mdの読み書き先もmain
- HTMLプレビューURL（htmlpreview.github.io）もmainを参照
- mainブランチ自体はなくせない

### リポジトリ構成の確認
- .claude/agents/（律・司のサブエージェント定義）がCLAUDE.mdと重複していることを確認
- 古いファイル（shift/2025-05-print.html等）はアーカイブ化して残す方針に決定

## 決定事項
- mainへのgit pushは禁止、必ずmcp__github__push_filesを使う（CLAUDE.mdに明記済み）
- 古いファイルはアーカイブ化して残す。削除は凜が判断する
- .claude/agents/の重複ファイルは今回は削除しなかった（今後の判断待ち）
- 請求書・CLAUDE.mdの月詠ルールはすべて最新状態に更新済み
- 次回以降の請求書作成はCLAUDE.mdのHTMLフォーマットルールに従って作成

## 次回への引き継ぎ
- pushが詰まる問題は現状では解消されている（プロキシポート35295で動作確認済み）
- もし再発した場合は、mcp__github__push_filesを優先して使う
- .claude/agents/フォルダのサブエージェント定義ファイル（律・司）がCLAUDE.mdと二重管理状態。整理するか凜に確認すること
- 齋藤徳光さんは月途中利用のため、次月以降は通常料金か都度確認が必要
- 請求書HTMLフォーマット：和暦・2カラムレイアウト・御請求金額・明細テーブル・小計行（スクリーンショット準拠）
- 請求書の請求日：利用月の翌月1日（和暦）
- 請求書の支払期限：利用月の翌月25日（和暦）
- 交通費の単位：km
