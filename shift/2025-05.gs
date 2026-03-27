/**
 * グループホームAo 萩荘
 * 令和7年5月 シフト自動入力スクリプト
 *
 * 使い方:
 * 1. スプレッドシートを開く
 * 2. 「拡張機能」→「Apps Script」をクリック
 * 3. このコードを全て貼り付けて保存（Ctrl+S）
 * 4. 上部の関数名が「fillMayShift」になっていることを確認
 * 5. ▶ 実行ボタンをクリック（初回は権限承認が必要）
 */

function fillMayShift() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  // ── 5月シフトデータ ──────────────────────────────
  const SHIFTS = {
    '嶋川': {
      1:'休', 2:'休', 3:'休', 4:'休',
      5:'夜①', 6:'夜①', 7:'夜②', 8:'夜①',
      13:'夜①', 14:'夜②',
      16:'夜②', 17:'夜①', 18:'夜①',
      26:'夜①', 27:'夜①', 28:'夜①', 29:'夜①'
    },
    '品田': {
      4:'夜①',
      13:'遅③', 20:'遅③', 22:'昼',
      24:'夜①', 25:'夜①',
      27:'遅③', 28:'遅③'
    },
    '佐々木': {
      1:'夜②', 2:'夜①', 3:'夜①',
      10:'夜①', 11:'夜①', 12:'夜①', 13:'夜①', 14:'夜②',
      19:'夜①', 20:'夜①', 21:'夜②', 22:'夜①',
      30:'夜②', 31:'夜①'
    },
    '尾亦祥': {
      3:'休', 5:'休', 6:'休',
      9:'夜①', 10:'休',
      15:'夜①', 16:'休', 17:'休',
      23:'夜①', 24:'休',
      30:'休', 31:'休'
    },
    '尾亦恵梨': {
      1:'昼', 3:'休', 5:'休', 6:'休',
      8:'昼', 10:'休',
      15:'昼', 16:'休', 17:'休',
      22:'休', 24:'休',
      29:'昼', 30:'休', 31:'休'
    },
    '石崎': {
      1:'遅①', 3:'早', 4:'早', 5:'早', 6:'早',
      7:'遅①', 9:'遅②', 10:'早', 11:'早', 12:'遅②',
      14:'遅①', 16:'遅①', 17:'早', 18:'早',
      19:'遅②', 21:'遅①', 23:'遅②', 24:'早', 25:'早',
      26:'遅②', 30:'遅①', 31:'早'
    },
    '太田': {
      2:'遅③', 3:'遅③', 4:'遅③', 5:'遅③', 6:'遅③',
      8:'遅②', 10:'遅③', 11:'遅③',
      15:'遅②', 17:'遅③', 18:'遅③',
      22:'遅②', 24:'遅③', 25:'遅③',
      29:'遅②', 31:'遅③'
    }
  };

  // ── 名前マッチング ────────────────────────────────
  function resolveKey(cellText) {
    const t = cellText.replace(/\s/g, '');
    if (t.includes('嶋川'))   return '嶋川';
    if (t.includes('品田'))   return '品田';
    if (t.includes('佐々木')) return '佐々木';
    if (t.includes('恵梨'))   return '尾亦恵梨'; // 恵梨を先に判定
    if (t.includes('尾亦'))   return '尾亦祥';
    if (t.includes('石崎'))   return '石崎';
    if (t.includes('太田'))   return '太田';
    return null;
  }

  // ── シートデータ読み込み ──────────────────────────
  const data  = sheet.getDataRange().getValues();
  const nRows = data.length;
  const nCols = data[0].length;

  // 「氏名」ヘッダー行を検索
  const sections = [];
  for (let r = 0; r < nRows; r++) {
    for (let c = 0; c < nCols; c++) {
      if (String(data[r][c]).trim() === '氏名') {
        const colMap = {};
        for (let cc = c + 1; cc < nCols; cc++) {
          const v = data[r][cc];
          const n = typeof v === 'number' ? v : Number(v);
          if (Number.isInteger(n) && n >= 1 && n <= 31) colMap[n] = cc;
        }
        if (Object.keys(colMap).length > 0) {
          sections.push({ headerRow: r, nameCol: c, colMap });
        }
        break;
      }
    }
  }

  if (sections.length === 0) {
    SpreadsheetApp.getUi().alert('「氏名」ヘッダーが見つかりませんでした。\nシートを確認してください。');
    return;
  }

  // ── データ書き込み ────────────────────────────────
  let count = 0;
  for (const sec of sections) {
    for (let r = sec.headerRow + 1; r < Math.min(sec.headerRow + 12, nRows); r++) {
      const cellText = String(data[r][sec.nameCol]).trim();
      if (!cellText) continue;

      const key = resolveKey(cellText);
      if (!key) continue;

      const personShifts = SHIFTS[key];
      for (const [dayStr, col] of Object.entries(sec.colMap)) {
        const value = personShifts[Number(dayStr)] ?? '';
        sheet.getRange(r + 1, col + 1).setValue(value);
        count++;
      }
    }
  }

  SpreadsheetApp.getUi().alert('✅ 完了！' + count + ' セルを更新しました。');
}
