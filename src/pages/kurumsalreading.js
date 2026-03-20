import { Layout } from "../components/layout/layout";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Kurumsaldata } from "../libs/kurumsaldata";
export const Kurumsalreading = () => {
    const { id } = useParams()
    const [Data , setData] = useState(null)
    useEffect(()=> {
        let data1 = Kurumsaldata.find((data) => data.title ===  id);
        if(data1){
            setData(data1)
        }

    },[])

    const FormHandler = (event) => {
        const element = event.target.elements
        const isim = element.name.value
        const email = element.email.value
        const text = element.text.value
        window.open(`mailto:lberk1234qwerta@gmail.com?body=${encodeURIComponent(
            `geri dönüşünüz düştü   \nisim: ${isim} \nemail: ${email} \ntext: ${text}`
        
            )}`)
    }
    const Başvuru = () => {
        if (Data?.form === true) {
            return(
                <div className="flex flex-col space-y-20 ">
                    <h1 className="text-3xl md:text-3xl lg:text-4xl ">Sponsorluk başvurusu</h1>
                    <form onSubmit={FormHandler} className="flex flex-col w-full lg:px-80 px-5 space-y-3">
                        <div className="flex flex-row space-x-4">
                            <input 
                            type="text" 
                            name="name"
                            className=" placeholder-white text-white w-full p-2 border-b-4 border-[#344591] bg-[#7a94f3] rounded-xl focus:outline-none"
                            placeholder="Şirket Adı"
                            required
                            />
                            <input 
                            type="email" 
                            className=" placeholder-white text-white w-full p-2  border-b-4 border-[#344591] bg-[#7a94f3] focus:outline-none rounded-xl"
                            placeholder="example@example.com"
                            name="email"
                            required
                            />
                        </div>
                        <textarea 
                        rows="5" 
                        style={{"resize": "none"}} 
                        placeholder="Açıklama"
                        name="text"
                        className="p-4 text-white placeholder-white w-full border-b-4 border-[#344591] bg-[#7a94f3] rounded-xl focus:outline-none">


                        </textarea>
                        <button className=" font-bold text-lg text-white w-full p-2 border-b-4 border-[#344591] bg-[#7a94f3] rounded-xl focus:outline-none">
                            submit
                        </button>
                    </form>
                </div>
            )
        }
        else {
            return(
                <div>
                    
                </div>
            )
        }
    }

return(
    <Layout animation={false} nlc="#7a94f3" hnlc="#5365a6" snlc="#7a94f3" shnlc="#5365a6">
        <div className="pt-24 px-20 flex flex-col space-y-20 h-full">
            <div className=" pt-10 text-xl text-[#7a94f3] flex flex-row space-x-2">
                <a href="/" className="hover:underline hover:underline-offset-2">Anasayfa</a>
                <span>-</span>
                <a href="/Kurumsal" className="hover:underline hover:underline-offset-2">Kurumsal</a>
                <span>-</span>
                <h1>{id}</h1>
            </div>
            <div className="flex flex-col space-y-10">
                <h1 className="text-3xl">{Data?.text}</h1>
                <div className="flex flex-col space-y-10">    
                    <div className="flex flex-col space-y-5">
                    {Data?.info.map(text => (
                            <p>{text}</p>

                    ))}
                    </div>                
                    <p className="text-right">{Data?.Company}</p>
                    <div>
                        <Başvuru/>
                    </div>
                </div>

            </div>       
        </div>

    
    </Layout>
);
}