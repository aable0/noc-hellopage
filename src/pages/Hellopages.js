import { About } from "../components/items/About";
import { Card } from "../components/items/card";
import { Hero } from "../components/items/Hero";
import { Layout } from "../components/layout/layout";
import { IdContext } from '../contexts/IdContext';
import { useContext } from "react";
export const Mainpage = () => {
    const { Id } = useContext(IdContext);
return(
    <Layout img={Id === 2 ? "#000000" : "#ffffff"} animation={true} nlc={Id === 2 ? "text-[#000000] border-[#000000] hover:text-[#48494e] hover:border-[#48494e] hover:border-b-8" : "hover:border-b-8 text-[#ffffff] border-[#ffffff] hover:text-[#e6e6e6] hover:border-[#e6e6e6]"}>
        <Hero/>
        <div className='pb-20 flex flex-col space-y-10 rounded-full'>
            <About/>
            <Card/>

        </div>


    </Layout>
);
}