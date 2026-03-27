/**
 * グループホームAo 萩荘
 * 令和8年（2026年）5月 シフト自動入力スクリプト
 *
 * 使い方:
 * 1. スプレッドシートを開く
 * 2. 「拡張機能」→「Apps Script」をクリック
 * 3. このコードを全て貼り付けて保存（Ctrl+S）
 * 4. 「fillMayShift」を選択して ▶ 実行
 */

function fillMayShift() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  const SHIFTS = {
    '嶋川': {
      1:'休', 2:'休', 3:'休', 4:'休',
      5:'夜①', 6:'夜①', 7:'夜①', 8:'夜②',
      16:'夜①', 17:'夜①', 18:'夜①', 19:'夜①',
      25:'夜①', 26:'夜①', 27:'夜②', 28:'夜①'
    },
    '品田': {
      4:'夜①', 11:'遅②', 12:'遅③', 14:'夜①',
      19:'遅③', 22:'遅②', 24:'夜①', 26:'遅③', 28:'遅②'
    },
    '佐々木': {
      1:'夜②', 2:'夜①', 3:'夜①',
      10:'夜①', 11:'夜①', 12:'夜①', 13:'夜②',
      20:'夜②', 21:'夜①', 22:'夜①',
      29:'夜②', 30:'夜①', 31:'夜①'
    },
    '尾亦祥': {
      3:'休', 5:'休', 6:'休',
      9:'夜①', 10:'休',
      15:'夜①', 16:'休', 17:'休',
      23:'夜①', 24:'休',
      30:'休', 31:'休'
    },
    '尾亦恵梨': {
      3:'休', 5:'休', 6:'休',
      7:'昼', 10:'休',
      14:'昼', 16:'休', 17:'休',
      21:'昼', 22:'休', 24:'休',
      28:'昼', 30:'休', 31:'休'
    },
    '石崎': {
      1:'遅①', 2:'早', 3:'早', 4:'早', 5:'早', 6:'早',
      8:'遅①', 9:'早', 10:'早',
      13:'遅①', 15:'遅②', 16:'早', 17:'早',
      18:'遅②', 20:'遅①', 23:'早', 24:'早',
      25:'遅②', 27:'遅①', 29:'遅①', 30:'早', 31:'早'
    },
    '太田': {
      2:'遅③', 3:'遅③', 4:'遅③', 5:'遅③', 6:'遅③',
      7:'遅②', 9:'遅③', 10:'遅③',
      14:'遅②', 16:'遅③', 17:'遅③',
      21:'遅②', 23:'遅③', 24:'遅③',
      30:'遅③', 31:'遅③'
    }
  };

  function resolveKey(cellText) {
    const t = cellText.replace(/\s/g, '');
    if (t.includes('嶋川'))   return '嶋川';
    if (t.includes('品田'))   return '品田';
    if (t.includes('佐々木')) return '佐々木';
    if (t.includes('恵梨'))   return '尾亦恵梨';
    if (t.includes('尾亦'))   return '尾亦祥';
    if (t.includes('石崎'))   return '石崎';
    if (t.includes('太田'))   return '太田';
    return null;
  }

  const data  = sheet.getDataRange().getValues();
  const nRows = data.length;
  const nCols = data[0].length;

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
        if (Object.keys(colMap).length > 0) sections.push({ headerRow: r, nameCol: c, colMap });
        break;
      }
    }
  }

  if (sections.length === 0) {
    SpreadsheetApp.getUi().alert('「氏名」ヘッダーが見つかりませんでした。');
    return;
  }

  let count = 0;
  for (const sec of sections) {
    for (let r = sec.headerRow + 1; r < Math.min(sec.headerRow + 12, nRows); r++) {
      const cellText = String(data[r][sec.nameCol]).trim();
      if (!cellText) continue;
      const key = resolveKey(cellText);
      if (!key) continue;
      const personShifts = SHIFTS[key];
      for (const [dayStr, col] of Object.entries(sec.colMap)) {
        sheet.getRange(r + 1, col + 1).setValue(personShifts[Number(dayStr)] ?? '');
        count++;
      }
    }
  }

  SpreadsheetApp.getUi().alert('✅ 完了！' + count + ' セルを更新しました。');
}
