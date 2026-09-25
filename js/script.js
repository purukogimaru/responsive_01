// 生年月日のプルダウン
const yearSelect = document.querySelector('[name="dob_year"]');
const monthSelect = document.querySelector('[name="dob_month"]');
const daySelect = document.querySelector('[name="dob_day"]');


// 年を追加
for (let year = 2026; year >= 1920; year--) {
    const option = document.createElement("option");

    option.value = year;
    option.textContent = year + "年";

    yearSelect.appendChild(option);
}


// 月を追加
for (let month = 1; month <= 12; month++) {
    const option = document.createElement("option");

    option.value = month;
    option.textContent = month + "月";

    monthSelect.appendChild(option);
}


// 日を追加する関数
function createDays() {

    // 現在の日付の選択肢を一度削除
    daySelect.innerHTML = "";

    // 最初の「日」を追加
    const firstOption = document.createElement("option");

    firstOption.value = "";
    firstOption.textContent = "日";
    firstOption.selected = true;
    firstOption.disabled = true;

    daySelect.appendChild(firstOption);


    // 選択された年と月
    const year = Number(yearSelect.value);
    const month = Number(monthSelect.value);


    // 月が選択されていない場合
    if (!year || !month) {
        return;
    }


    // その年月の日数を取得
    const daysInMonth = new Date(year, month, 0).getDate();


    // 日を追加
    for (let day = 1; day <= daysInMonth; day++) {

        const option = document.createElement("option");

        option.value = day;
        option.textContent = day + "日";

        daySelect.appendChild(option);
    }
}


// 年・月が変更されたら日を更新
yearSelect.addEventListener("change", createDays);
monthSelect.addEventListener("change", createDays);