import { defineStore } from "pinia";

 export const useAdmininform=defineStore('admininform',{
     state(){
        return {
            result:[],
            total: 0,
            logDate:[]
            
        }
     }
 });


 