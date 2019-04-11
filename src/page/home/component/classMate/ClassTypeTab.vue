
<template>
    <Row :gutter="32">
        <Col class="demo-tabs-style2">
            <Tabs type="card">
                <Tab-pane label="基础班">
                    <div class="textTitle">
                         基础班想听课程哒哒哒哒 基础班想听课程哒哒哒哒 基础班想听课程哒哒哒哒 基础班想听课程哒哒哒哒 基础班想听课程哒哒哒哒 基础班想听课程哒哒哒哒
            基础班想听课程哒哒哒哒 基础班想听课程哒哒哒哒 基础班想听课程哒哒哒哒 基础班想听课程哒哒哒哒 基础班想听课程哒哒哒哒 基础班想听课程哒哒哒
                    </div>
                </Tab-pane>
                <Tab-pane label="总裁班">总裁班</Tab-pane>
                <Tab-pane label="达人班">达人班</Tab-pane>
                <Tab-pane label="实战班" >实战班</Tab-pane>
            </Tabs>
        </Col>
    </Row>
</template>
<script>
    export default {
        components:{
        }
    }
</script>
<style scoped>
.textTitle {
        text-indent: 2em;
        padding:10px;
}
.demo-tabs-style2 > .ivu-tabs-ink-bar{
    background-color:#9208c5
}
    .demo-tabs-style1 > .ivu-tabs-card > .ivu-tabs-content {
        height: 120px;
        margin-top: -16px;
    }

    .demo-tabs-style1 > .ivu-tabs-card > .ivu-tabs-content > .ivu-tabs-tabpane {
        background: #fff;
        padding: 16px;
    }

    .demo-tabs-style1 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab {
        border-color: transparent;
    }

    .demo-tabs-style1 > .ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active {
        border-color: #fff;
    }
    .demo-tabs-style2 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab{
        border-radius: 0;
        background: #fff;
    }
    .demo-tabs-style2 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active{
        border-top: 1px solid #9208c5;
    }
    .demo-tabs-style2 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active:before{
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background: #9208c5;
        position: absolute;
        top: 0;
        left: 0;
    }
</style>
