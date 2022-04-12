import React, { useEffect } from "react"
import { Button } from 'antd'
import useCounterController from "./store/useCounterController"
import useUserController from "./store/useUserController"

const Counter:React.FC<{}> = () =>  {
 
  const [counter,counterController] = useCounterController()
  const [user,userController] = useUserController()

  useEffect(
     ()=>{
        userController.setName("stateController")
     },[userController]
  )

   useEffect(
     ()=>{
        external.onCounterUpdate(user.name,counter.value);
     },[counter.value,user.name]
  )
  
  
  return (
    <div>
      name: { user.name } value: {counter.value} <Button onClick={ () => { 
        counterController.increment(1);  
      } }>点这里增加计数，跨组件同步状态。</Button>  <br /> 
      { user.lastActiveTime.toLocaleString() }
      <br /> <br /> 
    </div>
  )
}
 
export default Counter;