import { user } from "@/data/user";
import { redirect } from "next/navigation";

const MyProfilePage = () => {
  redirect("/" + user.slug);
  return null;
};

export default MyProfilePage;
