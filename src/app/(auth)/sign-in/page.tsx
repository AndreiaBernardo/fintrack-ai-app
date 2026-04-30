import { AuthLayout } from "../_components/auth-layout";
import ArrowIcon from '../../../assets/arrow-icon.png'
import Image from "next/image";
import { inputClasses } from "../_styles/input";

export default function SignIn() {
    return (
        <AuthLayout
            title="Bem-vindo de volta"
            description="Entre com suas credenciais para acessar sua conta"
            footerText="Não tem uma conta?"
            footerLinkText="Cadastre-se"
            footerHref="/sign-up"
        >
           <form className="text-[#D4D4D8] space-y-6 " >
            
                <label className="text-sm mb-2 block ">E-mail</label>
            <input 
            className={inputClasses} 
            type="email"
            placeholder="Digite seu e-mail" />
            
            
                <label className="text-sm mb-2 block " >Senha</label>
            <input 
            className={inputClasses} 
            type="password" 
            placeholder="••••••••" />

            <button type="submit" className="bg-[#9333EA] hover:bg-[#7E22CE] text-white font-semibold py-4 rounded-3xl w-full flex items-center justify-center gap-2 cursor-pointer">
                <span>Entrar</span>
               <Image src={ArrowIcon} alt="Arrow Icon" />
            </button>
           </form>
        </AuthLayout>
    );
}