<template>
    
    <div id="main-content" class="relative  h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900 "> 
    <main class="main">
      <div id="NoticeHomepageBackGround" class="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700">
        <!-- id:noticeHomepage -->
        <div id="NoticeHomepage"  class="w-full mb-1 mt-10">
            <div class="mb-4">
                <nav class="flex mb-5" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
                      <li class="inline-flex items-center">
                        <a href="#" class="inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white">
                          <svg class="w-5 h-5 mr-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                          用户中心
                        </a>
                      </li>
                    
                      <li>
                        <div class="flex items-center">
                          <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                          <span class="ml-1 text-gray-400 md:ml-2 dark:text-gray-500" aria-current="page">通知管理</span>
                        </div>
                      </li>
                      
                    </ol>
                </nav>
                <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">通知管理</h1>
            </div>
        
            <div class="Operate">
             <!-- 查询的信息 -->
               <div class="queryInform">
                  <input type="text" style="margin-top: 4px; border-radius: 6px; width: 250px; border: 1px solid #ccc;" placeholder="请输入查询信息" v-model="queryData" >
                   <!-- 第一个日期 -->
                  <div class="block">
                     <!-- 日历 -->
                     <el-date-picker
                      v-model="date1"
                      type="date"
                      placeholder="Pick a Date"
                     format="YYYY-MM-DD"
                     value-format="x"
                     />
                  </div>
                 
                  <!-- 查询按钮 -->
                   <div class="query">
                    <button class="queryButton2">查询</button> 
                    <button class="queryButton" @click="query">QUERY</button> 
                     
                   </div>
                   
               </div>

              <!-- 操作类型 -->
               <div class="operateInform">
                 <div class="addAll" style="margin-left:250px">
                    <button class="ADD1" @click="buttonAdd">ADD</button>
                    <button class="add1" >增加</button>

                 </div>
               <div class="deleteAll">
                <button class="delete1" @click="buttonDelete">DELETE</button>
                <button class="delete" >删除</button>
               </div> 

               </div>
            </div>     
        </div>
    </div>
         <!-- 内容 -->
    <div class="contentInform">
          <!-- 标题以及排序 -->
        <div class="title" >
            <div style="border: 1px solid #dfe2e8;height: 30px;line-height: 30px;margin-left: 17px; border-radius: 6px;color: #a8abb2;">通知内容</div>
            <button class="sort" style="margin-left: 50px;border: 1px solid #dfe2e8;height: 30px;line-height: 30px;margin-left: 17px; border-radius: 6px; color: #a8abb2; " @click="sort">排序</button>
        </div>
        <!-- 正式内容 -->
        <div class="FormalContent">
            <el-table
               @selection-change="selectData"
               :data="tableData"
                style="width: 100%"
               :row-class-content="tableRowClassContent"
             >
             <el-table-column prop="id" label="ID"  width="200" />
             <el-table-column prop="releaseDate" label="发布日期" width="400" />
             <el-table-column prop="content" label="内容"  />
          </el-table>

           <!-- 分页条 -->
           <el-pagination background layout="prev, pager, next" :total="total" :page-size="pageNumber" class="Page" default-current-page="1" @current-change="pageSize"/>

            <!-- 中间弹出删除确认框 -->
             <div class="mid" :style="{display: none} " >
              <div class="ConfirmBox" >
                  <span style="display: block;position: relative; margin-top: 70px;margin-left: 130px;">请选择删除的id:</span>
                   <input type="text" style="position: absolute;  width: 50px;height: 20px;left: 250px;top: 73px; " v-model="id">
                <button class="sure" @click="clickSure">确认</button>
                <button class="cancel" @click="clickCancel">取消</button>
                </div>
             </div>
  
             <!-- 中间弹出增加确认框 -->
             <div class="midADD" :style="{display: buttonNone}">
              <div class="ConfirmBoxADD">
                   <div>请输入:</div>
                   <!--发布的通知 -->
                  <textarea  cols="30" rows="10" style="margin-top: 10px;width: 400px;height: 300px;border: 0px;background-color: #f2f3f5; outline: none;"  v-model="textareaText">你好</textarea>               
                  <button style="margin-left: 30px;margin-top: 10px;" @click="publish">发布</button>
                  <button style="background-color: red;margin-left: 150px;" @click="NoPublish">取消</button>
                </div>
                
             </div> 
              
            
           </div>
          
        </div>
    
</main>
    
  </div>
</template>

