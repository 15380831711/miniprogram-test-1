"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../../providers/util");
var alter_service_1 = require("../../providers/alert-service/alter-service");
var appService = new alter_service_1.AlterServiceProvider();
Page({
    data: {
        logs: []
    },
    bindViewClick: function () {
        wx.navigateTo({
            url: '../news/news'
        });
    },
    onLoad: function (option) {
        console.log("接收参数：");
        console.log(option);
        this.setData({
            logs: (wx.getStorageSync('logs') || []).map(function (log) {
                return util_1.formatTime(new Date(log));
            })
        });
    },
    useAppSrv: function () {
        appService.alert(" AppService.alert() ");
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9ncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSw2Q0FBa0Q7QUFFbEQsNkVBQW1GO0FBQ25GLElBQU0sVUFBVSxHQUFHLElBQUksb0NBQW9CLEVBQUUsQ0FBQztBQUU5QyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsRUFBYztLQUNyQjtJQUVELGFBQWE7UUFDWCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLGNBQWM7U0FDcEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELE1BQU0sWUFBQyxNQUFVO1FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQVc7Z0JBQ3RELE9BQU8saUJBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO1lBQ2xDLENBQUMsQ0FBQztTQUNILENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxTQUFTO1FBQ0wsVUFBVSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Q0FFRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvL2xvZ3MuanNcbmltcG9ydCB7IGZvcm1hdFRpbWUgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvdXRpbCc7XG5cbmltcG9ydCB7IEFsdGVyU2VydmljZVByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL2FsZXJ0LXNlcnZpY2UvYWx0ZXItc2VydmljZSc7XG5jb25zdCBhcHBTZXJ2aWNlID0gbmV3IEFsdGVyU2VydmljZVByb3ZpZGVyKCk7XG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgbG9nczogW10gYXMgc3RyaW5nW11cbiAgfSxcbiAgLy/kuovku7blpITnkIblh73mlbBcbiAgYmluZFZpZXdDbGljaygpIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogJy4uL25ld3MvbmV3cydcbiAgICB9KVxuICB9LFxuICBvbkxvYWQob3B0aW9uOmFueSkge1xuICAgIGNvbnNvbGUubG9nKFwi5o6l5pS25Y+C5pWw77yaXCIpO1xuICAgIGNvbnNvbGUubG9nKG9wdGlvbik7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBsb2dzOiAod3guZ2V0U3RvcmFnZVN5bmMoJ2xvZ3MnKSB8fCBbXSkubWFwKChsb2c6IG51bWJlcikgPT4ge1xuICAgICAgICByZXR1cm4gZm9ybWF0VGltZShuZXcgRGF0ZShsb2cpKVxuICAgICAgfSlcbiAgICB9KVxuICB9LFxuXG4gIHVzZUFwcFNydigpe1xuICAgICAgYXBwU2VydmljZS5hbGVydChcIiBBcHBTZXJ2aWNlLmFsZXJ0KCkgXCIpO1xuICB9XG4gIFxufSlcbiJdfQ==