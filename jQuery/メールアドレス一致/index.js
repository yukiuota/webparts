function CheckMail() {
    // 入力値取得
    let input1 = $("#mail01").val();
    let input2 = $("#mail02").val();
    // メール比較
    if (input1 !== input2) {
        window.alert("メールアドレスが一致しません。");
        return false;
    } else {
        return true;
    }
}