<script lang="ts" >
import axios from '../../axios';
import { defineComponent, ref,reactive,onMounted, toRefs} from 'vue';
import {useAdmininform} from '../../store/admininform'
export default defineComponent({
    name: 'AdminInformView',
    setup(){
      let store=useAdmininform();//获取store
        let name=10;
       
         //表格
    interface User {
      releaseDate: string
         content: string
         id: string
    }
      const tableRowClassName = ({
         row,
         rowIndex,
      }: {
        row: User
        rowIndex: number
    }) => {
      if (rowIndex === 1) {
      return 'warning-row'
    } else if (rowIndex === 3) {
      return 'success-row'
    }
       return ''
    }
    
     const tableData=ref<User[]>([]);  //创建数组，用于渲染展示
     tableData.value=store.result;//将获取到的数据赋值给tableDate，然后渲染到页面  

     
     let pageNumber=ref(10);    //每页展示的记录数   
    let total=ref(store.total*10*10/pageNumber.value); 
    console.log(total);
    
   //获取当前页码
  
   const pageSize=async (val:any)=>{
        let {data}= await axios.post("http://localhost:8081/userManage/pageSelect",{
           pageSzie: val,
          pageNumber: '10'
        },{});
         console.log("数组:",data.data.notificationRspList);
        
         tableData.value=data.data.notificationRspList;
   }


      const date1= ref(0);//表示第一个日期毫秒值
        const queryData=ref('');//查询内容

      
   //查询数据
   const query=async ()=>{
      let {data}=await axios.get("http://localhost:8081/userManage/queryCondition",{
         params:{
            date1:date1.value,
            content:queryData.value
         }
       });
       
       tableData.value=data.data;
   }
   
     //按时间排序
     const sort= async()=>{
        //向后端发送查询条件
       try {
        let {data}=await axios.get("http://localhost:8081/userManage/sort");
        
        tableData.value=data.data;
         
       } catch (error) {
         alert('操作失败');
       }
     }

       //选中行里面的数据
       const selectData=(data:any)=>{
            console.log("选中的数据",data);
            
       }
       let none=ref("none");
      //删除按钮
      let buttonDelete=()=>{          
         none.value="block"
      }
        
  
        //点击取消删除
     function  clickCancel(){
          none.value="none";
     }   
       //点击确定删除
       let id=ref<number>();
       const clickSure= async()=>{
         //向后端发送请求，删除数据
        
            let {data}=await axios.get("http://localhost:8081/userManage/deleteById",{
          params:{
            id:id.value
          }
        });
             console.log(data.data);
             //获取该数据在数组中的索引
             for (let index = 0; index < tableData.value.length; index++) {
              const element = tableData.value[index];
              if(+element.id==id.value){
                     tableData.value.splice(index,1);
                 }  
             }
             
           //隐藏盒子
           none.value="none";

       }

      //点击增加通知,弹出添加通知框
      let buttonNone=ref("none");
       function buttonAdd(){
        buttonNone.value="block";
       }
  

      //点击发布通知
       let textareaText=ref(''); //文本域的内容
       console.log(textareaText.value);
       
      const publish= async ()=>{
        //向后端发送数据添加通知
        let {data}=await axios.get("http://localhost:8081/userManage/notification",{
          params:{
            content:textareaText.value
          }
        });
        console.log("内容为:",data.data);
        tableData.value.push(data.data);
        //发布成功后清空文本域的内容
        textareaText.value='';
        buttonNone.value="none";
      }
     
       //点击取消发布通知
       function NoPublish(){
        buttonNone.value="none";
       }

       return {name,date1,tableRowClassName,tableData,none,clickCancel,clickSure,buttonAdd,buttonNone,publish,NoPublish,textareaText,sort,pageSize,pageNumber,total,selectData,buttonDelete,id,queryData,query};
    }
    
  });
     
 
</script>
<style scoped>
 
/* 去除聚焦 */
 input:focus{
  border-color: #ccc;
  outline: none;
  box-shadow: none;
 }
  /* 排序 */
  .sort:hover{
    background-color: #2a67f6;
  }
 textarea:focus{
  border-color: #ccc;
  outline: none;
  box-shadow: none;
 }
 el-date-picker:focus{
  border-color: #ccc;
  outline: none;
  box-shadow: none;
 }
    #main-content{
    margin-left: 0px;
    margin-top: 5px;
    
   }
  
   #NoticeHomepageBackGround{
/*     background-color: red;
 */    height: 150px;
   }
   #NoticeHomepage{
/*     background-color: orange;
 */    margin-top: 0px;
    margin-left: 0px;
   }
/* 操作 */
 .Operate{
    display: flex;
 }
     /* 查询信息 */
   .Operate  .queryInform{
       display: flex;
   }
    
  /* 日历 */
  .queryInform  .block{
       margin-top: 10px;
       margin-left: 5px;
  }
  .demo-date-picker {
    display: flex;
    width: 100%;
    padding: 0;
    flex-wrap: wrap;
   }
  .demo-date-picker .block:last-child {
    border-right: none;
  }
 .demo-date-picker .demonstration {
   display:inline-block;
   color: var(--el-text-color-secondary);
   font-size: 14px;
   margin-bottom: 20px;
  }
