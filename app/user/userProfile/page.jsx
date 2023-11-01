import UserLayout from "@/app/layouts/userLayout";
import { test } from "@/lib/utils";

const UserProfile = () => {
  return (
    <UserLayout>
      <div
        className="mx-[100px] mt-20 text-3xl"
        dangerouslySetInnerHTML={{ __html: test }}
      />
    </UserLayout>
  );
};

export default UserProfile;
