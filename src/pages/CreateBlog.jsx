import { CreatePost } from "../components/createPost";


const CreateBlog = () => {

  return (
    <div className="container mx-auto p-4 w-full">
        <CreatePost title={"Create new blog"} postType={"blogs"} />
    </div>
  );
};

export default CreateBlog;
