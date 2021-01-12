import React from 'react';
import * as api from '../api/Posts';
import { CREATE, FETCH_ALL, UPDATE,DELETE ,LIKE} from '../constants/Posts';

export const getPosts = () =>async (dispatch) =>{
    const {data}=await api.fetchData();
    try {
        dispatch({type:FETCH_ALL , payload:data})
    } catch (error) {
        console.log(error);
        
    }
     
}

export const createPosts=(post)=>async (dispatch)=>{
    try {
        const {data}=await api.postData(post);
        dispatch({type:CREATE , payload: data});
    } catch (error) {
        console.log(error);
    }
}
export const updatePost=(id,post)=>async dispatch=>{
    try {
        const {data}=await api.updateData(id,post);
        dispatch({type:UPDATE ,payload:data});
    } catch (error) {
        console.log(error);
    }
}
export const deletePost=(id)=>async (dispatch)=>{
try {
    await api.deleteData(id);
    dispatch({type:DELETE ,payload:id});
} catch (error) {
    console.log(error);

}
}

export const likePost=(id)=>async (dispatch)=>{
    try {
        const {data}=await api.likePost(id);
    dispatch({type:LIKE, payload:data});
    } catch (error) {
        console.log(error);

    }
}