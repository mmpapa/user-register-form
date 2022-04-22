import { useEffect,useState } from "react";
import { API } from "aws-amplify";
import { ProfileA } from "../ui-components";
import * as query from "../graphql/queries";
import { useLocation } from 'react-router-dom';

export default function UserProfilePage(){

    const search = useLocation().search;
    const queryString = new URLSearchParams(search);
    const [profile,setProfile] = useState(null);
    
    useEffect(()=>{
        // GraphQLのschema.graphqlから自動生成したqueryのコードを使ってユーザ情報を取得
        const getPf = async () =>{
            const profile = await API.graphql(
                {query:query.getUserProfile,variables:{id:queryString.get("id")}}
                );

            setProfile({
                nickname:profile.data.getUserProfile.nickname,
                address:profile.data.getUserProfile.address,
                email:profile.data.getUserProfile.email,
                image_url:profile.data.getUserProfile.image_url 
            });
        };
        getPf();
    },[]);

    // 自動生成したUserProfileにわたすパラメータ
    // 自動生成したコンポーネントのonChangeやスタイルなどはここで指定
    // Flex.Flex[0].Flex[4].Button[0] となっている部分は自動生成されたUserProfileを見ると該当箇所がわかります
    const profileOverrides = {
        "Flex.Button[0]": {
            padding: "8px 8px 8px 8px"
  
          },
    };
    return (
        // さきに用意した profileOverrides をわたして自動生成したコンポーネントを表示
            <ProfileA userProfile={profile} overrides={profileOverrides}/>
    );
}
