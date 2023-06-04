background: url(@assets/img/bg.pngsrc\assets\images\6663.jpg) 
<template>
    <div class="FrontPage">
        <h1 style="text-align: center;margin-top: 100px;color: white;">CET-6 考试系统</h1>

        <el-card id="left-up" class="box-card">
            <div class="flip">
                <div class="front"
                    style="background-image: url(https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)">
                    <h1 class="text-shadow">考试简介</h1>

                </div>
                <div class="back">
                    <h2>Angular</h2>
                    <p>Good tools make application development quicker and easier to maintain than if you did everything by
                        hand..</p>
                </div>
            </div>
        </el-card>

        <el-card id="right-up" class="box-card">
            <div class="flip">
            <div class="front"
                style="background-image: url(https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)">
                <h1 class="text-shadow">报名缴费</h1>
            </div>
            <div class="back">
                <h2>Mountain</h2>
                <p>Good tools make application development quicker and easier to maintain than if you did everything by
                    hand..</p>
            </div>
        </div>
        </el-card>

        <el-card id="left-down" class="box-card">
            <div class="flip" @click="goExam">
            <div class="front"
                style="background-image: url(https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)">
                <h1 class="text-shadow">考试入口</h1>
            </div>
            <div class="back">
                <h2>Angular</h2>
                <p>Good tools make application development quicker and easier to maintain than if you did everything by
                    hand..</p>
            </div>
        </div>
        </el-card>

        <el-card id="right-down" class="box-card">
            <div class="flip">
            <div class="front"
                style="background-image: url(https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)">
                <h1 class="text-shadow">成绩查询</h1>
            </div>
            <div class="back">
                <h2>Angular</h2>
                <p>Good tools make application development quicker and easier to maintain than if you did everything by
                    hand..</p>
            </div>
        </div>
        </el-card>

    </div>
</template>

<script>
import BreadcrumbNav from "../common/BreadcrumbNav";

// 导入子组件
import OrderTable from "./orderChildComponents/OrderTable";
import OrderEdit from "./orderChildComponents/OrderEdit";
import OrderProgress from "./orderChildComponents/OrderProgress";

import { getOrderListRequest } from 'network/order';


export default {
    methods: {
        goExam() {
            this.$router.push('/Exam');
        }
    }
}
</script>

<style>
body {
    background: #222;
}


#left-up {
    position: absolute;
    margin-left: 300px;
    left: 50px;
    margin-top: 100px;

}

#right-up {
    margin-left: 850px;
    height: 100%;
    margin-top: 122px;
}

#left-down {
    position: absolute;
    margin-left: 300px;
    left: 50px;
    margin-top: 40px;
}

#right-down {
    margin-left: 850px;
    height: 100%;
    margin-top: 40px;
}

.shadowbox-4 {
    width: 15em;
    border: 3px solid #333;
    border-radius: 20px;
    /*弧度*/
    border-color: #99a9bf;
    /*边框颜色*/
    padding: 8px 12px;
    position: relative;
    left: 700px;
    top: -92px;
    width: 400px;
    height: 150px
}

.el-card__body {
    background: #222;
    padding: 0;
}

.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}

.box-card {
    width: 480px;
}
</style>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono');

* {
    box-sizing: border-box;
    font-weight: normal;
}


h1 {
    font-size: 2.2em;
}

// base
.flip {
    position: relative;
    >.front,
    >.back {
        display: block;
        transition-timing-function: cubic-bezier(.175, .885, .32, 1.275);
        transition-duration: .5s;
        transition-property: transform, opacity;
    }

    >.front {
        transform: rotateY(0deg);
    }

    >.back {
        position: absolute;
        opacity: 0;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        transform: rotateY(-180deg);
    }

    &:hover {
        >.front {
            transform: rotateY(180deg);
        }

        >.back {
            opacity: 1;
            transform: rotateY(0deg);
        }
    }

    &.flip-vertical {
        >.back {
            transform: rotateX(-180deg);
        }

        &:hover {
            >.front {
                transform: rotateX(180deg);
            }

            >.back {
                transform: rotateX(0deg);
            }
        }
    }
}

// custom
.flip {
    position: relative;
    display: inline-block;
    margin-right: 2px;
    width: 100%;
    height: 100%;

    >.front,
    >.back {
        display: block;
        color: white;
        width: inherit;
        background-size: cover !important;
        background-position: center !important;
        height: 220px;
        padding: 1em 2em;
        background: #313131;
        border-radius: 10px;

        p {
            font-size: 0.9125rem;
            line-height: 160%;
            color: #999;
        }
    }
}

.text-shadow {
    text-shadow: 1px 1px rgba(0, 0, 0, 0.04), 2px 2px rgba(0, 0, 0, 0.04), 3px 3px rgba(0, 0, 0, 0.04), 4px 4px rgba(0, 0, 0, 0.04), 0.125rem 0.125rem rgba(0, 0, 0, 0.04), 6px 6px rgba(0, 0, 0, 0.04), 7px 7px rgba(0, 0, 0, 0.04), 8px 8px rgba(0, 0, 0, 0.04), 9px 9px rgba(0, 0, 0, 0.04), 0.3125rem 0.3125rem rgba(0, 0, 0, 0.04), 11px 11px rgba(0, 0, 0, 0.04), 12px 12px rgba(0, 0, 0, 0.04), 13px 13px rgba(0, 0, 0, 0.04), 14px 14px rgba(0, 0, 0, 0.04), 0.625rem 0.625rem rgba(0, 0, 0, 0.04), 16px 16px rgba(0, 0, 0, 0.04), 17px 17px rgba(0, 0, 0, 0.04), 18px 18px rgba(0, 0, 0, 0.04), 19px 19px rgba(0, 0, 0, 0.04), 1.25rem 1.25rem rgba(0, 0, 0, 0.04);
}</style>