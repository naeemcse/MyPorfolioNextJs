// @ts-ignore
import toast from 'react-hot-toast';
export  function  ErrorToast(msg:string) {
    toast.error(msg);
}
export  function  SuccessToast(msg:string) {
    toast.success(msg);
}
export const Loading = ()=>{  toast.loading('Waiting...');}
