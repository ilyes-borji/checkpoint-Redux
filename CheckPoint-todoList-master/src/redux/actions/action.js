import {ADD_TODO,
    EDIT_TODO,
    REMOVE_TODO,
    TOGLLE_COMPLITE } from "./actionType"

    export const add_todo =(newtodo)=>{
        return {
            type:ADD_TODO,
            payload:newtodo
        }

    }
    export const edit_todo =(edittodo)=>{
        return {
            type:EDIT_TODO,
            payload:edittodo
        }


    }
    export const remove_todo =(id)=>{
        return {
            type:REMOVE_TODO,
            payload:id
        }


    }
    export const toglle_complite =(id)=>{
        return {
            type:TOGLLE_COMPLITE,
            payload:id
        }


    }


