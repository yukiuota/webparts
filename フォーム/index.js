window.addEventListener('DOMContentLoaded', () => {

    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('.submit');

    // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('click', (e) => {
        // デフォルトアクションをキャンセル
        e.preventDefault();

        // 入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#name');
        const mail = document.querySelector('#email');

        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('.err-msg-name');
        const errMsgMail = document.querySelector('.err-msg-mail');

        // エラーメッセージの初期化
        errMsgName.textContent = '';
        errMsgMail.textContent = '';

        // 入力フィールドの空欄チェック
        let hasError = false;
        if (!name.value) {
            errMsgName.textContent = 'お名前が入力されていません';
            name.classList.add('input-invalid');
            hasError = true;
        } else {
            name.classList.remove('input-invalid');
        }
        if (!mail.value) {
            errMsgMail.textContent = 'メールアドレスが入力されていません';
            mail.classList.add('input-invalid');
            hasError = true;
        } else {
            mail.classList.remove('input-invalid');
        }

        // 「確認用メールアドレス」入力欄の空欄チェック
        const confirmMail = document.querySelector('#confirm-email');
        const errMsgConfirmMail = document.querySelector('.err-msg-confirm-mail');
        if (!confirmMail.value) {
            errMsgConfirmMail.classList.add('form-invalid');
            errMsgConfirmMail.textContent = '確認用メールアドレスが入力されていません';
            confirmMail.classList.add('input-invalid');
            hasError = true;
        } else {
            errMsgConfirmMail.textContent = '';
            confirmMail.classList.remove('input-invalid');
        }

        // 「メールアドレス」と「確認用メールアドレス」が一致しているかチェック
        if (mail.value && confirmMail.value && mail.value !== confirmMail.value) {
            errMsgMail.classList.add('form-invalid');
            errMsgMail.textContent = 'メールアドレスと確認用メールアドレスが一致していません';
            errMsgConfirmMail.classList.add('form-invalid');
            errMsgConfirmMail.textContent = 'メールアドレスと確認用メールアドレスが一致していません';
            mail.classList.add('input-invalid');
            confirmMail.classList.add('input-invalid');
            hasError = true;
        }


        // 電話必須
        const phone = document.querySelector('#phone');
        // エラーメッセージを表示させる要素を取得
        const errMsgPhone = document.querySelector('.err-msg-phone');
        if (!phone.value) {
            // クラスを追加(エラーメッセージを表示する)
            errMsgPhone.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgPhone.textContent = '電話番号が入力されていません';
            // クラスを追加(フォームの枠線を赤くする)
            phone.classList.add('input-invalid');
            // 後続の処理を止める
            hasError = true;
            return;
        } else if (!phone.value.match(/^\d{10,11}$/)) {
            // クラスを追加(エラーメッセージを表示する)
            errMsgPhone.classList.add('form-invalid');
            // エラーメッセージのテキスト
            errMsgPhone.textContent = '電話番号の形式が正しくありません';
            // クラスを追加(フォームの枠線を赤くする)
            phone.classList.add('input-invalid');
            // 後続の処理を止める
            hasError = true;
            return;
        } else {
            // エラーメッセージのテキストに空文字を代入
            errMsgPhone.textContent = '';
            // クラスを削除
            phone.classList.remove('input-invalid');
        }

        // エラーがある場合はフォーム送信を中止してすべてのエラーメッセージを表示
        if (hasError) {
            return;
        }

        // エラーがない場合はフォームを送信する
        document.querySelector('#myForm').submit();
    });
});