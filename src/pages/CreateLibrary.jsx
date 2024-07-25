import { CreatePost } from "../components/createPost";

const CreateLibrary = () => {

  return (
    <div className="container mx-auto p-4 w-full">
        <CreatePost title={"Create New Library"} postType={"library"} />
    </div>
  );
};

export default CreateLibrary;
