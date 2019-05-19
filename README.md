# React DatePicker Component

## src架構

* dataPicker.js
* provider
 * InpurProvider.js
 * CellProvider.js
* index.js

## dataPicker.js
### State架構
    date     設定的年月日時分，預設為現在時間
    nowCell  正在設定的欄位，預設為無
### onSelectCell()
傳入CellProvider以供選擇欄位時設定State並render畫面

### onCellChange()
選擇項目時更新state中的date並依React Life Cycle重新render畫面

## InputProvider.js
### InputProvider()
欄位選項產生物件，同時顯示目前State中設定的日期時間

## CellProvider.js
### CellProvider()
點擊欄位時動態產生相對應的選項，點擊後設定State中的date並依React Life Cycle重新render畫面
