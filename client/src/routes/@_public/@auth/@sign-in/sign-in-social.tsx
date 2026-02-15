import IconGoogleLogo from "@/components/icons/google-logo";
import { Button } from "@/components/ui/button";

export default function SignInSocial() {
  return (
    <div className=" w-full flex flex-col ">
      <Button variant={"outline"}>
        <IconGoogleLogo />
        Entrar com Google
      </Button>
    </div>
  );
}
