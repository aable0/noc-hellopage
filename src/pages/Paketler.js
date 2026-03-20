import { useEffect, useState } from "react";
import { Layout } from "../components/layout/layout";
import { Paket_data } from "../libs/paketdata";

export const  Paketler = () => {
    const Paket_card = (props) => {
        return(
            <div className="bg-white border-r-8 border-l-8 border-[#ffe8cc] rounded-white shadow-xl flex flex-col p-7 w-full rounded-2xl space-y-5">
                <div className="flex flex-col">
                    <div className="text-[#7a94f3] text-3xl text-center border-b-4 pb-4">
                        {props.name}
                    </div>
                    <div className="text-[#7a94f3] justify-center text-center border-b-4 py-4 flex flex-row space-x-2">
                        <div className="text-5xl h-12 transistion duration-100 delay-100">
                        {props.price}
                        </div>
                        <div className="text-2xl flex items-end">   
                        /ay
                        </div>
                    </div>
                </div> 
                <div className="flex-col flex space-y-4">
                    {props.info.map(info => (
                        <div className="flex flex-row space-x-2 break-all">
                            <img src="/images/tick.svg" alt="" />
                            <div className="text-[#344591] text-lg">{info}</div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center ">
                    <button className="hover:text-lg hover:border-r-[5px] hover:border-l-[5px] hover:w-40 w-48 rounded-xl  hover:w-40 w-full h-10 border-r-[4px] border-l-[4px] delay-75 duration-100 transistion text-[#7a94f3] border-[#7a94f3] ">
                        daha fazla
                    </button>
                </div>
            </div>
        )
    }

    return(
    <Layout img="#7a94f3" animation={false} nlc="hover:border-b-8 text-[#7a94f3] border-[#7a94f3] hover:text-[#5365a6] hover:border-[#5365a6]">
        <div className="pt-44 flex flex-col space-y-20 h-full px-20">
            <h1 className="text-center text-3xl text-[#7a94f3]">Paketler</h1>
            <div className="grid lg:grid-cols-3 gap-4 place-items-center">
                {Paket_data.map(paket => (
                    <Paket_card name={paket.name} price={paket.price} info={paket.info}/>
                ))}

            </div>
        </div>
    </Layout>
    );
}