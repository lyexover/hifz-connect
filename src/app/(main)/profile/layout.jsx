import ProfileHeader from "@/app/components/profile/Header";
import ProfileNav from "@/app/components/profile/Nav";

export default function profileLayout({ children }) {
  return (
    <div>
      <ProfileHeader />
      <ProfileNav/>
      {children}
    </div>
  );
}