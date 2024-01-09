export { default } from "next-auth/middleware";
export const config = {
  matcher: ["/user/userProfile/", "/user", "/user/categoryPage/"],
};
