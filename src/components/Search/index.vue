<template>
    <div>
        <div class='wjy-header-search'>
            <div class='wjy-header-search-back'>
                <span class='iconfont'>&#xe6dc;</span>
            </div>
            <div class='wjy-header-search-input'>
                <div>
                    <span class='iconfont'>&#xe649;</span>
                    <input placeholder='请输入用户名' />
                </div>
            </div>
            <div class='wjy-header-search-btn'>
                <button>搜索</button>
            </div>
        </div>
        <div class='wjy-recent-search'>
            <div class='wjy-recent-search-head'>
                <p>搜索历史</p>
                <div class='wjy-search-head-del'>
                    <span class='iconfont'>&#xe63a;</span>
                </div>
            </div>
            <div class='wjy-recent-search-list'>
                <span>
                    <a href='javascript:void(0);'>酒</a>
                </span>
                <span>
                    <a href='javascript:void(0);'>办公室靠枕</a>
                </span>
                <span>
                    <a href='javascript:void(0);'>无线扩音器</a>
                </span>
                <span>
                    <a href='javascript:void(0);'>门铃感</a>
                </span>
                <span>
                    <a href='javascript:void(0);'>欧式壁灯</a>
                </span>
                <span>
                    <a href='javascript:void(0);'>唇彩唇蜜</a>
                </span>
                <span>
                    <a href='javascript:void(0);'>儿童遥控飞机</a>
                </span>
                <span>
                    <a href='javascript:void(0);'>儿童遥控飞机</a>
                </span>
                <span>
                    <a href='javascript:void(0);'>儿童遥控飞机</a>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>

<style scoped lang='stylus'>
    .wjy-header-search
        height 44px
        display flex
        border-bottom 1px solid #e5e5e5
        .wjy-header-search-back
            width 40px
            height 44px
            display flex
            justify-content center
            align-items center
            span
                font-size 20px
                display block
                color #666
        .wjy-header-search-input
            flex 1
            height 44px
            box-sizing border-box
            div
                height 30px
                width 95%
                display flex
                background #F0F0EF
                border-radius 15px
                margin 0 auto
                margin-top 7px
                position relative
                input
                    font-size 14px
                    height 30px
                    width 100%
                    background #f7f7f7
                    border-radius 15px
                    box-sizing border-box
                    padding-right 10px
                    color #ccc
                    padding-left 30px
                input::-webkit-input-placeholder
                    color #ccc
                span
                    position absolute
                    left 10px
                    top 50%
                    font-size 14px
                    transform translateY(-50%)
                    color #ccc
        .wjy-header-search-btn
            width 55px
            height 44px
            padding-top 7px
            box-sizing border-box
            button
                display block
                height 30px
                text-align center
                font-size 14px
                margin 0 auto
                margin-left 0
                border none
                background #e93b3d
                color #fff
                border-radius 5px
                font-family '微软雅黑'
    .wjy-recent-search
        font-size 14px
        margin-top 15px
        padding-left 13px
        .wjy-recent-search-head
            padding 0 15px 11px 0
            font-size 15px;
            line-height 15px
            color #232326
            display flex
            font-family 'PingFang-SC-Medium'
            p
                width 100px
            .wjy-search-head-del
                flex 1
                text-align right
                span
                    font-size 15px
                    color #686868
        .wjy-recent-search-list
            padding-right 2px
            overflow hidden
            font-size 12px
            text-align center
            span
                display block
                max-width 100%
                overflow hidden
                padding-right 10px
                padding-bottom 10px
                float left
                a
                    height 23px
                    line-height 24px
                    border-radius 3px
                    display block
                    width 100%
                    color #686868
                    white-space nowrap
                    text-overflow ellipsis
                    background-color #f0f2f5
                    padding-left 13px
                    padding-right 13px
                    overflow hidden
                    box-sizing border-box
    .wjy-srarch-close-history
        position fixed
        left 0
        bottom 20px
        width 100%
        button
            display block
            width 80%
            margin 0 auto
</style>