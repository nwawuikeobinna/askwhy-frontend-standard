import React from "react";
import { Switch } from "react-router-dom";

import Register from "../components/modules/auth/Register";
import Login from "../components/modules/auth/Login";
import Landing from "../components/layout/Landing";
import Dashboard from "../components/modules/user/dashboard";
import UserRoute from "./UserRoute";
import GuestRoute from "./GuestRoute";
import CreateProfile from "../components/CreateProfile";
import AddExperience from "../components/Credentials/addExperience";
import AddEducation from "../components/Credentials/addEducation";
import AllProfiles from "../components/Profiles/allProfiles";
import AddPostForm from "../components/Posts/addPostForm";
import AllPosts from "../components/Posts/allPosts";
import SinglePost from "../components/Post/singlePost";

const MainRoute = () => {
  return (
    <Switch>
      <GuestRoute exact={true} path={["/", "/home"]} component={Landing} />
      <GuestRoute exact={true} path="/register" component={Register} />
      <GuestRoute exact={true} path="/login" component={Login} />
      <UserRoute exact={true} path="/user/dashboard" component={Dashboard} />
      <UserRoute
        exact={true}
        path="/user/create-profile"
        component={CreateProfile}
      />
      <UserRoute exact={true} path="/user/profiles" component={AllProfiles} />
      <UserRoute exact={true} path="/user/post" component={AddPostForm} />
      <UserRoute exact={true} path="/user/posts" component={AllPosts} />
      <UserRoute
        exact={true}
        path="/user/add-experience"
        component={AddExperience}
      />
      <UserRoute
        exact={true}
        path="/user/add-education"
        component={AddEducation}
      />
      <UserRoute exact={true} path="/post/:id" component={SinglePost} />
    </Switch>
  );
};

export default MainRoute;
