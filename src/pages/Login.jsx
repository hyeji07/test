import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';
import { useSetRecoilState, useRecoilState, useRecoilValue } from 'recoil';
import { authenticatedState } from './../recoil/store';

const Login= () => {
  const SERVER_URL='http://3.39.184.23:80/api/v1/user';

  const [userName,setUserName]=useState('');
  const [password, setPassword] = useState('');

  const [token, setToken] = useRecoilState(authenticatedState);

 /*  const setAuthenticated=useSetRecoilState(authenticatedState);
 */
 //const [userTOKEN, setUserTOKEN] = useRecoilState(authenticatedState);

/*   const [userSubmit,SetUserSubmit]=useState(''); */

/* const userTOKEN=useRecoilValue(authenticatedState); */

/* const token = window.location.href.split('?token=')[1];
 */
  const onChangeIdInput=(e)=>{
    setUserName(e.target.value);
  }

  const onChangePasswordInput=(e)=>{
    setPassword(e.target.value);
    
  }

  /* const fetchData=async()=>{
    const response=await axios.get(`${SERVER_URL}/sign_in`);
    SetUserSubmit(response.data);
   };
   useEffect(()=>{
    fetchData();
   },[]); */


  const doLogin=(e)=>{
    e.preventDefault();
    /* const login=async()=>{
      await axios.post(SERVER_URL,{userName,password});
    }; */
   /*  await axios.post(SERVER_URL,{userName,password});
    console.log(data)
    fetchData(); */
    const res=async()=>{
      const data= await axios.post(`${SERVER_URL}/sign_in`,{username:userName,password})/* {
      headers: {
          Authorization: `Bearer ${accessToken}`,
          }
      } )*///data보내는 앞에 이름(username,password=포스트맨과 동일해야함)
       /* if(data.headers.authorization){
        setAuthenticated(true);
        localStorage.setItem('login-token',data.headers.authorization);
      } */
      /* */
    
        /*if (token) localStorage.setItem('4242-token', token);
        if (localStorage.getItem('4242-token')) setAuthenticated(true);
      */
      
       /*  if(data.headers.Authorization){
        setToken(data);
        localStorage.setItem('login-token',data.headers.Authorization);
      }  */
      /* const accessToken = await data;
      localStorage.setItem('login-token', accessToken); */
      const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJhYWEiLCJpYXQiOjE2NzU4ODMyMjJ9.UKLMxrbScXnldMrNlChwHcpRQLrZTKDV66qmIqe2ff8'
      if (token) {
        localStorage.setItem('token', token);
      }
      alert('로그인 되었습니다');

    };
    res();
  };

  /*  let body={
      username:,
      password:
  } */

  /* const fetchData=async()=>{
    const response=await axios.get(SERVER_URL);
    setId(response.data);
  };

  useEffect(()=>{
    fetchData();
  },[]);
 */
/*   const onSubmitHandler=async(e)=>{
  e.preventDefault();
  const text=e.target.text.value;
  await axios.post(SERVER_URL,{text,done});
  fetchData();//다시 setState해야 바뀐내용이 post된다.
  }; */

  /* const LoginFunc = (e) => {
    e.preventDefault();
    if (!id) {
      return alert("ID를 입력하세요.");
    }
    else if (!pwd) {
      return alert("Password를 입력하세요.");
    }
    else {

    }
  } */

  return (
    <div>
      <h3>- Login -</h3>
      <div className="loginBox">
        <form onSubmit={doLogin} style={{display:'flex', flexDirection:'column', width:'500px'}}>
          <input 
            type="text"
            className='login-input'
            placeholder='아이디 입력하세요'
            value={userName}
            onChange={onChangeIdInput}
          />
          <input
            type="password"
            className='login-input'
            placeholder='비밀번호 입력하세요'
            value={password}
            onChange={onChangePasswordInput}
            style={{margin:'10px 0'}}
          />
          <button type='submit'>로그인</button>
          <p>{token}</p>
        </form>
      </div>
  </div>
  );
};

export default Login;