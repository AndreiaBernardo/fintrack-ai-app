"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";


import logo from "@/src/assets/logo.png";
import dashboard from "@/src/assets/dashboard.png"
import transactions from "@/src/assets/transactions.png"
import lagout from "@/src/assets/logout.png"





const inter = ({
  subsets: ["latin"],
  weight: ["400","500", "700"],


})
    
 
 


export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside
      className={`${inter.className} flex  w-64 h-screen flex-col border-r border-[#1E2938] bg-[#0F111A] text-[#f1f5f9]`}
      
    >
      
      <div className="flex w-[255px] items-center gap-3 px-6 py-6 ">
        <div className="bg-[#9333EA] rounded-xl py-4 px-2.5">
          <Image
          src={logo}
          alt="FinTrack"
          priority
        
        />
        </div>
        <p className="text-xl font-bold leading-5 tracking-[-0.025em]">

          FinTrack
          </p>
          
       
      </div>

   
    <nav className="flex flex-1 flex-col gap-2 px-4 py-4">
      <a href="#"
      className="flex w-full itens-center gap-3 rounded-xl bg-[#9333EA] px-4 py-3 text-white">
         <Image
                src={dashboard}
                alt=""
              
              />

              <span className="text-base font-medium leading-normal">
                Dashboard
              </span>
      </a>
      <a href="#"
      className="flex w-full itens-center gap-3 rounded-xl  px-4 py-3 text-[#94A3B8]">
         <Image
                src={transactions}
                alt=""
               
              />

             <span className="text-base font-medium leading-normal">
              Transações
             </span>
               
            
      </a>

      </nav>

      <div className="border-t border-[#1E2938]  px-6 py-6">
        <a href=""
        className="flex items-center gap-3 rounded-xl px-4 py-3 text-[#94A3B8]">
          <Image
                src={lagout}
                alt=""
          />
          <span className="text-base font-medium leading-normal text-center">
            Sair
          </span>
        </a>

      </div>

     
     

     
      
        
        
    </aside>
  )
}







 
    