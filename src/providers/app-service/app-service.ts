import { AlterServiceProvider } from '../alert-service/alter-service';

export class AppServiceProvider {
    public static BASE_DOMAIN: string = "http://www.qingyan.com55.cn/";
    public static BASE_API: string = "api/";
    public static BASE_DOMAIN_API = AppServiceProvider.BASE_DOMAIN + AppServiceProvider.BASE_API;

    public header = { 'content-type': 'application/json' };

    public alterService = new AlterServiceProvider();

    // constructor(public alterService: AlterServiceProvider){

    // }

    /**
     * 发起get请求
     */
    public get(
        url: any,
        callback: (result: HttpCode<any>) => void,
        loading: boolean = false): void {
        const that = this;
        if (loading) {
            that.alterService.showLoading("loading...");
        }
        wx.request({
            url: that.getReqUrl(url),
            data: { platform: this.getPalformNumber() },
            header: this.header,
            method: "GET",
            dataType: "json",
            responseType: "text",
            success(res: any) {
                that.successHandler(res, callback);
            },
            fail(res: any) {
                that.errorHandler(res);
            },
            complete() {
                loading && that.alterService.closeLoading();
            }
        });
    }

    /**
     * 发起post请求
     */
    public post(
        url: any,
        params: any,
        callback: (result: HttpCode<any>) => void,
        loading: boolean = false
    ): void {
        const that = this;
        params.platform = this.getPalformNumber();
        if (loading) {
            that.alterService.showLoading("loading...");
        }
        wx.request({
            url: that.getReqUrl(url),
            data: params,
            header: this.header,
            method: "POST",
            dataType: "json",
            responseType: "text",
            success(res: any) {
                that.successHandler(res, callback);
            },
            fail(res: any) {
                that.errorHandler(res);
            },
            complete() {
                loading && that.alterService.closeLoading();
            }
        });
    }

    /**
     * 获取平台标识
     */
    public getPalformNumber(): number {
        // try {
        //     const res = wx.getSystemInfoSync()
        //     console.log(res.model)
        //     console.log(res.pixelRatio)
        //     console.log(res.windowWidth)
        //     console.log(res.windowHeight)
        //     console.log(res.language)
        //     console.log(res.version)
        //     console.log(res.platform)
        // } catch (e) {
        //     // Do something when catch error
        // }
        return 4;
    }

    public getReqUrl(url: string) {
        if (url.indexOf("http://") || url.indexOf("https://")) {
            return url;
        }
        return AppServiceProvider.BASE_DOMAIN_API + url;
    }

    /**
     * 验证登录
     */
    public checkLogin(): boolean {
        let token = "";
        if (token != "") {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 获取用户token
     */
    public getToken() {
        return "";
    }

    /**
     * 跳转登录
     */
    public gotoLogin() {

    }

    /**
     * 页面跳转
     */
    public push(url: string, json:any = {}) {
        //json转url参数
        let urlParams = Object.keys(json).map(function (key) {
            return encodeURIComponent(key) + "=" + encodeURIComponent(json[key]);
        }).join("&");
        if(url.indexOf("?") == -1){
            url += ("?" + urlParams);
        }else{
            url += ("&" + urlParams);;
        }
        console.log(url);
        wx.navigateTo({
            url: url
        })
    }

    /**
     * request success 回调
     */
    private successHandler(res: any, callback: (result: HttpCode<any>) => void): void {
        if (res.data.code == 200) {
            callback && callback(res.data);
        } else {
            this.errorHandler(res);
        }
    }

    /**
     * request fail 或 success时 code != 200 时 回调
     */
    private errorHandler(res: any): void {
        this.alterService.alert(res.data.message || "网络开小差");
    }

}


/**
 * 返回码
 */
export interface HttpCode<T> {
    code: string;
    message?: string;
    data?: T;
    success?: boolean;
}