import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";

const ProfileButton = ({signOut, userName}) => {
    console.log(userName)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarFallback>us</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Profile</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href="#">
          <DropdownMenuItem>My Account</DropdownMenuItem>
        </Link>
        <Link href="#">
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </Link>

          <DropdownMenuItem onClick={()=>{
            signOut({callbackUrl: "/"});
          }}>Sign out</DropdownMenuItem>
        
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileButton;
