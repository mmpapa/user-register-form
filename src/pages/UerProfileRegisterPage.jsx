import {EditProfile} from "../ui-components";
import React,{useState} from "react";
import { API } from "aws-amplify";
import * as mutaion from "../graphql/mutations"
import { useNavigate } from "react-router-dom";


export default function UserProfileRegisterPage() {
    let navigate = useNavigate();
    const [nickName, setNickName] = useState("");
    const [addres, setAddress] = useState("");
    const [email, setEmail] = useState("");

    const profileOverrides = {
        "TextField29766922": {
          onChange: (event) => { setNickName(event.target.value) }
        },
        "TextField29766923": {
          onChange: (event) => { setAddress(event.target.value) }
        },
        "TextField29766924": {
          onChange: (event) => { setEmail(event.target.value) }
        },
        "Button": {
          onClick: () => registerProfile(),
          padding: "8px 8px 8px 8px"
      
        },
        "Divider29766925":{
          margin: "12px"
        }
      }

    // GraphQLのschema.graphqlから自動生成した mutationのコードを使ってユーザ情報を登録
    // 登録後はユーザ情報を表示する画面にIDをクエリに指定して遷移
    const registerProfile = () =>{
        const profile = {
            nickname: nickName,
            address: addres,
            email:email,
            image_url: "https://xxxxxxxxx/ofuro_sauna_tonttu_character.png"
        }
        const regist = async () => {
            const newProfile = await API.graphql({query:mutaion.createUserProfile,variables:{input: profile}});
            navigate("/profile?id=" + newProfile.data.createUserProfile.id);
        }
        regist();
    }


    return (
        // さきに用意した profileOverrides をわたして自動生成したコンポーネントを表示
        <EditProfile overrides={profileOverrides}/>
    )    
}