<template>
    <div ref='wrapper'>
        <slot></slot>
    </div>
</template>

<script>
    import BScroll from 'better-scroll';
    export default {
        props: {
            probeType: {
                type: Number,
                default: 1
            },
            click: {
                type: Boolean,
                default: true
            },
            data: {
                type: Array,
                default: null
            },
            refreshDelay: {
                type: Number,
                default: 20
            },
            pullup: {
                type: Boolean,
                default: false
            },
            listenScroll: {
                type: Boolean,
                default: false
            },
            pullDownRefresh: {
                type: Object,
                default: null
            }
        },
        mounted () {
            setTimeout(() => {
                this._initScroll();
            }, 20);
        },
        methods: {
            _initScroll () {
                console.log(this.pullDownRefresh)
                if (!this.$refs.wrapper) return;
                this.scroll = new BScroll(this.$refs.wrapper, {
                    probeType: this.probeType,
                    click: this.click,
                    pullDownRefresh: this.pullDownRefresh
                })
                this.scroll.on('scroll', (pos) => {
                    this.$emit('scroll', pos);
                })
                this.scroll.on('pullingDown', () => {
                    this.$emit('pullingDown');
                })
                this.scroll.on('pullingUp', () => {
                    this.$emit('pullingUp');
                })
                this.scroll.on('touchEnd', () => {
                    this.$emit('touchEnd');
                })
            },
            refresh () {
                this.scroll && this.scroll.refresh();
            }
        },
        watch: {
            data () {
                setTimeout(() => {
                    this.refresh();
                }, this.refreshDelay);
            }
        }
    }
</script>