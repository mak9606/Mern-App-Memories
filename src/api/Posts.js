import axios from 'axios';

const url="https://memories-app-thmmak.herokuapp.com/posts";
 

export const fetchData=()=> axios.get(url);

export const postData=(newPost)=>axios.post(url,newPost);

export const updateData=(id,updatePost)=>axios.patch(`${url}/${id}`,updatePost);

export const deleteData=(id)=>axios.delete(`${url}/${id}`);

export const likePost=(id)=>axios.patch(`${url}/${id}/likePost`);