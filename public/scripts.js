function vote(option) {
    // 這裡我們只是簡單地將選擇的選項打印到控制台
    // 在真實的應用中，你會想要將這些數據發送到伺服器儲存
    console.log("使用者選擇了:", option);

    // 範例: 使用 fetch 進行 POST 請求到伺服器
    fetch('/vote', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ option: option })
    }).then(response => response.json())
      .then(data => {
          // 處理伺服器的回應
          alert(data.message);
      });
}
