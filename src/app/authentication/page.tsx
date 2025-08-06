import { AppWindowIcon, CodeIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignInForm from "./components/sign-in-form";
import SignUpForm from "./components/sign-up-form";

const Authentication = () => {
  return (
    <div className="flex h-[100dvh] w-full flex-col gap-6 p-5">
      <Tabs defaultValue="sign-in">
        {/* Tab List*/}
        <TabsList>
          <TabsTrigger value="sign-in">Entrar</TabsTrigger>
          <TabsTrigger value="sign-up">Criar Conta</TabsTrigger>
        </TabsList>
        {/* Sign in form*/}
        <TabsContent value="sign-in" className="w-full">
          <SignInForm />
        </TabsContent>
        {/* Sign up form*/}
        <TabsContent value="sign-up" className="w-full">
          <SignUpForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Authentication;
