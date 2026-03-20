import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../components/layout/layout";
import { Ekipdata } from "../libs/Ekipdata";
export const Ekipreading = () => {
    const { user } = useParams()
    const [blog, Setblog] = useState(null)
    
    useEffect(() => {
        let user1 = Ekipdata.find((data) => data.userlink == user)
        if(user1){
            Setblog(user1)
        } 
    
    },[])
    return(
        <Layout  img="#7a94f3" animation={false} nlc="text-[#7a94f3] border-[#7a94f3] hover:text-[#5365a6] hover:border-[#5365a6]">
            <div className="pt-32 px-40 flex flex-col space-y-5 h-screen">
                <div className="flex  flex-row ">
                    <img src={blog?.userphoto} alt="" className="float-left p-4 w-44 rounded-full" />
                    <div className="flex  flex-col justify-center space-y-2">
                        <h1 className="text-4xl">{blog?.user}</h1>
                        <p className="pl-4">{blog?.usertext}</p>
                        <div className="flex flex-row space-x-2 pl-3">
                        {blog?.usersocialmedias.map(medias => (
                            <a href="">
                                <medias.image className={`text-3xl ${medias.color}`}/>
                            </a>
                        ))}
                        </div>
                    </div>
                </div>
                <p className="text-justify text-xl">{blog?.userblog}</p>
            </div>
        </Layout>
    )

}