/* 查询按钮 */
.queryInform .query{
   position: relative;
   margin-top: 10px;
  
   transform-style: preserve-3d;
   transition: all 1s;
   width: 80px;
   height: 30px;
}

.queryInform  .queryButton2{
    position: absolute;
     top: 0px;
     left: 0px;
      width: 80px;
       height: 30px;
       border-radius: 6px;
       background-color: green;
         transform: translateZ(15px);
  }
.queryInform  .queryButton{
      position: absolute;
      top: 0px;
     left: 0px;
       transform: rotateX(90deg);
       transform: rotateX(90deg) translateZ(15px);
        width: 80px;
       height: 30px;
       border-radius: 6px;
       background-color: yellow;
}
.queryInform .query:hover{
    transform: rotateX(-89deg);
}

  /* 操作类型 */ 
  .Operate .operateInform{
       display: flex;
       margin-left: 200px;
       margin-top: 10px;
   }
   
   .Operate .operateInform .addAll{
    position: relative;
   transform-style: preserve-3d;
   transition: all 1s;
   width: 100px;
   height: 35px;
  }
 .operateInform .addAll .ADD1{  
      position: absolute;
      top: 0px;
      left: 0px;
       transform: rotateX(90deg);
       transform: rotateX(90deg) translateZ(17px);
       width: 100px;
       height: 35px;
       border-radius: 6px;
       background-color: yellow;
  }
   .operateInform .addAll .add1{
    position: absolute;
     top: 0px;
     left: 0px;
      width: 100px;
       height: 35px;
       border-radius: 6px;
       background-color: green;
         transform: translateZ(17px);
  }
  
  .Operate .operateInform .addAll:hover{
    transform: rotateX(-89deg);
  }



  
  .Operate .operateInform  .deleteAll{
    position: relative;
   transform-style: preserve-3d;
   transition: all 1s;
   margin-left: 10px;
   width: 100px;
   height: 35px;
  }
   .Operate .operateInform .delete {
    position: absolute;
     top: 0px;
     left: 0px;
      width: 100px;
       height: 35px;
       border-radius: 6px;
       background-color: green;
         transform: translateZ(17px);
   }
   .Operate .operateInform .delete1 {
    position: absolute;
      top: 0px;
      left: 0px;
       transform: rotateX(90deg);
       transform: rotateX(90deg) translateZ(17px);
       width: 100px;
       height: 35px;
       border-radius: 6px;
       background-color: yellow;
   }
   .Operate .operateInform  .deleteAll:hover{
       transform: rotateX(-89deg);
   }
   /* 通知内容 */
   .main  .contentInform .title{
    display: flex;
    height: 30px; 
   }
   /* 正式内容 */
   .main  .contentInform .FormalContent{
    margin-top: 2px;
      margin-left: 17px;
      height: 540px;
      width: 1180px;
       border: 1px solid #a8abb2;
      background-color: white;       
   }
   .el-table .warning-row {
     --el-table-tr-bg-color: var(--el-color-warning-light-9);
    }  
    .el-table .success-row {
     --el-table-tr-bg-color: var(--el-color-success-light-9);
    } 
    /* 表单里面删除的按钮 */
    .el-table .operateDelete{
       width: 50px;
       height: 20px;
       border-radius: 6px;
       background-color: red;
    }
   
    
    .main  .contentInform .FormalContent .mid{
         position: absolute;
         top: 0px;
         left: 0px;
         width: 100%;
         height: 100%;
         background-color: rgb(255, 255, 255,0.5);
        
         z-index: 9;
    }

    /* 中间弹出的确认删除框 */
    .main  .contentInform .FormalContent .ConfirmBox{
       position: absolute;
        top: 200px;
        left: 350px;
        width: 400px;
        height: 200px;
        background-color: #e1e4e9;
        border-radius: 6px;
        
    }
    .main  .contentInform .FormalContent .ConfirmBox .sure{
        margin-left: 70px;
        margin-top: 70px;
         width: 50px;
    }
    .main  .contentInform .FormalContent .ConfirmBox .cancel{
        margin-left: 155px;
        width: 50px;
    }


    /* 中间弹出的增加通知框 */
    .main  .contentInform .FormalContent .midADD{
           position: absolute;
           top: 0px;
           left: 0px;
           width: 100%;
           height: 100%;
           background-color: rgb(255, 255, 255,0.5);
           z-index: 9;   
        }
    .main  .contentInform .FormalContent .ConfirmBoxADD{
       position: absolute;
        top: 150px;
        left: 350px;
        width: 400px;
        height: 400px;
        background-color: #e1e4e9;
        border-radius: 6px;
    }
    /* 发布取消通知按钮 */
    .ConfirmBoxADD  button{
      width: 100px;
       height: 35px;
       border-radius: 6px;
       background-color: blue;
    }
     /* 分页条 */
     .Page{
       margin-left: 350px;
     }


 </style>