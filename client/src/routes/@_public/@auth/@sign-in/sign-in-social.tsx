import IconGoogleLogo from "@/components/icons/google-logo";
import { Button } from "@/components/ui/button";
import { useSignInPageActions } from "./sign-in.actions";

export default function SignInSocial() {
  const { signInSocialGoogleMutation } = useSignInPageActions();

  return (
    <div className=" w-full flex flex-col ">
      <Button size={"lg"} onClick={() => signInSocialGoogleMutation.mutate()} variant={"outline"}>
        <IconGoogleLogo />
        Entrar com Google
      </Button>
    </div>
  );
}
