"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../../providers/util");
Page({
    data: {
        logs: []
    },
    bindViewClick: function () {
        wx.navigateTo({
            url: '../news/news'
        });
    },
    onLoad: function () {
        this.setData({
            logs: (wx.getStorageSync('logs') || []).map(function (log) {
                return util_1.formatTime(new Date(log));
            })
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5ld3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSw2Q0FBaUQ7QUFFakQsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLEVBQWM7S0FDckI7SUFFRCxhQUFhO1FBQ1gsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxjQUFjO1NBQ3BCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxNQUFNO1FBQ0osSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBVztnQkFDdEQsT0FBTyxpQkFBVSxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7WUFDbEMsQ0FBQyxDQUFDO1NBQ0gsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vbG9ncy5qc1xyXG5pbXBvcnQgeyBmb3JtYXRUaW1lIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL3V0aWwnXHJcblxyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICBsb2dzOiBbXSBhcyBzdHJpbmdbXVxyXG4gIH0sXHJcbiAgLy/kuovku7blpITnkIblh73mlbBcclxuICBiaW5kVmlld0NsaWNrKCkge1xyXG4gICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgIHVybDogJy4uL25ld3MvbmV3cydcclxuICAgIH0pXHJcbiAgfSxcclxuICBvbkxvYWQoKSB7XHJcbiAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgbG9nczogKHd4LmdldFN0b3JhZ2VTeW5jKCdsb2dzJykgfHwgW10pLm1hcCgobG9nOiBudW1iZXIpID0+IHtcclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZShuZXcgRGF0ZShsb2cpKVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9LFxyXG59KVxyXG4iXX0=