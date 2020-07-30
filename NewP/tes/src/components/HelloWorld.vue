<template>
        <div class="con">
              <h1>同学录
              </h1>
              <el-row :gutter="20">
                    <el-col :span="6">
                         <input type="text" placeholder="请输入姓名" v-model="info.name">
                         
                    </el-col>
                    <el-col :span="6">
                         <input type="text" placeholder="请输入年龄" v-model="info.age">
                    </el-col>
                    <el-col :span="6">
                          <input type="text" placeholder="请输入性别" v-model="info.sex">
                    </el-col>
                    <el-col :span="6">
                         <el-date-picker
                            v-model="info.date"
                            align="right"
                            type="date"
                            format="yyyy 年 M 月  d日"
                            value-format="yyyy-M-d"
                            placeholder="选择日期"
                          >
                        </el-date-picker>
                    </el-col>

              </el-row>
              <div>
                    <el-button type="primary" @click="sub" class="Sub">提交</el-button>
              </div>
              <div>
                     <el-table
                          :data="list"
                          height="250"
                          border
                          style="width: 100%">
                          <el-table-column
                            prop="name"
                            label="姓名"
                            width="180">
                          </el-table-column>
                          <el-table-column
                            prop="age"
                            label="年龄"
                            width="180">
                          </el-table-column>
                          <el-table-column
                            prop="sex"
                            label="性别">
                          </el-table-column>
                          <el-table-column
                            prop="date"
                            label="日期"
                            width="180">
                          </el-table-column>
                          <el-table-column label="操作">
                                <template slot-scope="scope">
                                  <el-button
                                    size="mini"
                                    @click="ed(scope.$index)">编辑</el-button>
                                  <el-button
                                    size="mini"
                                    type="danger"
                                    @click="del(scope.row.index)">删除</el-button>
                                </template>
                          </el-table-column>
                    </el-table>



                    <el-dialog title="收货地址" :visible.sync="vision">
                            <el-form :model="edit">
                              <el-form-item label="请输入姓名">
                                <el-input v-model="edit.name" autocomplete="off"></el-input>
                              </el-form-item>
                              <el-form-item label="请输入年龄">
                                <el-input v-model="edit.age" autocomplete="off"></el-input>
                              </el-form-item>
                              <el-form-item label="请输入性别">
                                <el-input v-model="edit.sex" autocomplete="off"></el-input>
                              </el-form-item>
                              <el-form-item label="选择日期">
                                <br/>
                                <el-date-picker
                                      v-model="edit.date"
                                      align="right"
                                      type="date"
                                      format="yyyy 年 M 月  d日"
                                      value-format="yyyy-M-d"
                                      placeholder="选择日期"
                                    >
                                </el-date-picker>
                                
                              </el-form-item>
                              
                            </el-form>
                            <div slot="footer" class="dialog-footer">
                              <el-button @click="vision = false">取 消</el-button>
                              <el-button type="primary" @click="edSub">确 定</el-button>
                            </div>
                    </el-dialog>
              </div>
        </div>
</template>

<script>
export default {
    data(){
      return {
          info: {
            index: null,
            name: '',
            age: '',
            sex: '',
            date: null,
          },
          list: [],
          index: 0,
          vision: false,
          edit:{
            index: null,
            name: '',
            age: '',
            sex: '',
            date: null,
          },
      }
    },
    methods: {
       sub(){
          if(this.info.name==='' || this.info.age==='' || this.info.sex==='' || this.info.date==null){
                    const h = this.$createElement;

                    this.$notify({
                      title: '错误',
                      message: h('i', { style: 'color: teal'}, '请完善表格')
                    });
          }else{
          this.info.index=this.index++;
          this.list.push(this.info);
          this.info={
            name: '',
            age: '',
            sex: '',
            date: null,
          }
        }  
       },
       ed(index){
             this.vision=true;
             this.edit.index=index
       },
       del(index){
         this.$confirm('确定删除？')
         .then(()=>{
                this.list=this.list.filter(function(item){
                  return item.index!= index;
                })
         })
         .catch(()=>{})
         
       },
       edSub(){
         
          this.$set(this.list,this.edit.index,this.edit)
          this.edit={
                index: null,
                name: '',
                age: '',
                sex: '',
                date: null,
          }
          this.vision=false
       }
    }
}
</script>

<style scoped>
.con{
  
}
input{
   height: 40px;
   border: 1px solid #DCDFE6;
   border-radius: 4px;
   box-sizing: border-box;
   width: 100%;
}
.Sub{
   width: 100%;
   margin: 25px 0   ;

}
</style>