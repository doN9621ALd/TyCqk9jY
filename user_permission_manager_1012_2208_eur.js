// 代码生成时间: 2025-10-12 22:08:38
$(document).ready(function() {
    // 定义用户权限数据结构
    const permissionsData = {
        'admin': ['create', 'read', 'update', 'delete'],
        'user': ['read']
    };

    /**
     * 检查用户权限
     * @param {string} username 用户名
     * @param {string} action 操作
     * @returns {boolean} 是否有权限
     */
    function checkPermission(username, action) {
        const userPermissions = permissionsData[username] || [];
        return userPermissions.includes(action);
    }

    /**
     * 显示权限信息
     * @param {string} username 用户名
     * @param {string} action 操作
     */
    function displayPermissionInfo(username, action) {
        const hasPermission = checkPermission(username, action);
        const message = hasPermission ? '您有权限执行此操作' : '您没有权限执行此操作';
        $('#permission-result').text(message);
    }

    // 绑定权限检查事件
    $('#check-permission').click(function() {
        const username = $('#username').val();
        const action = $('#action').val();
        
        // 输入验证
        if (!username || !action) {
            alert('请输入用户名和操作');
            return;
        }

        // 检查权限并显示结果
        displayPermissionInfo(username, action);
    });
});