import { UserProfile } from "@/common.types";
import ProfilePage from "@/components/ProfilePage";
import { getUserProducts } from "@/lib/actions";
import { NextPage } from "next";
import React from "react";

interface IProfileProps {
    params: {
        id: string;
    };
}

const Profile: NextPage<IProfileProps> = async ({ params: { id } }) => {
    const result = (await getUserProducts(id, 100)) as { user: UserProfile };
    if(!result.user) {
        return <p className="no-result-text">Failed to fetch user info</p>
    }
    return <ProfilePage user={result.user}/>;
};

export default Profile;
