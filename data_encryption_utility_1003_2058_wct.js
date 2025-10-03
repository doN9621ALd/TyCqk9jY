// 代码生成时间: 2025-10-03 20:58:38
// 引入CryptoJS库进行AES加密
// 需要在HTML中引入CryptoJS的CDN链接
// <script src='https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js'></script>

$(document).ready(function() {
    // 定义全局变量
    const SECRET_KEY = 'your-secret-key';  // 密钥，应替换为实际的密钥字符串
    const iv = CryptoJS.enc.Utf8.parse('1234567890123456'); // 初始化向量， AES 需要一个16字节的初始化向量

    /**
     * AES加密函数
     * @param {string} data 待加密的数据
     * @returns {string} 加密后的数据
     */
    function encryptData(data) {
        try {
            // 使用CryptoJS的AES加密方法加密数据
            const encrypted = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(SECRET_KEY), {
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            });
            // 返回加密后的数据（Base64编码）
            return encrypted.toString();
        } catch (error) {
            console.error('加密数据时发生错误:', error);
        }
    }

    /**
     * 发送加密数据到服务器
     * @param {string} encryptedData 加密后的数据
     */
    function sendDataToServer(encryptedData) {
        $.ajax({
            url: 'https://your-server-url.com/api/receive-data',  // 服务器接口地址
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ data: encryptedData }),
            success: function(response) {
                console.log('数据成功发送到服务器:', response);
            },
            error: function(xhr, status, error) {
                console.error('发送数据到服务器时发生错误:', status, error);
            }
        });
    }

    /**
     * 处理用户输入并加密数据
     */
    function handleUserInput() {
        const userInput = $('#user-input').val();
        const encryptedData = encryptData(userInput);
        if (encryptedData) {
            sendDataToServer(encryptedData);
        }
    }

    // 绑定事件处理器到输入框，以便在用户点击发送按钮时处理输入
    $('#send-button').on('click', function() {
        handleUserInput();
    });
});