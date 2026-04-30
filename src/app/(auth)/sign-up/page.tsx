import { AuthLayout } from "../_components/auth-layout";
import ArrowIcon from '../../../assets/arrow-icon.png'
import Image from "next/image";
import { inputClasses } from "../_styles/input";

export default function SignUpPage() {
    return (
        <AuthLayout
            title="Criar conta"
            description="Preencha os campos abaixo para criar sua conta"
            footerText="Já tem uma conta?"
            footerLinkText="Entrar"
            footerHref="/sign-in"
        >
           
            <form className="text-[#D4D4D8] space-y-6 " >
            
                <label className="text-sm mb-2 block ">Nome</label>
            <input 
            className={inputClasses} 
            type="text"
            placeholder="Digite seu nome" />
                <label className="text-sm mb-2 block ">E-mail</label>
            <input 
            className={inputClasses} 
            type="email"
            placeholder="Digite seu e-mail" />
            
            
                <label className="text-sm mb-2 block " >Senha(mín. 8 caracteres)</label>
            <input 
            className={inputClasses} 
            type="password" 
            placeholder="••••••••" />

            <button type="submit" className="bg-[#9333EA] hover:bg-[#7E22CE] text-white font-semibold py-4 rounded-3xl w-full flex items-center justify-center gap-2 cursor-pointer">
                <span>Criar conta</span>
               <Image src={ArrowIcon} alt="Arrow Icon" />
            </button>
           
           </form>
        </AuthLayout>
    );
}