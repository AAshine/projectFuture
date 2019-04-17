<template>
    <div class="TalentPage">
         <div class="bannerImg"><img src="../../assets/images/home/banner3.png"></div>
        <div class="TitlePublic">
              <h3>学员作品</h3>
          </div>
          <OutstandStundet/>
        <div class="TitlePublic">
              <h3>优秀学员</h3>
          </div>
          <standStudent/>
        <div class="TitlePublic">
              <h3>保障体系</h3>
          </div>
          <SecuritySystem/>
    </div>
</template>
<script>
import standStudent from '../../page/home/component/TalentPage/standStudent'
import OutstandStundet from '../../page/home/component/TalentPage/OutstandStundet'
import SecuritySystem from '../../page/home/component/TalentPage/SecuritySystem'
export default {
    components:{
        standStudent,
        OutstandStundet,
        SecuritySystem
    }
}
</script>
<style lang="stylus" scoped>

</style>