<template>
    <div class="aboutSummary">
        <div class="bannerImg"><img src="../../assets/images/home/banner6.png"></div>
        <aboutSummary/>
        <collegeSpecial/>
    </div>
</template>
<script>
import aboutSummary from '../home/component/about/aboutSummary'
import collegeSpecial from '../home/component/about/collegeSpecial'

export default {
    components:{
        aboutSummary,
        collegeSpecial
    }
}
</script>