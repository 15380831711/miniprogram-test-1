"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AlterServiceProvider = (function () {
    function AlterServiceProvider() {
        this.defaultTip = "提示信息";
        this.defaultConfirmContent = "确认操作吗？";
        this.defaultLoadingTip = "确认操作吗？";
    }
    AlterServiceProvider.prototype.alert = function (message) {
        wx.showModal({
            title: this.defaultTip,
            content: message + "",
            showCancel: false
        });
    };
    AlterServiceProvider.prototype.confirm = function (message, okFun, cancelFun) {
        wx.showModal({
            title: this.defaultTip,
            content: message || this.defaultConfirmContent,
            showCancel: true,
            success: function (res) {
                if (res.confirm) {
                    okFun && okFun();
                }
                else if (res.cancel) {
                    cancelFun && cancelFun();
                }
            }
        });
    };
    AlterServiceProvider.prototype.showToast = function (message) {
        if (message === void 0) { message = this.defaultTip; }
        wx.showToast({
            title: message,
            duration: 2000
        });
    };
    AlterServiceProvider.prototype.tipToast = function (message, duration) {
        if (message === void 0) { message = this.defaultTip; }
        if (duration === void 0) { duration = 2000; }
        wx.showToast({
            title: message,
            duration: duration
        });
    };
    AlterServiceProvider.prototype.tipLoading = function (message, duration) {
        if (message === void 0) { message = this.defaultLoadingTip; }
        if (duration === void 0) { duration = 2000; }
        wx.showLoading({
            title: message,
        });
        setTimeout(function () {
            wx.hideLoading();
        }, duration);
    };
    AlterServiceProvider.prototype.showLoading = function (message) {
        if (message === void 0) { message = this.defaultLoadingTip; }
        wx.showLoading({
            title: message,
        });
    };
    AlterServiceProvider.prototype.closeLoading = function () {
        wx.hideLoading();
    };
    return AlterServiceProvider;
}());
exports.AlterServiceProvider = AlterServiceProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx0ZXItc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFsdGVyLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQTtJQUFBO1FBRVksZUFBVSxHQUFVLE1BQU0sQ0FBQztRQUMzQiwwQkFBcUIsR0FBVyxRQUFRLENBQUM7UUFDekMsc0JBQWlCLEdBQVcsUUFBUSxDQUFDO0lBbUZqRCxDQUFDO0lBOUVVLG9DQUFLLEdBQVosVUFBYSxPQUFZO1FBQ3JCLEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDVCxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDdEIsT0FBTyxFQUFFLE9BQU8sR0FBRyxFQUFFO1lBQ3JCLFVBQVUsRUFBRSxLQUFLO1NBQ3BCLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFLTSxzQ0FBTyxHQUFkLFVBQWUsT0FBWSxFQUFFLEtBQVUsRUFBRSxTQUFlO1FBQ3BELEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDVCxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDdEIsT0FBTyxFQUFFLE9BQU8sSUFBSSxJQUFJLENBQUMscUJBQXFCO1lBQzlDLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLE9BQU8sWUFBQyxHQUFHO2dCQUNQLElBQUksR0FBRyxDQUFDLE9BQU8sRUFBRTtvQkFDYixLQUFLLElBQUksS0FBSyxFQUFFLENBQUM7aUJBQ3BCO3FCQUFNLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRTtvQkFDbkIsU0FBUyxJQUFJLFNBQVMsRUFBRSxDQUFDO2lCQUM1QjtZQUNMLENBQUM7U0FDSixDQUFDLENBQUE7SUFDTixDQUFDO0lBS00sd0NBQVMsR0FBaEIsVUFBaUIsT0FBaUM7UUFBakMsd0JBQUEsRUFBQSxVQUFrQixJQUFJLENBQUMsVUFBVTtRQUM5QyxFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ1QsS0FBSyxFQUFFLE9BQU87WUFFZCxRQUFRLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUE7SUFDTixDQUFDO0lBS00sdUNBQVEsR0FBZixVQUFnQixPQUFpQyxFQUFFLFFBQXVCO1FBQTFELHdCQUFBLEVBQUEsVUFBa0IsSUFBSSxDQUFDLFVBQVU7UUFBRSx5QkFBQSxFQUFBLGVBQXVCO1FBQ3RFLEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDVCxLQUFLLEVBQUUsT0FBTztZQUVkLFFBQVEsRUFBRSxRQUFRO1NBQ3JCLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFLTSx5Q0FBVSxHQUFqQixVQUFrQixPQUF3QyxFQUFFLFFBQXVCO1FBQWpFLHdCQUFBLEVBQUEsVUFBa0IsSUFBSSxDQUFDLGlCQUFpQjtRQUFFLHlCQUFBLEVBQUEsZUFBdUI7UUFDL0UsRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUNYLEtBQUssRUFBRSxPQUFPO1NBQ2pCLENBQUMsQ0FBQTtRQUNGLFVBQVUsQ0FBQztZQUNQLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUNwQixDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUE7SUFDaEIsQ0FBQztJQUtPLDBDQUFXLEdBQWxCLFVBQ0csT0FBd0M7UUFBeEMsd0JBQUEsRUFBQSxVQUFrQixJQUFJLENBQUMsaUJBQWlCO1FBRXhDLEVBQUUsQ0FBQyxXQUFXLENBQUM7WUFDWCxLQUFLLEVBQUUsT0FBTztTQUNqQixDQUFDLENBQUE7SUFDTixDQUFDO0lBS00sMkNBQVksR0FBbkI7UUFDSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVMLDJCQUFDO0FBQUQsQ0FBQyxBQXZGRCxJQXVGQztBQXZGWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5o+Q56S65qGG5bel5YW357G7XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQWx0ZXJTZXJ2aWNlUHJvdmlkZXIge1xyXG5cclxuICAgIHByaXZhdGUgZGVmYXVsdFRpcDpzdHJpbmcgPSBcIuaPkOekuuS/oeaBr1wiO1xyXG4gICAgcHJpdmF0ZSBkZWZhdWx0Q29uZmlybUNvbnRlbnQ6IHN0cmluZyA9IFwi56Gu6K6k5pON5L2c5ZCX77yfXCI7XHJcbiAgICBwcml2YXRlIGRlZmF1bHRMb2FkaW5nVGlwOiBzdHJpbmcgPSBcIuehruiupOaTjeS9nOWQl++8n1wiO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogYWxlcnTlvLnlh7rmoYZcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFsZXJ0KG1lc3NhZ2U6IGFueSkge1xyXG4gICAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLmRlZmF1bHRUaXAsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IG1lc3NhZ2UgKyBcIlwiLFxyXG4gICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmiZPlvIDnoa7orqTlj5bmtojlvLnlh7rmoYZcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbmZpcm0obWVzc2FnZTogYW55LCBva0Z1bjogYW55LCBjYW5jZWxGdW4/OiBhbnkpIHtcclxuICAgICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICB0aXRsZTogdGhpcy5kZWZhdWx0VGlwLFxyXG4gICAgICAgICAgICBjb250ZW50OiBtZXNzYWdlIHx8IHRoaXMuZGVmYXVsdENvbmZpcm1Db250ZW50LFxyXG4gICAgICAgICAgICBzaG93Q2FuY2VsOiB0cnVlLFxyXG4gICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2tGdW4gJiYgb2tGdW4oKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmNhbmNlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEZ1biAmJiBjYW5jZWxGdW4oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIOaYvuekulRvYXN05o+Q56S6XHJcbiAgICAqL1xyXG4gICAgcHVibGljIHNob3dUb2FzdChtZXNzYWdlOiBzdHJpbmcgPSB0aGlzLmRlZmF1bHRUaXApIHtcclxuICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgLy8gaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlkJDlj7jmsLTljbDmj5DnpLrmoYZcclxuICAgICAqL1xyXG4gICAgcHVibGljIHRpcFRvYXN0KG1lc3NhZ2U6IHN0cmluZyA9IHRoaXMuZGVmYXVsdFRpcCwgZHVyYXRpb246IG51bWJlciA9IDIwMDApIHtcclxuICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgLy8gaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb25cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pi+56S6bG9hZGluZ+Wwj+aPkOekuu+8jOiHquWKqOWFs+mXrVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdGlwTG9hZGluZyhtZXNzYWdlOiBzdHJpbmcgPSB0aGlzLmRlZmF1bHRMb2FkaW5nVGlwLCBkdXJhdGlvbjogbnVtYmVyID0gMjAwMCkge1xyXG4gICAgICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgfSlcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgIH0sIGR1cmF0aW9uKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pi+56S6bG9hZGluZ+WKqOeUu++8jOmcgOimgeiwg+eUqGNsb3NlTG9hZGluZygp5omL5Yqo5YWz6ZetXHJcbiAgICAgKi9cclxuICAgICBwdWJsaWMgc2hvd0xvYWRpbmcoXHJcbiAgICAgICAgbWVzc2FnZTogc3RyaW5nID0gdGhpcy5kZWZhdWx0TG9hZGluZ1RpcFxyXG4gICAgKSB7XHJcbiAgICAgICAgd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5YWz6ZetbG9hZGluZ1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2xvc2VMb2FkaW5nKCkge1xyXG4gICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICB9XHJcblxyXG59Il19