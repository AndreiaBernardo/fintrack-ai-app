import { Sidebar } from "@/src/app/_components/sidebar";
import { Header } from "@/src/app/_components/header";
import BalanceCard from "./_components/balance-card";
import { FinancialMetricCard } from "./_components/financial-metric-card";
import { ChartCard } from "./_components/chart-card";





export default function Home() {

  return(

    <>
    <div className="min-h-screen flex bg-[#0F111A]">
 
      <Sidebar/>
      <div className="flex flex-1 flex-col text-white">
        <Header 
        userName='Andréia Bernardo' 
        date={new Date()}/>
        <main className="p-8 space-y-8">
          <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 col-span-1">
              <BalanceCard
            balance={1000}
            receitas={500}
            despesas={500}
          />
            </div>

            <div >

              <FinancialMetricCard/>
            
            </div>
             </section>

             <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <ChartCard
              depositsTotal={1000}
              expensesTotal={500}
              investmentsTotal={500}
              balance={1000}
              />

             </section>
          
        </main>
      </div>
      
    </div>
   

   
    
      </>
        

       
        
        
    
  
  ) 
}